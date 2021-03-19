import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

class TransactionFees extends Component {
  render() {
    const {
      speed, eth, usd, selectedKey, speedKey, changeColor,
    } = this.props;

    return (
      <TouchableOpacity
        style={speedKey === selectedKey ? styles.pressedButton : null}
        onPress={() => {
          changeColor(speedKey, usd);
        }}
      >
        <Text
          style={[
            styles.transactionFeeTitle,
            speedKey === selectedKey && { color: 'white' },
          ]}
        >
          {speed}
        </Text>
        <Text
          style={[
            styles.transactionFeeSubText,
            speedKey === selectedKey && { color: 'white' },
          ]}
        >
          {eth}
          ETH
        </Text>
        <Text
          style={[
            styles.transactionFeeSubText,
            speedKey === selectedKey && { color: 'white' },
          ]}
        >
          $
          {usd}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default TransactionFees;
