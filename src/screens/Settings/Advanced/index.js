import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Switch,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

import { styles } from './styles';
import CustomImageBackground from '../../../components/CustomImageBackground';
import HeaderText from '../../../components/HeaderText';
import ResetAccount from '../../../components/ResetAccount';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import BackArrow from '../../../components/Buttons/BackArrow';

export default class Advanced extends Component {
  state = {
    gasSwitch: false,
    hexDataSwitch: false,
    conversionSwitch: false,
    transactionNonceSwitch: false,
    threeBoxSwitch: false,
    logoutTimer: '5',
    resetModalVisible: false,
  };

  toggleGasSwitch = () => {
    const { gasSwitch } = this.state;
    this.setState({ gasSwitch: !gasSwitch });
  };

  toggleHexDataSwitch = () => {
    const { hexDataSwitch } = this.state;
    this.setState({ hexDataSwitch: !hexDataSwitch });
  };

  toggleConversionSwitch = () => {
    const { conversionSwitch } = this.state;
    this.setState({ conversionSwitch: !conversionSwitch });
  };

  toggleTransactionNonceSwitch = () => {
    const { transactionNonceSwitch } = this.state;
    this.setState({ transactionNonceSwitch: !transactionNonceSwitch });
  };

  toggleThreeBoxSwitch = () => {
    const { threeBoxSwitch } = this.state;
    this.setState({ threeBoxSwitch: !threeBoxSwitch });
  };

  toggleResetModal = () => {
    const { resetModalVisible } = this.state;
    this.setState({ resetModalVisible: !resetModalVisible });
  };

  onChanged = text => {
    let newText = '';
    const numbers = '0123456789';

    for (let i = 0; i < text.length; i += 1) {
      if (numbers.indexOf(text[i]) > -1) {
        newText += text[i];
      }
    }
    this.setState({ logoutTimer: newText });
  };

  render() {
    const {
      gasSwitch,
      hexDataSwitch,
      conversionSwitch,
      transactionNonceSwitch,
      threeBoxSwitch,
      logoutTimer,
      resetModalVisible,
    } = this.state;

    const { navigation } = this.props;
    return (
      <CustomImageBackground>
        <ScrollView>
          <View style={styles.header}>
            <BackArrow onPress={() => navigation.goBack()} />
            <HeaderText text="Advanced" style={styles.headerText} />
            <BackArrow iconStyle={{ display: 'none' }} />
          </View>

          <View style={styles.line} />
          <Text style={styles.text}>Wally Logs</Text>
          <Text style={styles.light}>
            The Wally Logs display your transactions and public account
            addresses.
          </Text>
          <PrimaryButton text="Download Wally Logs" style={styles.button} />

          <Text style={styles.text}>Sync with mobile</Text>
          <PrimaryButton
            text="Sync with mobile"
            style={styles.button}
            onPress={() => navigation.navigate('SyncWithMobile')}
          />

          <Text style={styles.text}>Reset Account</Text>
          <PrimaryButton
            text="Reset Account"
            style={[styles.button, { borderColor: '#FEB6BF' }]}
            textStyle={{ color: '#D73A49' }}
            onPress={this.toggleResetModal}
          />

          {/* Reset Modal */}
          <Modal animationType="fade" transparent visible={resetModalVisible}>
            <View style={styles.modalView}>
              <ResetAccount onPress={this.toggleResetModal} />
            </View>
          </Modal>

          <Text style={styles.text}>Advanced gas controls</Text>
          <Text style={styles.light}>
            Select this to show gas price and limit controls directly on the
            send and confirm screens.
          </Text>
          <View style={styles.switch}>
            <Switch onValueChange={this.toggleGasSwitch} value={gasSwitch} />
            <Text style={styles.switchText}>{gasSwitch ? 'ON' : 'OFF'}</Text>
          </View>

          <Text style={styles.text}>Show Hex Data</Text>
          <Text style={styles.light}>
            Select this to show the hex data field on the send screen.
          </Text>
          <View style={styles.switch}>
            <Switch
              onValueChange={this.toggleHexDataSwitch}
              value={hexDataSwitch}
            />
            <Text style={styles.switchText}>
              {hexDataSwitch ? 'ON' : 'OFF'}
            </Text>
          </View>

          <Text style={styles.text}>Show Conversion on Testnets</Text>
          <Text style={styles.light}>
            Select this to show fiat conversion on Testnets.
          </Text>
          <View style={styles.switch}>
            <Switch
              onValueChange={this.toggleConversionSwitch}
              value={conversionSwitch}
            />
            <Text style={styles.switchText}>
              {conversionSwitch ? 'ON' : 'OFF'}
            </Text>
          </View>

          <Text style={styles.text}>Customize transaction nonce</Text>
          <Text style={styles.light}>
            Turn this on to change the nonce (transaction number) on
            confirmation screens. This is an advanced feature, use cautiously.
          </Text>
          <View style={styles.switch}>
            <Switch
              onValueChange={this.toggleTransactionNonceSwitch}
              value={transactionNonceSwitch}
            />
            <Text style={styles.switchText}>
              {transactionNonceSwitch ? 'ON' : 'OFF'}
            </Text>
          </View>

          <Text style={styles.text}>Auto-Logout Timer (minutes)</Text>
          <Text style={styles.light}>
            Set the idle time in minutes before Wallybase will automatically log
            out.
          </Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={text => this.onChanged(text)}
            value={logoutTimer}
          />
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.save}>Save</Text>
          </TouchableOpacity>

          <Text style={styles.text}>Sync data with 3Box (experimental)</Text>
          <Text style={styles.light}>
            Turn on to have your settings backed up with 3Box. This feature is
            currenty experimental; use at your own risk.
          </Text>
          <View style={styles.switch}>
            <Switch
              onValueChange={this.toggleThreeBoxSwitch}
              value={threeBoxSwitch}
            />
            <Text style={styles.switchText}>
              {threeBoxSwitch ? 'ON' : 'OFF'}
            </Text>
          </View>
        </ScrollView>
      </CustomImageBackground>
    );
  }
}
