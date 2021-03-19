import React, { Component } from 'react';
import {
  View, TextInput, Text, Image, TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import { styles } from './style';

import HeaderText from '../../components/HeaderText';
import TransactionFees from '../../components/TransactionFee';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import SecondaryButton from '../../components/Buttons/SecondaryButton';
import CustomImageBackground from '../../components/CustomImageBackground';

import {
  getSelectedAccount,
  getDestinationAccount,
  getSelectedNetwork,
} from '../../redux/user/selectors';
import {
  sendTransaction,
  sendToken,
  countTransaction,
} from '../../redux/user/actions';
import { showNotification } from '../../redux/notifications/actions';

class SendEthToRecipient extends Component {
  state = {
    user: '',
    ETHtoUSD: false,
    selectedKey: null,
    USD: 0,
    ETH: 0.0,
    clicked: false,
    startSending: false,
    gasFee: 0,
    sentEther: 0,
  };

  myTextInput = React.createRef();

  componentDidMount() {
    const { destination } = this.props;
    this.setState({ user: destination.name });
  }

  changeColor = (key, gasFee) => {
    this.setState({ selectedKey: key });
    this.setState({ gasFee });
  };

  confirmTransaction = () => {
    const {
      currentUser,
      destination,
      network,
      actions,
      navigation,
    } = this.props;

    const { ETH } = this.state;

    if (currentUser.balance < ETH) {
      actions.showNotification({
        message: 'Not enought balance for transaction',
        isError: true,
      });
    } else {
      actions.sendTransaction(
        currentUser,
        destination.address,
        ETH.toString(),
        2100,
        network,
      );

      actions.countTransaction({
        from: currentUser.address,
        to: destination.address,
        value: ETH,
        date: new Date(Date.now()).toLocaleDateString(),
      });

      navigation.navigate('Main');
    }
  };

  render() {
    const {
      user,
      ETHtoUSD,
      ETH,
      USD,
      selectedKey,
      clicked,
      startSending,
      sentEther,
      gasFee,
    } = this.state;

    const { navigation, currentUser } = this.props;
    return (
      <CustomImageBackground>
        <View style={styles.headerContainer}>
          <HeaderText text="Send ETH" style={styles.headerText} />
          <TextInput value={user} editable={false} style={styles.inputStyle} />
        </View>
        {startSending ? (
          <View style={styles.sendEtherContainer}>
            {/* Send Ether */}
            <View style={styles.sendEther}>
              <Text style={styles.sendEtherText}>Sent ETHER:</Text>
              <Text style={styles.sendEtherText}>
                {sentEther}
                {' '}
                $
              </Text>
            </View>
            {/* GAS Fee */}
            <View style={styles.sendEther}>
              <Text style={styles.sendEtherText}>GAS Fee:</Text>
              <Text style={styles.sendEtherText}>
                {gasFee}
                {' '}
                $
              </Text>
            </View>
            {/* Total */}
            <View style={styles.sendEther}>
              <Text style={styles.sendEtherText}>Total:</Text>
              <Text style={styles.sendEtherText}>
                {parseFloat(sentEther) + parseFloat(gasFee)}
                {' '}
                $
              </Text>
            </View>
            {/* Buttons */}
            <View style={styles.buttonsContainer}>
              <PrimaryButton
                style={{ width: '48%' }}
                text="Confirm"
                onPress={() => this.confirmTransaction()}
              />
              <SecondaryButton
                onPress={() => this.setState({ startSending: !startSending })}
                style={{ width: '48%' }}
                text="Reject"
              />
            </View>
          </View>
        ) : (
          <View>
            {/* First Item Container */}
            <View style={styles.itemsContainer}>
              <Text style={styles.itemContainerText}>Asset:</Text>
              <View style={styles.cardContainer}>
                <View style={styles.ETHLogoHolder}>
                  <Image
                    source={require('../../../assets/ETH.webp')}
                    style={styles.ETHLogo}
                  />
                </View>
                <View style={styles.itemContainerTextHolder}>
                  <Text style={styles.itemContainerCardText}>ETH</Text>
                  <Text style={styles.itemContainerCardSubText}>
                    Balance:
                    {` ${
                      currentUser === undefined || null
                        ? '0 '
                        : currentUser.balance
                    } `}
                    ETH
                  </Text>
                </View>
              </View>
            </View>
            {/* Second Item Container */}
            <View style={styles.itemsContainer}>
              <View>
                <Text style={styles.itemContainerText}>Amount:</Text>
                <TouchableOpacity
                  style={clicked ? styles.clickedButton : styles.buttonStyle}
                  onPress={() => this.setState({ clicked: !clicked, ETH: 0, USD: 0 })}
                >
                  <Text style={styles.buttonText}>Max</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ETHCalculatorContainer}>
                {ETHtoUSD ? (
                  <View style={styles.ETHCalculator}>
                    <View style={styles.ETHCalculatorTextHolder}>
                      <TextInput
                        placeholder="Enter Amount"
                        ref={this.myTextInput}
                        onChangeText={text => {
                          this.setState({ USD: text * 400 });
                        }}
                        keyboardType="numeric"
                      />
                      <Text style={styles.ETHCalculatorText}>
                        {USD}
                        {' '}
                        USD
                      </Text>
                    </View>
                    <Text style={styles.ETHCalculatorValute}>ETH</Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.myTextInput.current.clear();
                        this.setState({ ETHtoUSD: !ETHtoUSD, ETH: 0 });
                      }}
                    >
                      <Image
                        style={styles.switchLogo}
                        source={require('../../../assets/Refresh_icon.png')}
                      />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.ETHCalculator}>
                    <View style={styles.ETHCalculatorTextHolder}>
                      <TextInput
                        placeholder="Enter Amount"
                        ref={this.myTextInput}
                        onChangeText={text => {
                          this.setState({ ETH: text * 0.0025 });
                          this.setState({ sentEther: text });
                        }}
                        keyboardType="numeric"
                      />
                      <Text style={styles.ETHCalculatorText}>
                        {ETH}
                        {' '}
                        ETH
                      </Text>
                    </View>
                    <Text style={styles.ETHCalculatorValute}>USD</Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.myTextInput.current.clear();
                        this.setState({ ETHtoUSD: !ETHtoUSD, USD: 0 });
                      }}
                    >
                      <Image
                        style={styles.switchLogo}
                        source={require('../../../assets/Refresh_icon.png')}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            {/* Third Item Container */}
            <View style={styles.itemsContainer}>
              <Text style={styles.itemContainerText}>Transaction:</Text>
              <View style={styles.transactionFeeChoices}>
                <TransactionFees
                  selectedKey={selectedKey}
                  changeColor={this.changeColor}
                  speedKey="slow"
                  speed="Slow"
                  eth="0.000010"
                  usd="0.02"
                />
                <TransactionFees
                  selectedKey={selectedKey}
                  changeColor={this.changeColor}
                  speedKey="average"
                  speed="Average"
                  eth="0.000030"
                  usd="0.03"
                />
                <TransactionFees
                  selectedKey={selectedKey}
                  changeColor={this.changeColor}
                  speedKey="fast"
                  speed="Fast"
                  eth="0.000050"
                  usd="0.04"
                />
              </View>
            </View>
            {/* Advanced Options */}
            <View style={styles.advancedOptionsView}>
              <TouchableOpacity onPress={() => navigation.navigate('Chart')}>
                <Text style={styles.advancedOptionsText}>Advanced Options</Text>
              </TouchableOpacity>
            </View>
            {/* Buttons Cancel/Next */}
            <View style={styles.buttonsContainer}>
              <PrimaryButton
                onPress={() => this.setState({ startSending: !startSending })}
                style={{ width: '48%' }}
                text="Next"
              />
              <SecondaryButton
                onPress={() => navigation.goBack()}
                style={{ width: '48%' }}
                text="Cancel"
              />
            </View>
          </View>
        )}
      </CustomImageBackground>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: getSelectedAccount,
  destination: getDestinationAccount,
  network: getSelectedNetwork,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      sendTransaction,
      sendToken,
      countTransaction,
      showNotification,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendEthToRecipient);
