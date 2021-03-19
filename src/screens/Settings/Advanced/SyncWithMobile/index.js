import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import BackArrow from '../../../../components/Buttons/BackArrow';
import PrimaryButton from '../../../../components/Buttons/PrimaryButton';
import SecondaryButton from '../../../../components/Buttons/SecondaryButton';
import CustomImageBackground from '../../../../components/CustomImageBackground';
import HeaderText from '../../../../components/HeaderText';

import { styles } from './styles';

export default class SyncWithMobile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <CustomImageBackground>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView enabled>
            <View style={styles.header}>
              <BackArrow onPress={() => navigation.goBack()} />
              <HeaderText text="Sync with mobile" style={styles.headerText} />
              <BackArrow iconStyle={{ display: 'none' }} />
            </View>

            <Text style={styles.text}>
              You can sync your accounts and information with your mobile
              device. Open the Wallybase mobile app, go to &quot;Settings&quot;
              and tap on &quot;Sync from Browser Extension
            </Text>
            <Text style={styles.text}>
              If you just open the Wallybase Mobile app for the first time, just
              follow the steps in your phone.
            </Text>

            <View style={styles.note}>
              <Image
                style={styles.image}
                source={require('../../../../../assets/exclamation-mark.png')}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.bold}>Note:</Text>
                <Text style={styles.noteText}>
                  Please enter your password to confirm it&apos;s you!
                </Text>
              </View>
            </View>

            <Text style={styles.enterPassword}>Enter password to continue</Text>
            <TextInput
              secureTextEntry
              style={styles.input}
              placeholder="Password"
            />
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={styles.buttons}>
          <PrimaryButton text="Next" style={styles.button} />
          <SecondaryButton
            text="Cancel"
            style={styles.button}
            onPress={() => navigation.goBack()}
          />
        </View>
      </CustomImageBackground>
    );
  }
}
