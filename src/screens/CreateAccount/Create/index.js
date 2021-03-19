import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { styles } from './styles';
import CustomImageBackground from '../../../components/CustomImageBackground';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import SecondaryButton from '../../../components/Buttons/SecondaryButton';

import { showNotification } from '../../../redux/notifications/actions';
import { createNewAcc, addAccount } from '../../../redux/user/actions';
import { getWallets } from '../../../redux/user/selectors';
import { getMnemonicPhrase, getPassword } from '../../../redux/auth/selectors';

class Create extends Component {
  state = {
    user: '',
    isActive: false,
  };

  uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

  createAcc = () => {
    const {
      actions, mnemonic, wallets, cancel,
    } = this.props;
    const { user, isActive } = this.state;
    const password = user;
    const validateUsername = wallets.filter(users => users.name === user);
    if (user.length === 0) {
      actions.showNotification({
        message: 'Can not create account with empty name',
        isError: true,
      });
    } else if (validateUsername.length === 0) {
      actions.addAccount(password, mnemonic, isActive, this.uuidv4());
      cancel();
      actions.showNotification({
        message: 'Account was successfully created',
        isError: false,
      });
    } else {
      actions.showNotification({
        message: 'Account with same name already exists',
        isError: true,
      });
    }
  };

  render() {
    const { cancel } = this.props;

    return (
      <CustomImageBackground>
        {/* Input */}
        <View>
          <Text style={styles.text}>Account Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ user: text })}
          />
        </View>

        {/* Buttons */}
        <View style={styles.button}>
          <PrimaryButton text="Create" onPress={() => this.createAcc()} />
          <SecondaryButton text="Cancel" onPress={() => cancel()} />
        </View>
      </CustomImageBackground>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  mnemonic: getMnemonicPhrase,
  password: getPassword,
  wallets: getWallets,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      createNewAcc,
      showNotification,
      addAccount,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
