import React, { Component } from 'react';
import {
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { styles } from './styles';

export default class OpenHistory extends Component {
  uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

  render() {
    const { historyExtended, onPress, transactions } = this.props;
    return (
      <Animatable.View
        transition="height"
        duration={1500}
        style={[
          styles.history,
          {
            height: historyExtended
              ? Dimensions.get('screen').height * 0.8
              : 50,
          },
        ]}
      >
        <TouchableOpacity style={styles.TouchableOpacity} onPress={onPress}>
          <Text style={styles.historyText}>Open History </Text>
          <Animatable.View
            transition="rotate"
            duration={1500}
            style={[
              styles.arrowContainer,
              {
                transform: [{ rotate: historyExtended ? '90 deg' : '270 deg' }],
              },
            ]}
          >
            <Image
              source={require('../../../assets/white-arrow.png')}
              style={styles.arrow}
            />
          </Animatable.View>
        </TouchableOpacity>
        <ScrollView>
          {transactions
            && transactions.map(transaction => (
              <View style={styles.transactionsBlock} key={this.uuidv4()}>
                <View style={styles.singleText}>
                  <Text style={styles.transactionsText}>From:</Text>
                  <Text key={transaction.from} style={styles.transactionsText}>
                    {transaction.from}
                  </Text>
                </View>
                <View style={styles.singleText}>
                  <Text style={styles.transactionsText}>To:</Text>
                  <Text style={styles.transactionsText}>{transaction.to}</Text>
                </View>
                <View style={styles.singleText}>
                  <Text style={styles.transactionsText}>Value:</Text>
                  <Text style={styles.transactionsText}>
                    {transaction.value}
                  </Text>
                </View>
                <View style={styles.singleText}>
                  <Text style={styles.transactionsText}>Date:</Text>
                  <Text style={styles.transactionsText}>
                    {transaction.date}
                  </Text>
                </View>
              </View>
            ))}
        </ScrollView>
      </Animatable.View>
    );
  }
}
