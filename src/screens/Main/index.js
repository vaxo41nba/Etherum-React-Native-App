import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  Clipboard,
  BackHandler,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { styles } from './styles';
import CustomImageBackground from '../../components/CustomImageBackground';
import TokenBlock from '../../components/TokenBlock';
import OpenHistory from '../../components/OpenHistory';
import {
  getSelectedAccount,
  getSelectedNetwork,
  getWallets,
  getTransactions,
} from '../../redux/user/selectors';
import {
  getAccountName,
  getAddress,
  getAuth,
} from '../../redux/auth/selectors';
import { showNotification } from '../../redux/notifications/actions';
import { SetLogin } from '../../redux/auth/actions';
import {
  getWalletBalance,
  setActive,
  setNetwork,
} from '../../redux/user/actions';
import NetworksDropdown from '../../components/NetworksDropdown';
import LeftDrawer, {
  leftDrawerRef,
} from '../../components/Sidebars/LeftDrawer';
import RightDrawer, {
  rightDrawerRef,
} from '../../components/Sidebars/RightDrawer';

class MainScreen extends Component {
  state = {
    historyExtended: false,
  };

  componentDidMount() {
    const { network, actions, account } = this.props;
    actions.getWalletBalance(account, network);
    actions.SetLogin(true);
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick = () => true;

  getReducedAddress = address => `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;

  handleExtend = () => {
    const { historyExtended } = this.state;
    this.setState({ historyExtended: !historyExtended });
  };

  handleSelect = net => {
    const { actions, GetAccount, network } = this.props;
    actions.setNetwork(net);
    actions.getWalletBalance(GetAccount, network.name);
  };

  navigateToScreens = nav => {
    const { navigation } = this.props;
    navigation.navigate(`${nav}`);
  };

  copyToClipboard = address => {
    const { actions } = this.props;
    Clipboard.setString(address);
    actions.showNotification({
      message: 'Address Copied To Clipboard',
      isError: false,
    });
  };

  logOut = () => {
    const { navigation, actions } = this.props;
    actions.SetLogin(false);
    navigation.navigate('LogIn');
  };

  render() {
    const {
      GetAccount,
      GetAccounts,
      defaultName,
      defaultAddress,
      network,
      transactions,
    } = this.props;
    const { historyExtended } = this.state;
    return (
      <View style={styles.container}>
        <LeftDrawer
          defAddress={defaultAddress}
          defName={defaultName}
          currentAcc={GetAccount}
          sidebarLogo={network.sidebarLogo}
        >
          <RightDrawer
            navigateToScreens={this.navigateToScreens}
            logOut={this.logOut}
            GetAccounts={GetAccounts}
          >
            <CustomImageBackground>
              <View style={styles.logoDropdown}>
                {/* Logo */}
                <Image
                  style={styles.logo}
                  source={require('../../../assets/fWhite.png')}
                />

                {/* Networks Dropdown */}
                <NetworksDropdown
                  selected={network}
                  handleSelect={this.handleSelect}
                />
              </View>

              <View style={styles.menuBar}>
                {/* Menu Button */}
                <TouchableOpacity
                  style={styles.menuIconContainer}
                  onPress={() => leftDrawerRef.ref.openDrawer()}
                >
                  <Image
                    style={styles.menuIcon}
                    source={require('../../../assets/menu.png')}
                  />
                </TouchableOpacity>

                {/* Account name and address */}
                <TouchableOpacity
                  onPress={() => this.copyToClipboard(
                    GetAccount === null || undefined
                      ? defaultAddress
                      : GetAccount.address,
                  )}
                  style={styles.addressContainer}
                >
                  <Text style={styles.accountText}>
                    {GetAccount === null || undefined
                      ? defaultName
                      : GetAccount.name}
                  </Text>
                  <Text style={styles.addressText}>
                    {this.getReducedAddress(
                      GetAccount === null || undefined
                        ? defaultAddress
                        : GetAccount.address,
                    )}
                  </Text>
                </TouchableOpacity>

                {/* User Menu */}
                <TouchableOpacity
                  onPress={() => rightDrawerRef.ref.openDrawer()}
                  style={styles.blueButtonContainer}
                >
                  <View style={styles.blueButton}>
                    <Image
                      style={styles.blueButtonImg}
                      source={require('../../../assets/fanbase.jpg')}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              {/* Token Block */}
              <TokenBlock
                logo={network.logo}
                title={network.title}
                currency={network.currency}
                navigateToScreens={this.navigateToScreens}
                currentUser={GetAccount}
              />
              {/* History */}
              <OpenHistory
                historyExtended={historyExtended}
                onPress={this.handleExtend}
                defName={defaultName}
                defAddress={defaultAddress}
                currentAcc={GetAccount}
                transactions={transactions}
              />
            </CustomImageBackground>
          </RightDrawer>
        </LeftDrawer>
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  GetAccount: getSelectedAccount,
  GetAccounts: getWallets,
  defaultName: getAccountName,
  defaultAddress: getAddress,
  network: getSelectedNetwork,
  account: getAuth,
  transactions: getTransactions,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      showNotification,
      SetLogin,
      getWalletBalance,
      setActive,
      setNetwork,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
