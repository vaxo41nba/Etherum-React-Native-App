import React, { Component } from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { styles } from './styles';
import { getWallets, getSelectedNetwork } from '../../redux/user/selectors';
import { setActive, getWalletBalance } from '../../redux/user/actions';

const UserMenuAccount = ({ active, account, balance }) => (
  <View style={styles.accountContainer}>
    <Image
      source={require('../../../assets/Usermenu/check.png')}
      style={[styles.icon, { opacity: active ? 1 : 0 }]}
    />
    <Text style={styles.text}>{account}</Text>
    <Text style={[styles.text, { opacity: 0.5 }]}>
      {balance}
      {' '}
      ETH
    </Text>
  </View>
);

class UserMenuAccounts extends Component {
  setActiveFunc = item => {
    const { actions, network } = this.props;
    const selectedAcc = {
      name: item.name,
      address: item.address,
      privKey: item.privKey,
      active: item.active,
      id: item.id,
      key: item.address,
    };
    actions.setActive(item.id, selectedAcc);
    actions.getWalletBalance(selectedAcc, network);
  };

  render() {
    const { GetWallets } = this.props;
    return (
      <View>
        {GetWallets.map(users => (
          <TouchableOpacity
            onPress={() => {
              this.setActiveFunc(users);
            }}
            key={users.id}
          >
            <UserMenuAccount
              account={`${users.name}`}
              balance={users.balance === undefined ? '0' : users.balance}
              active={users.active}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setActive,
      getWalletBalance,
    },
    dispatch,
  ),
});

const mapStateToProps = createStructuredSelector({
  GetWallets: getWallets,
  network: getSelectedNetwork,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenuAccounts);
