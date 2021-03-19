import React, { Component } from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

export default class HeaderText extends Component {
  render() {
    const { text, style } = this.props;

    return <Text style={[styles.h1, style]}>{text}</Text>;
  }
}
