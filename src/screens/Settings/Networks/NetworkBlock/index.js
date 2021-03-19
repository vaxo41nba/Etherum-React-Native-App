import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import { styles } from './styles';

export default class NetworkBlock extends Component {
  render() {
    const {
      title, color, onPress, style,
    } = this.props;
    return (
      <TouchableOpacity style={[styles.block, style]} onPress={onPress}>
        <View style={[styles.dot, { backgroundColor: color }]} />
        <Text style={styles.text}>{title}</Text>
        <Image
          style={styles.arrow}
          source={require('../../../../../assets/Usermenu/right-arrow.png')}
        />
      </TouchableOpacity>
    );
  }
}
