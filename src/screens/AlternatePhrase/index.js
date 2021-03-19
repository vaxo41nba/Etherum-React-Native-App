import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Clipboard,
  ScrollView,
} from 'react-native';

import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { styles } from './styles';
import LogoAndTitle from '../../components/LogoAndTitle';
import HeaderText from '../../components/HeaderText';
import MnemonicContainer from '../../components/MnemonicContainer';
import CustomImageBackground from '../../components/CustomImageBackground';

import { showNotification } from '../../redux/notifications/actions';
import { getMnemonicPhrase } from '../../redux/auth/selectors';
import { clearAuth } from '../../redux/auth/actions';
import BackArrow from '../../components/Buttons/BackArrow';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

class AlternatePhraseScreen extends Component {
  downloadPhrase = async () => {
    const { mnemonicPhrase, actions } = this.props;
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (status === 'granted') {
      const fileUri = `${FileSystem.documentDirectory}Phrase.txt`;
      await FileSystem.writeAsStringAsync(fileUri, `${mnemonicPhrase}`, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync('Download', asset, true);
      actions.showNotification({
        message: 'Check Internal Storage > Downloads!',
        isError: false,
      });
    } else {
      actions.showNotification({
        message: 'Error accured while downloading file!',
        isError: true,
      });
    }
  };

  copyToClipboard = mnemonicPhrase => {
    const { actions } = this.props;
    Clipboard.setString(mnemonicPhrase);
    actions.showNotification({
      message: 'Copied To Clipboard',
      isError: false,
    });
  };

  clearUserStore = () => {
    const { actions, navigation } = this.props;
    actions.clearAuth();
    navigation.navigate('GetStarted');
  };

  render() {
    const { mnemonicPhrase, navigation } = this.props;
    return (
      <CustomImageBackground>
        <ScrollView>
          <View style={styles.header}>
            <BackArrow onPress={() => this.clearUserStore()} />
            <LogoAndTitle />
            <BackArrow iconStyle={{ display: 'none' }} />
          </View>

          <HeaderText text="Alternate Phrase" />
          <Text style={styles.subText}>
            Your alternate phrase restores your account if you lose your first
            phrase. Do not share this phrase with anyone.
          </Text>
          <Text style={styles.subText}>
            Anyone with this phrase can open your account and take your
            collectables, assets, media and certificates of authenticity. Once
            gone, those items are irretrievable.
          </Text>

          {/* Mnemonic Phrase Container */}
          <MnemonicContainer
            mnemonicPhrase={mnemonicPhrase}
            copyToClipboard={this.copyToClipboard}
          />

          <View style={styles.btnsContainer}>
            <TouchableOpacity
              style={styles.remindLaterBtn}
              onPress={this.downloadPhrase}
            >
              <Text style={styles.remindLaterText}>Download Phrase</Text>
            </TouchableOpacity>
            <PrimaryButton
              text="Next"
              onPress={() => navigation.navigate({ routeName: 'ConfirmPhrase' })}
              style={styles.nextBtn}
              textStyle={styles.nextText}
            />
          </View>
        </ScrollView>
      </CustomImageBackground>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  mnemonicPhrase: getMnemonicPhrase,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      showNotification,
      clearAuth,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlternatePhraseScreen);
