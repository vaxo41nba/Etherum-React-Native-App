import React, { Component } from 'react';
import {
  ScrollView, Slider, Text, TouchableOpacity, View,
} from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  setAudioMode,
  loadAudioAsyncAction,
  playbackStatusUpdateAction,
  playPauseAsyncAction,
  changeTrackAction,
  seekbarProgressAction,
  changePositionAction,
  togglePlaylistAction,
  ifFinishedAction,
  toggleShuffleAction,
  toggleLoopAction,
} from '../../redux/collectibles/actions';
import {
  getPlaybackInstance,
  getCurrentIndex,
  getVolume,
  getRemaining,
  getElapsed,
  getIsLoaded,
  getIsPlaying,
  getPosition,
  getPlaylistVisible,
  getIsBuffering,
  getFinished,
  getLooped,
  getShuffled,
  getSource,
} from '../../redux/collectibles/selectors';

import { styles } from './styles';
import CustomImageBackground from '../../components/CustomImageBackground';
import HeaderText from '../../components/HeaderText';
import BackArrow from '../../components/Buttons/BackArrow';
import audioBookPlaylist from '../../constants/audioBookPlaylist';

class MyCollectibles extends Component {
  componentDidMount() {
    setAudioMode();
    this.loadAudio();
  }

  componentDidUpdate() {
    const {
      finished,
      actions: { ifFinished },
    } = this.props;
    if (finished) {
      ifFinished(this.loadAudio);
    }
  }

  loadAudio = () => {
    const {
      currentIndex,
      isPlaying,
      volume,
      source,
      actions: { loadAudioAsync },
    } = this.props;
    const playbackInstance = new Audio.Sound();
    const audioSource = source[currentIndex].uri;

    const status = {
      shouldPlay: isPlaying,
      volume,
    };

    playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
    loadAudioAsync(playbackInstance, audioSource, status, false);
  };

  onPlaybackStatusUpdate = status => {
    const {
      actions: { playbackStatusUpdate },
    } = this.props;
    const {
      positionMillis,
      durationMillis,
      isLoaded,
      didJustFinish,
      isBuffering,
    } = status;
    playbackStatusUpdate({
      isBuffering,
      position: positionMillis / durationMillis,
      elapsed: this.formatTime(positionMillis),
      remaining: this.formatTime(durationMillis - positionMillis),
      isLoaded,
      finished: didJustFinish,
    });
  };

  handlePlayPause = () => {
    const {
      isLoaded,
      actions: { playPauseAsync },
    } = this.props;
    if (isLoaded) {
      playPauseAsync();
    }
  };

  changeTrack = (index, type) => {
    const {
      isLoaded,
      actions: { changeTracks },
    } = this.props;
    if (isLoaded) {
      changeTracks(this.loadAudio, index, type);
    }
  };

  formatTime = duration => {
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
  };

  shuffle = () => {
    const copy = audioBookPlaylist.slice();
    const result = [];
    while (copy.length > 0) {
      const randomIndex = Math.floor(Math.random() * copy.length);
      result.push(copy[randomIndex]);
      copy.splice(randomIndex, 1);
    }
    return result;
  };

  authorTitle = () => {
    const { playbackInstance, currentIndex, source } = this.props;
    return (
      playbackInstance && (
        <>
          <Text style={styles.author}>{source[currentIndex].author}</Text>
          <Text style={styles.title}>{source[currentIndex].title}</Text>
        </>
      )
    );
  };

  seekbar = () => {
    const {
      elapsed,
      remaining,
      position,
      isBuffering,
      actions: { changePosition, seekbarProgress },
    } = this.props;
    return (
      <View style={styles.seekbar}>
        <Text>{isBuffering || isBuffering === undefined ? '' : elapsed}</Text>
        <Slider
          style={styles.slider}
          value={position || 0}
          onValueChange={value => seekbarProgress(value)}
          onSlidingComplete={value => changePosition(value)}
          maximumTrackTintColor="lightblue"
          minimumTrackTintColor="blue"
          thumbTintColor="#037dd6"
        />
        <Text>
          -
          {isBuffering || isBuffering === undefined ? '' : remaining}
        </Text>
      </View>
    );
  };

