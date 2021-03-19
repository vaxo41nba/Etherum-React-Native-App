import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default class CloseButton extends Component {
  render() {
    const { onPress, style } = this.props;

    return (
      <TouchableOpacity onPress={onPress} style={style}>
        <Image
          source={require('../../../../assets/Usermenu/close.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    );
  }
}
