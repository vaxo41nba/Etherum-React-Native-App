import React, { Component } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

export default class CustomImageBackground extends Component {
  render() {
    const { children, style } = this.props;
    return (
      <View style={[style, styles.container]}>
        <Image
          source={require('../../../assets/background.png')}
          style={styles.imageBackground}
        />
        {children}
      </View>
    );
  }
}
