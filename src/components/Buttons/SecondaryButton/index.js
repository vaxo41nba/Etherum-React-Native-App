import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default class SecondaryButton extends Component {
  render() {
    const {
      text, onPress, style, textStyle,
    } = this.props;
    return (
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.buttoText, textStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
