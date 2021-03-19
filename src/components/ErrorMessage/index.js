import React, { Component } from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

class ErrorMessage extends Component {
  render() {
    const { message } = this.props;
    return <Text style={styles.text}>{message}</Text>;
  }
}

export default ErrorMessage;