  controls = () => {
    const {
      isPlaying,
      playlistVisible,
      isShuffled,
      isLooped,
      actions: { togglePlaylist, toggleLoop, toggleShuffle },
    } = this.props;
    return (
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => togglePlaylist(!playlistVisible)}>
          <Ionicons
            name="ios-list-box"
            size={48}
            color="#037dd6"
            style={{ opacity: playlistVisible ? 1 : 0.5 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.changeTrack(null, 'prev')}>
          <Ionicons name="ios-skip-backward" size={48} color="#037dd6" />
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handlePlayPause}>
          {isPlaying ? (
            <Ionicons name="ios-pause" size={48} color="#037dd6" />
          ) : (
            <Ionicons name="ios-play-circle" size={48} color="#037dd6" />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.changeTrack(null, 'next')}>
          <Ionicons name="ios-skip-forward" size={48} color="#037dd6" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => toggleShuffle(this.shuffle, this.loadAudio)}
        >
          <Ionicons
            name="ios-shuffle"
            size={48}
            color="#037dd6"
            style={{ opacity: isShuffled ? 1 : 0.5 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleLoop(!isLooped)}>
          <Ionicons
            name="ios-repeat"
            size={48}
            color="#037dd6"
            style={{ opacity: isLooped ? 1 : 0.5 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  playlist = () => {
    const { playlistVisible, currentIndex, source } = this.props;
    const { hash } = source.filter(
      el => source.indexOf(el) === currentIndex,
    )[0];
    return (
      <View
        style={[
          styles.playlist,
          { display: playlistVisible ? 'flex' : 'none' },
        ]}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Playlist:</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {audioBookPlaylist.map(audio => (
            <TouchableOpacity
              key={audio.title}
              style={{
                backgroundColor: audio.hash === hash ? '#037dd6' : 'white',
                borderRadius: 10,
              }}
            >
              <Text
                numberOfLines={1}
                onPress={() => this.changeTrack(source.indexOf(audio), 'custom')}
                style={[
                  styles.playlistItemText,
                  { color: audio.hash === hash ? 'white' : 'black' },
                ]}
              >
                {audio.author}
                {' '}
                -
                {audio.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <CustomImageBackground>
        <View style={styles.header}>
          <BackArrow onPress={() => navigation.goBack()} />
          <HeaderText text="My Collectibles" style={styles.headerText} />
          <BackArrow iconStyle={{ display: 'none' }} />
        </View>
        <View style={styles.player}>
          {this.authorTitle()}
          {this.seekbar()}
          {this.controls()}
          {this.playlist()}
        </View>
      </CustomImageBackground>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  playbackInstance: getPlaybackInstance,
  volume: getVolume,
  isBuffering: getIsBuffering,
  currentIndex: getCurrentIndex,
  remaining: getRemaining,
  elapsed: getElapsed,
  isPlaying: getIsPlaying,
  position: getPosition,
  playlistVisible: getPlaylistVisible,
  isLoaded: getIsLoaded,
  finished: getFinished,
  isLooped: getLooped,
  isShuffled: getShuffled,
  source: getSource,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setAudioMode,
      loadAudioAsync: loadAudioAsyncAction,
      playbackStatusUpdate: playbackStatusUpdateAction,
      playPauseAsync: playPauseAsyncAction,
      changeTracks: changeTrackAction,
      seekbarProgress: seekbarProgressAction,
      changePosition: changePositionAction,
      togglePlaylist: togglePlaylistAction,
      ifFinished: ifFinishedAction,
      toggleShuffle: toggleShuffleAction,
      toggleLoop: toggleLoopAction,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyCollectibles);
