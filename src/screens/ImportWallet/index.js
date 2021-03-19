import React, { Component } from 'react';
import {
  View, Text, KeyboardAvoidingView, ScrollView,
} from 'react-native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import LogoAndTitle from '../../components/LogoAndTitle';
import ErrorMessage from '../../components/ErrorMessage';
// import Hyperlink from '../../components/Hyperink';
import ValidationIndicator from '../../components/ValidationIndicator';
import Input from '../../components/Input';

import { styles } from './styles';
import HeaderText from '../../components/HeaderText';
import BackArrow from '../../components/Buttons/BackArrow';
import CustomImageBackground from '../../components/CustomImageBackground';
import Hyperink from '../../components/Hyperlink';
import SecondaryButton from '../../components/Buttons/SecondaryButton';

class ImportWallet extends Component {
  state = {
    checked: false,
    phraseError: false,
    lowerCase: false,
    upperCase: false,
    number: false,
    eightChars: false,
  };

  render() {
    const {
      checked,
      phraseError,
      lowerCase,
      upperCase,
      number,
      eightChars,
    } = this.state;

    const { navigation } = this.props;

    return (
      <CustomImageBackground>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView enabled>
            {/* Header */}
            <View style={styles.header}>
              <BackArrow onPress={() => navigation.goBack()} />
              <LogoAndTitle />
              <BackArrow iconStyle={{ display: 'none' }} />
            </View>

            <HeaderText
              text="Import an Account with your wallet phrase"
              style={styles.headerText}
            />
            <Text style={styles.text}>
              Enter your wallet phrase to restore your wallet
            </Text>

            {/* Multiline Input with placeholder of "Wallet Phrase" */}
            <View style={styles.multiline}>
              <Input
                placeholder="Separate each word with a single space"
                style={styles.phraseInput}
                onChangeText={text => {
                  this.setState({
                    phraseError: text.trim().split(/[ \t]+/g).length !== 12,
                  });
                }}
              />
              {phraseError && (
                <ErrorMessage message="Wallet phrases are 12 words long" />
              )}

              {/* Password validation 4 elements */}
              <View style={styles.validations}>
                <ValidationIndicator isValid={lowerCase} text="1 lowercase" />
                <ValidationIndicator isValid={upperCase} text="1 uppercase" />
                <ValidationIndicator isValid={number} text="1 number" />
                <ValidationIndicator isValid={eightChars} text="8 characters" />
              </View>
            </View>

            {/* Passwords fields */}
            <View style={styles.passwords}>
              <Text style={styles.label}>Enter Password</Text>
              <Input
                secureTextEntry
                onChangeText={text => {
                  this.setState({
                    lowerCase: /[a-z]/.test(text),
                    upperCase: /[A-Z]/.test(text),
                    number: /\d/.test(text),
                    eightChars: text.length >= 8,
                  });
                }}
              />
              <Text style={styles.label}>Confirm Password</Text>
              <Input secureTextEntry />
            </View>

            {/* Checkbox: I agree with terms and conditions */}
            <View style={styles.checkboxTerms}>
              <BouncyCheckbox
                onPress={value => this.setState({ checked: value })}
                value={checked}
                borderWidth={2}
                borderRadius={4}
                borderColor="black"
                fillColor="black"
                text=""
              />
              <Text style={styles.agreementText}>
                I have read and agree to the
                {' '}
                <Hyperink
                  text="Terms of Use"
                  onPress={() => navigation.navigate('TermsOfUse')}
                />
              </Text>
            </View>

            {/* Import button */}
            <SecondaryButton text="Import" />
          </KeyboardAvoidingView>
        </ScrollView>
      </CustomImageBackground>
    );
  }
}

export default ImportWallet;
