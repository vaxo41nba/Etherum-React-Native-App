import React, { Component } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

export default class Hyperink extends Component {
  render() {
    const { text, style, onPress } = this.props;
    return (
      <Text style={[styles.text, style]} onPress={onPress}>
        {text}
      </Text>
    );
  }
}
