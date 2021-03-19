import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default class UserMenuHeader extends Component {
  render() {
    const { logOut } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>My Accounts</Text>
        <TouchableOpacity onPress={() => logOut()} style={styles.button}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
