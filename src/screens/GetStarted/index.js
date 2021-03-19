import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

import CustomImageBackground from '../../components/CustomImageBackground';
import LogoAndTitle from '../../components/LogoAndTitle';
import HeaderText from '../../components/HeaderText';
import BackArrow from '../../components/Buttons/BackArrow';

import { styles } from './styles';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

class GetStartedScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <CustomImageBackground>
        <View style={styles.header}>
          <BackArrow onPress={() => navigation.goBack()} />
          <LogoAndTitle />
          <BackArrow iconStyle={{ display: 'none' }} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <View>
            <HeaderText
              style={styles.h1}
              text="Welcome! Are you new to Fanwally?"
            />
            <View style={styles.block}>
              <Text style={styles.bold}>
                Yes, I want to create a new wallet!
              </Text>
              <Text style={styles.opacity}>
                Create a wallet using a 12-word wally phrase
              </Text>

              <PrimaryButton
                text="Create a Wallet"
                onPress={() => navigation.navigate('CreatePassword')}
                style={styles.button}
                textStyle={styles.buttonText}
              />
            </View>
            <View style={styles.block}>
              <Text style={styles.bold}>No, I already have a wally phrase</Text>
              <Text style={styles.opacity}>
                Import a wallet using a 12-word wally phrase
              </Text>
              <PrimaryButton
                text="Import a Wallet"
                onPress={() => navigation.navigate('FanwallyAgreement')}
                style={styles.button}
                textStyle={styles.buttonText}
              />
            </View>
          </View>
        </ScrollView>
      </CustomImageBackground>
    );
  }
}

export default GetStartedScreen;
