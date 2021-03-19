import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

class LogoAndTitle extends Component {
  render() {
    const { style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
        <Text style={styles.title}>Fanwally</Text>
      </View>
    );
  }
}

export default LogoAndTitle;
