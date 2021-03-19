import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { styles } from './styles';
import PrimaryButton from '../../../../components/Buttons/PrimaryButton';
import SecondaryButton from '../../../../components/Buttons/SecondaryButton';
import CustomImageBackground from '../../../../components/CustomImageBackground';
import HeaderText from '../../../../components/HeaderText';

import { getPassword } from '../../../../redux/auth/selectors';
import { showNotification } from '../../../../redux/notifications/actions';

class RevealSeedWords extends Component {
  state = {
    inputPass: null,
  };

  passwordValidate = text => {
    const { password, actions } = this.props;
    if (text !== password) {
      actions.showNotification({
        isError: true,
        message: 'Invalid Credentials',
      });
    } else {
      actions.showNotification({
        isError: false,
        message: 'Credentials are correct',
      });
    }
  };

  render() {
    const { navigation } = this.props;
    const { inputPass } = this.state;
    return (
      <CustomImageBackground>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView enabled>
            <HeaderText text="Wallet Phrase" />
            <View style={styles.line} />

            <Text style={styles.text}>
              To access Wallybase from a new browser or computer, you will need
              your wallet phrase. Save your phrase somewhere safe.
            </Text>

            <View style={styles.note}>
              <Image
                style={styles.image}
                source={require('../../../../../assets/exclamation-mark.png')}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.bold}>
                  DO NOT share your wallet phrase with anyone
                </Text>
                <Text style={styles.noteText}>
                  Your wallet phrase can be used to access your account
                </Text>
              </View>
            </View>

            <Text style={styles.text}>Enter password to continue</Text>
            <TextInput
              secureTextEntry
              style={styles.input}
              placeholder="Password"
              onChangeText={text => this.setState({ inputPass: text })}
            />
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={styles.buttons}>
          <PrimaryButton
            text="Next"
            style={styles.button}
            onPress={() => this.passwordValidate(inputPass)}
          />
          <SecondaryButton
            text="Cancel"
            style={styles.button}
            onPress={() => navigation.goBack()}
          />
        </View>
      </CustomImageBackground>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  password: getPassword,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      showNotification,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(RevealSeedWords);
