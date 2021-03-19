import React, { Component } from 'react';
import { View } from 'react-native';

import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import CustomImageBackground from '../CustomImageBackground';
import HeaderText from '../HeaderText';

import { styles } from './styles';

export default class ResetAccount extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <CustomImageBackground style={styles.container}>
        <HeaderText text="Reset Account?" style={styles.header} />
        <HeaderText
          text="Resetting your account will clear your transaction history."
          style={styles.text}
        />
        <View style={styles.buttons}>
          <PrimaryButton text="Ok" />
          <SecondaryButton text="Nevermind" onPress={onPress} />
        </View>
      </CustomImageBackground>
    );
  }
}
