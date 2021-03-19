import { actionTypes } from './actions';
import audioBookPlaylist from '../../constants/audioBookPlaylist';

const INITIAL_STATE = {
  source: audioBookPlaylist,
  isLoaded: false,
  position: 0,
  currentIndex: 0,
  playlistVisible: false,
  volume: 1.0,
  isPlaying: false,
  playbackInstance: null,
  elapsed: null,
  remaining: null,
  isBuffering: null,
  finished: false,
  isShuffled: false,
  isLooped: false,
};

export default (state = INITIAL_STATE, action) => {
  const {
    playbackInstance,
    payload,
    currentIndex,
    value,
    playlistVisible,
    isLooped,
    source,
  } = action;
  const { isPlaying, isShuffled } = state;
  switch (action.type) {
    case actionTypes.SET_PLAYBACK_INSTANCE:
      return {
        ...state,
        playbackInstance,
      };
    case actionTypes.PLAYBACK_STATUS_UPDATE:
      return {
        ...state,
        isBuffering: payload.isBuffering,
        position: payload.position,
        elapsed: payload.elapsed,
        remaining: payload.remaining,
        isLoaded: payload.isLoaded,
        finished: payload.finished,
      };
    case actionTypes.PLAY_PAUSE:
      return {
        ...state,
        isPlaying: !isPlaying,
      };
    case actionTypes.UPDATE_CURRENT_INDEX:
      return {
        ...state,
        currentIndex,
      };
    case actionTypes.SEEKBAR_PROGRESS:
      return {
        ...state,
        position: value,
      };
    case actionTypes.TOGGLE_PLAYLIST:
      return {
        ...state,
        playlistVisible,
      };
    case actionTypes.TOGGLE_SHUFFLE:
      return {
        ...state,
        isShuffled: !isShuffled,
      };
    case actionTypes.TOGGLE_LOOP:
      return {
        ...state,
        isLooped,
      };
    case actionTypes.UPDATE_SOURCE:
      return {
        ...state,
        source,
      };
    default:
      return state;
  }
};
