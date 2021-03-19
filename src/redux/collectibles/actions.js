export const actionTypes = {
  SET_AUDIO_MODE: 'SET_AUDIO_MODE',
  LOAD_AUDIO_ASYNC: 'LOAD_AUDIO_ASYNC',
  SET_PLAYBACK_INSTANCE: 'SET_PLAYBACK_INSTANCE',
  PLAYBACK_STATUS_UPDATE: 'PLAYBACK_STATUS_UPDATE',
  PLAY_PAUSE: 'PLAY_PAUSE',
  PLAY_PAUSE_ASYNC: 'PLAY_PAUSE_ASYNC',
  CHANGE_TRACK: 'CHANGE_TRACK',
  UPDATE_CURRENT_INDEX: 'UPDATE_CURRENT_INDEX',
  CHANGE_POSITION: 'CHANGE_POSITION',
  SEEKBAR_PROGRESS: 'SEEKBAR_PROGRESS',
  TOGGLE_PLAYLIST: 'TOGGLE_PLAYLIST',
  TOGGLE_SHUFFLE: 'TOGGLE_SHUFFLE',
  TOGGLE_LOOP: 'TOGGLE_LOOP',
  IF_FINISHED: 'IF_FINISHED',
  UPDATE_SOURCE: 'UPDATE_SOURCE',
};

export const setAudioMode = () => ({
  type: actionTypes.SET_AUDIO_MODE,
});

export const loadAudioAsyncAction = (
  playbackInstance,
  source,
  status,
  bool,
) => ({
  type: actionTypes.LOAD_AUDIO_ASYNC,
  playbackInstance,
  source,
  status,
  bool,
});

export const playbackStatusUpdateAction = payload => ({
  type: actionTypes.PLAYBACK_STATUS_UPDATE,
  payload,
});

export const playPause = () => ({
  type: actionTypes.PLAY_PAUSE,
});
export const playPauseAsyncAction = () => ({
  type: actionTypes.PLAY_PAUSE_ASYNC,
});

export const changeTrackAction = (loadAudio, curIndex, track) => ({
  type: actionTypes.CHANGE_TRACK,
  loadAudio,
  curIndex,
  track,
});

export const changePositionAction = position => ({
  type: actionTypes.CHANGE_POSITION,
  position,
});
export const seekbarProgressAction = value => ({
  type: actionTypes.SEEKBAR_PROGRESS,
  value,
});

export const togglePlaylistAction = playlistVisible => ({
  type: actionTypes.TOGGLE_PLAYLIST,
  playlistVisible,
});
export const toggleShuffleAction = (shuffle, loadAudio) => ({
  type: actionTypes.TOGGLE_SHUFFLE,
  shuffle,
  loadAudio,
});
export const toggleLoopAction = isLooped => ({
  type: actionTypes.TOGGLE_LOOP,
  isLooped,
});

export const ifFinishedAction = loadAudio => ({
  type: actionTypes.IF_FINISHED,
  loadAudio,
});

export const updateSource = source => ({
  type: actionTypes.UPDATE_SOURCE,
  source,
});
