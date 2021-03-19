import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default class BackArrow extends Component {
  render() {
    const { onPress, style, iconStyle } = this.props;

    return (
      <TouchableOpacity onPress={onPress} style={[styles.icon, style]}>
        <Image
          source={require('../../../../assets/Usermenu/back-arrow.png')}
          style={[styles.icon, iconStyle]}
        />
      </TouchableOpacity>
    );
  }
}
