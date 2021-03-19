import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { styles } from './styles';

export default class NetworkMenuItem extends Component {
  render() {
    const {
      label, backgroundColor, textStyle, onPress, style,
    } = this.props;
    return (
      <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <View style={[styles.dot, { backgroundColor }]} />
        <Text style={[styles.text, textStyle]}>{label}</Text>
      </TouchableOpacity>
    );
  }
}
