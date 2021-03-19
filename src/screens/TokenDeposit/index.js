import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, ScrollView, Image,
} from 'react-native';
import BackArrow from '../../components/Buttons/BackArrow';

import CustomImageBackground from '../../components/CustomImageBackground';
import HeaderText from '../../components/HeaderText';
import { styles } from './styles';

class TokenDepositScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <CustomImageBackground>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <BackArrow onPress={() => navigation.goBack()} />
            <HeaderText text="Deposit Ether" style={styles.headerText} />
            <BackArrow iconStyle={{ display: 'none' }} />
          </View>

          <Text style={styles.subText}>
            To interact with decentralized applications using Wallybase, you’ll
            need Ether in your wallet.
          </Text>
          <View style={styles.optionContainer}>
            <View style={styles.optionCircle}>
              <Image
                source={require('../../../assets/deposit-logo-1.jpg')}
                style={styles.logo}
              />
            </View>
            <Text style={styles.mainText}>Directly Deposit Ether</Text>
            <Text style={styles.optionSubText}>
              If you already have some Ether, the quickest way to get Ether in
              your new wallet by direct deposit.
            </Text>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionButtonText}>View Account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionContainer}>
            <View style={styles.optionCircle}>
              <Image
                source={require('../../../assets/deposit-logo-2.png')}
                style={styles.logo}
              />
            </View>
            <Text style={styles.mainText}>Buy ETH with Checkbook</Text>
            <Text style={styles.optionSubText}>
              Checkbook lets you use a credit card to deposit ETH right in to
              your Wallybase account.
            </Text>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionButtonText}>Continue to Checkbook</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </CustomImageBackground>
    );
  }
}

export default TokenDepositScreen;
