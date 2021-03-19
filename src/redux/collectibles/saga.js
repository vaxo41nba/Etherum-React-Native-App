import {
  call, put, select, takeLatest, delay,
} from 'redux-saga/effects';
import { Audio } from 'expo-av';

import { actionTypes, playPause } from './actions';
import {
  getIsLoaded,
  getIsPlaying,
  getPlaybackInstance,
  getCurrentIndex,
  getFinished,
  getLooped,
  getShuffled,
} from './selectors';

import audioBookPlaylist from '../../constants/audioBookPlaylist';

function setAudioModeSaga() {
  Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    playsInSilentModeIOS: true,
    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    shouldDuckAndroid: true,
    staysActiveInBackground: true,
    playThroughEarpieceAndroid: true,
  });
}

function* loadAudioSaga(actions) {
  const {
    playbackInstance, source, status, bool,
  } = actions;
  playbackInstance.loadAsync(source, status, bool);
  yield put({ type: actionTypes.SET_PLAYBACK_INSTANCE, playbackInstance });
}

function* playPauseSaga() {
  const isPlaying = yield select(getIsPlaying);
  const playbackInstance = yield select(getPlaybackInstance);

  if (isPlaying) {
    playbackInstance.pauseAsync();
  } else {
    playbackInstance.playAsync();
  }
  yield put(playPause());
}

function* changeTrackSaga(actions) {
  const { loadAudio, curIndex, track } = actions;
  const playbackInstance = yield select(getPlaybackInstance);
  const currentIndex = yield select(getCurrentIndex);
  playbackInstance.pauseAsync();
  playbackInstance.unloadAsync();
  if (track === 'custom') {
    yield put({
      type: actionTypes.UPDATE_CURRENT_INDEX,
      currentIndex: curIndex,
    });
  } else if (track === 'next') {
    yield put({
      type: actionTypes.UPDATE_CURRENT_INDEX,
      currentIndex:
        currentIndex < audioBookPlaylist.length - 1 ? currentIndex + 1 : 0,
    });
  } else {
    yield put({
      type: actionTypes.UPDATE_CURRENT_INDEX,
      currentIndex:
        currentIndex > 0 ? currentIndex - 1 : audioBookPlaylist.length - 1,
    });
  }
  yield delay(100);
  yield call(loadAudio);
}

function* changePositionSaga(actions) {
  const isLoaded = yield select(getIsLoaded);
  const playbackInstance = yield select(getPlaybackInstance);
  if (isLoaded) {
    const status = yield call(() => playbackInstance.getStatusAsync());
    yield call(() => playbackInstance.setStatusAsync({
      positionMillis: actions.position * status.durationMillis,
    }));
  }
}

function* ifFinishedSaga(actions) {
  const { loadAudio } = actions;
  const finished = yield select(getFinished);
  const currentIndex = yield select(getCurrentIndex);
  const playbackInstance = yield select(getPlaybackInstance);
  const isLooped = yield select(getLooped);
  if (finished) {
    yield call(() => playbackInstance.pauseAsync());
    yield call(() => playbackInstance.unloadAsync());
    if (isLooped) {
      yield put({
        type: actionTypes.UPDATE_CURRENT_INDEX,
        currentIndex,
      });
    } else if (currentIndex < audioBookPlaylist.length - 1) {
      yield put({
        type: actionTypes.UPDATE_CURRENT_INDEX,
        currentIndex: currentIndex + 1,
      });
    } else {
      yield put({
        type: actionTypes.UPDATE_CURRENT_INDEX,
        currentIndex: 0,
      });
    }
    yield delay(100);
    yield call(loadAudio);
  }
}

function* shuffleSaga(actions) {
  const { shuffle, loadAudio } = actions;
  const isShuffled = yield select(getShuffled);
  const playbackInstance = yield select(getPlaybackInstance);
  playbackInstance.pauseAsync();
  playbackInstance.unloadAsync();
  if (isShuffled) {
    yield put({
      type: actionTypes.UPDATE_SOURCE,
      source: shuffle(),
    });
    yield delay(100);
    yield call(loadAudio);
  } else {
    yield put({ type: actionTypes.UPDATE_SOURCE, source: audioBookPlaylist });
    yield delay(100);
    yield call(loadAudio);
  }
}

export default function* () {
  yield takeLatest(actionTypes.SET_AUDIO_MODE, setAudioModeSaga);
  yield takeLatest(actionTypes.LOAD_AUDIO_ASYNC, loadAudioSaga);
  yield takeLatest(actionTypes.PLAY_PAUSE_ASYNC, playPauseSaga);
  yield takeLatest(actionTypes.CHANGE_TRACK, changeTrackSaga);
  yield takeLatest(actionTypes.CHANGE_POSITION, changePositionSaga);
  yield takeLatest(actionTypes.IF_FINISHED, ifFinishedSaga);
  yield takeLatest(actionTypes.TOGGLE_SHUFFLE, shuffleSaga);
}
