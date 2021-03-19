import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import { styles } from './styles';

export default class SettingsBlock extends Component {
  render() {
    const {
      title, text, onPress, style,
    } = this.props;
    return (
      <TouchableOpacity style={[styles.block, style]} onPress={onPress}>
        <View style={styles.subBlock}>
          <Text style={styles.bold}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Image
          style={styles.arrow}
          source={require('../../../../assets/Usermenu/right-arrow.png')}
        />
      </TouchableOpacity>
    );
  }
}
