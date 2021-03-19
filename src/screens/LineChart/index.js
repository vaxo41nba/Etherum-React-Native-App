import React, { Component } from 'react';

import {
  Dimensions, View, Text, TextInput,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { styles } from './styles';

import CustomImageBackground from '../../components/CustomImageBackground';
import HeaderText from '../../components/HeaderText';
import Hyperink from '../../components/Hyperlink';

class ChartScreen extends Component {
  state = {
    transactionFee: '',
    usd: '',
    gasLimit: 2100,
    gasPrice: 0,
  };

  render() {
    const {
      transactionFee, usd, gasLimit, gasPrice,
    } = this.state;
    const { navigation } = this.props;
    const labels = ['Page A', 'Page C', 'Page E', 'Page G'];
    const data = gasPrice <= 0 ? [0, 0, 0, 0] : [4000, 1000, 0, 2000, 3000];

    return (
      <CustomImageBackground>
        {/* Header Text */}
        <View style={styles.header}>
          <View style={{ width: '12%' }} />
          <HeaderText text="Customize Gas" />
          <Hyperink
            text="Close"
            onPress={() => navigation.goBack()}
            style={{ width: '12%' }}
          />
        </View>
        <Text style={styles.headerTextSubText}>Advanced</Text>
        {/* Transaction Fee and Time */}
        <View style={styles.transactionFeeAndTime}>
          {/* Transaction Fee  */}
          <View>
            <Text style={styles.transactionFeeSubText}>
              New Transaction Fee:
            </Text>
            <Text style={styles.transactionFeeText}>
              {transactionFee > 0 ? transactionFee : 0}
              {' '}
              ETH
            </Text>
          </View>
          {/* Transaction Time */}
          <View>
            <Text style={styles.transactionFeeSubText}>~Transaction Time</Text>
            <Text style={styles.transactionFeeText}>~28 Sec</Text>
          </View>
        </View>
        <View style={styles.chartContainer}>
          <View style={styles.priceContainer}>
            {/* Gas Price */}
            <View>
              <Text style={styles.chartSubText}>Gas Price (GWEI):</Text>
              <TextInput
                style={styles.inputStyle}
                keyboardType="numeric"
                defaultValue={`${gasPrice}`}
                onChangeText={text => this.setState({
                  transactionFee: +(text * (gasLimit / 1000000000)).toFixed(
                    6,
                  ),
                  usd: transactionFee * 400,
                  gasPrice: text,
                })}
              />
            </View>
            {/* Gas Limit */}
            <View>
              <Text style={styles.chartSubText}>Gas Limit:</Text>
              <TextInput
                style={styles.inputStyle}
                keyboardType="numeric"
                defaultValue={`${gasLimit}`}
                onChangeText={text => this.setState({
                  transactionFee: +(gasPrice * (text / 1000000000)).toFixed(
                    6,
                  ),
                })}
              />
            </View>
          </View>
          <Text style={styles.chartLiveGasText}>Live Gas Predictions</Text>
          <View>
            {/* Line Chart */}
            <LineChart
              data={{ labels, datasets: [{ data }] }}
              width={Dimensions.get('window').width - 50}
              height={220}
              withInnerLines={false}
              chartConfig={{
                backgroundColor: '#fff',
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#FFF',
                decimalPlaces: 0,
                color: () => 'gray',
                labelColor: () => 'gray',
                style: { borderRadius: 16 },
                propsForDots: { r: '6', strokeWidth: '2', stroke: 'white' },
              }}
            />
          </View>
        </View>
        {/* Sum up fee */}
        <View>
          {/* Send Amount */}
          <View style={styles.sumUpFee}>
            <Text style={styles.sumUpFeeText}>Send Amount:</Text>
            <Text style={styles.sumUpFeeText}>0 ETH</Text>
          </View>
          {/* Transaction Fee */}
          <View style={styles.sumUpFee}>
            <Text style={styles.sumUpFeeText}>Transaction Fee:</Text>
            <Text style={styles.sumUpFeeText}>
              {transactionFee > 0 ? transactionFee : 0}
              {' '}
              ETH
            </Text>
          </View>
          {/* New Total */}
          <View style={styles.sumUpFee}>
            <Text style={styles.newTotal}>New Total:</Text>
            <Text style={styles.newTotal}>
              {transactionFee > 0 ? transactionFee : 0}
              {' '}
              ETH
            </Text>
          </View>
          {/* New Total in USD */}
          <View style={styles.totalToUsd}>
            <Text>
              $
              {usd > 0 ? usd : 0}
            </Text>
          </View>
        </View>
      </CustomImageBackground>
    );
  }
}

export default ChartScreen;
