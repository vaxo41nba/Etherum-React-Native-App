import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import { styles } from './styles';

export default class SelectNetworkButton extends Component {
  render() {
    const { selected, onPress, color } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {color && (
          <View style={{ borderRadius: 50, overflow: 'hidden' }}>
            <View style={[styles.dot, { backgroundColor: color }]} />
          </View>
        )}

        <Text style={styles.text}>{selected}</Text>
        <Image
          source={require('../../../assets/down-arrow.png')}
          style={styles.arrow}
        />
      </TouchableOpacity>
    );
  }
}
