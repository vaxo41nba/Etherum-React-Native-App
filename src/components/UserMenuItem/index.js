import React, { Component } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default class UserMenuItem extends Component {
  render() {
    const { icon, text, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
