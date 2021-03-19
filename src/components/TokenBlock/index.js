import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import { styles } from './styles';

export default class TokenBlock extends Component {
  render() {
    const {
      logo,
      title,
      currency,
      navigateToScreens,
      currentUser,
    } = this.props;
    return (
      /* Logo */
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
        </View>

        {/* Network Title */}
        <Text style={styles.network}>{title}</Text>

        {/* Deposit and Send buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => navigateToScreens('TokenDeposit')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToScreens('Send')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>

        {/* Balance and cryptocurrency */}
        <Text style={styles.balance}>
          {`${currentUser === undefined || null ? '0 ' : currentUser.balance} `}
          {currency}
        </Text>
      </View>
    );
  }
}
