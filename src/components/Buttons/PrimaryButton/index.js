import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default class PrimaryButton extends Component {
  render() {
    const {
      text, onPress, style, textStyle, disabled,
    } = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        style={[styles.button, style]}
        onPress={onPress}
      >
        <Text style={[styles.buttoText, textStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
