import { createSelector } from 'reselect';

const getCollectiblesState = state => state.collectibles;

export const getPlaybackInstance = createSelector(
  getCollectiblesState,
  state => state.playbackInstance,
);
export const getIsLoaded = createSelector(
  getCollectiblesState,
  state => state.isLoaded,
);
export const getPosition = createSelector(
  getCollectiblesState,
  state => state.position,
);
export const getCurrentIndex = createSelector(
  getCollectiblesState,
  state => state.currentIndex,
);
export const getPlaylistVisible = createSelector(
  getCollectiblesState,
  state => state.playlistVisible,
);
export const getVolume = createSelector(
  getCollectiblesState,
  state => state.volume,
);
export const getIsPlaying = createSelector(
  getCollectiblesState,
  state => state.isPlaying,
);
export const getElapsed = createSelector(
  getCollectiblesState,
  state => state.elapsed,
);
export const getRemaining = createSelector(
  getCollectiblesState,
  state => state.remaining,
);
export const getIsBuffering = createSelector(
  getCollectiblesState,
  state => state.isBuffering,
);
export const getFinished = createSelector(
  getCollectiblesState,
  state => state.finished,
);
export const getLooped = createSelector(
  getCollectiblesState,
  state => state.isLooped,
);
export const getShuffled = createSelector(
  getCollectiblesState,
  state => state.isShuffled,
);
export const getSource = createSelector(
  getCollectiblesState,
  state => state.source,
);
