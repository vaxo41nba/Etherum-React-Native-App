import React, { Component } from 'react';
import {
  View, Text, Switch, ScrollView,
} from 'react-native';
import BackArrow from '../../../components/Buttons/BackArrow';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import CustomImageBackground from '../../../components/CustomImageBackground';
import HeaderText from '../../../components/HeaderText';

import { styles } from './styles';

export default class SecurityAndPrivacy extends Component {
  state = {
    incomingTransactionSwitch: true,
    participateInWallyMetricsSwitch: true,
  };

  toggleIncomingTransactionSwitch = () => {
    const { incomingTransactionSwitch } = this.state;
    this.setState({ incomingTransactionSwitch: !incomingTransactionSwitch });
  };

  toggleParticipateInWallyMetricsSwitch = () => {
    const { participateInWallyMetricsSwitch } = this.state;
    this.setState({
      participateInWallyMetricsSwitch: !participateInWallyMetricsSwitch,
    });
  };

  render() {
    const {
      incomingTransactionSwitch,
      participateInWallyMetricsSwitch,
    } = this.state;
    const { navigation } = this.props;
    return (
      <CustomImageBackground>
        <ScrollView>
          <View style={styles.header}>
            <BackArrow onPress={() => navigation.goBack()} />
            <HeaderText text="Security & Privacy" style={styles.headerText} />
            <BackArrow iconStyle={{ display: 'none' }} />
          </View>
          <View style={styles.line} />

          <Text style={styles.text}>Reveal Seed Words</Text>
          <PrimaryButton
            text="Reveal Seed Words"
            style={[styles.button, { borderColor: '#FEB6BF' }]}
            textStyle={{ color: '#D73A49' }}
            onPress={() => navigation.navigate('RevealSeedWords')}
          />

          <Text style={styles.text}>Show Incoming Transactions</Text>
          <Text style={styles.light}>
            Select this to use Etherscan to show incoming transactions in the
            transactions list
          </Text>
          <View style={styles.switch}>
            <Switch
              onValueChange={this.toggleIncomingTransactionSwitch}
              value={incomingTransactionSwitch}
            />
            <Text style={styles.switchText}>
              {incomingTransactionSwitch ? 'ON' : 'OFF'}
            </Text>
          </View>

          <Text style={styles.text}>Participate in WallyMetrics</Text>
          <Text style={styles.light}>
            Participate in WallyMetrics to help us make Wallybase better
          </Text>
          <View style={styles.switch}>
            <Switch
              onValueChange={this.toggleParticipateInWallyMetricsSwitch}
              value={participateInWallyMetricsSwitch}
            />
            <Text style={styles.switchText}>
              {participateInWallyMetricsSwitch ? 'ON' : 'OFF'}
            </Text>
          </View>
        </ScrollView>
      </CustomImageBackground>
    );
  }
}
