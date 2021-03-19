import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomImageBackground from '../../components/CustomImageBackground';
import MnemonicWord from '../../components/MnemonicWord';
import { showNotification } from '../../redux/notifications/actions';
import {
  addAccount,
  addWallet,
  setActive,
  getWalletBalance,
  setNetwork,
} from '../../redux/user/actions';
import { createPassword } from '../../redux/auth/actions';

import { getIsUserHaveWallet } from '../../redux/user/selectors';
import {
  getMnemonicPhrase,
  getPassword,
  getAuth,
} from '../../redux/auth/selectors';

import { styles } from './styles';
import HeaderText from '../../components/HeaderText';
import BackArrow from '../../components/Buttons/BackArrow';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

class ConfirmPhraseScreen extends Component {
  state = {
    randomCode: [],
    confirmArray: [],
    disableView: false,
  };

  componentDidMount() {
    const { mnemonicPhrase } = this.props;

    const arrayMnemonic = mnemonicPhrase
      .split(' ')
      .sort(() => Math.random() - 0.5)
      .map((word, index) => ({
        word,
        id: index,
        checked: false,
      }));
    this.setState({ randomCode: arrayMnemonic });
  }

  componentDidUpdate() {
    const { isUserHaveWallet, navigation } = this.props;

    if (isUserHaveWallet) {
      navigation.navigate({ routeName: 'Main' });
    }
  }

  onWordPress = id => {
    const { randomCode, confirmArray } = this.state;

    this.setState({
      randomCode: randomCode.map(code => (code.id === id ? { ...code, checked: !code.checked } : { ...code })),
      confirmArray: confirmArray.includes(id)
        ? confirmArray.filter(mnemonicId => mnemonicId !== id)
        : [...confirmArray, id],
      disableView: true,
    });
  };

  handleConfirmPress = () => {
    const { randomCode, confirmArray } = this.state;
    const {
      mnemonicPhrase, actions, navigation, account,
    } = this.props;

    const confirmPhrase = confirmArray
      .map(id => randomCode[id].word)
      .join(' ');

    if (confirmPhrase === mnemonicPhrase) {
      navigation.navigate('Main');
      const defaultNetwork = {
        label: 'Fanbase',
        title: 'Fanbase Dollars',
        color: '#0162d0',
        logo: require('../../../assets/NetworkLogo/fanbase.png'),
        sidebarLogo: require('../../../assets/LeftSidebar/fanbase.png'),
        currency: 'FNBD',
        name: 'fnbd',
      };
      actions.addWallet({
        ...account,
        active: true,
      });
      actions.setNetwork(defaultNetwork);
      actions.setActive(0, account);
      actions.showNotification({
        message: 'Account has been successfully created',
        isError: false,
      });
    } else {
      actions.showNotification({ message: 'Wrong Answer', isError: true });
    }
  };

  render() {
    const { randomCode, confirmArray, disableView } = this.state;
    const { navigation } = this.props;

    const confirmPhraseWords = confirmArray.map(id => randomCode[id].word);

    return (
      <CustomImageBackground>
        <ScrollView>
          <View style={styles.header}>
            <BackArrow onPress={() => navigation.goBack()} />
            <HeaderText
              text="Confirm Alternate Phrase"
              style={styles.headerText}
            />
            <BackArrow iconStyle={{ display: 'none' }} />
          </View>

          {/* White Block */}
          <Text style={styles.text}>Choose each phrase in exact order</Text>
          <View
            pointerEvents={disableView ? 'none' : 'auto'}
            style={[
              styles.phrase,
              { display: !confirmPhraseWords.length ? 'none' : 'flex' },
            ]}
          >
            {confirmPhraseWords.map(word => (
              <MnemonicWord key={word} word={word} />
            ))}
          </View>

          {/* Mnemonic Words */}
          <View style={styles.container}>
            {randomCode.map(code => (
              <MnemonicWord
                {...code}
                key={code.id}
                onWordPress={this.onWordPress}
              />
            ))}
          </View>

          {/* Confirm */}
          <PrimaryButton
            text="Confirm"
            onPress={this.handleConfirmPress}
            style={[
              styles.button,
              { opacity: confirmArray.length !== randomCode.length ? 0.4 : 1 },
            ]}
            textStyle={styles.buttonText}
            disabled={confirmArray.length !== randomCode.length}
          />
        </ScrollView>
      </CustomImageBackground>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  mnemonicPhrase: getMnemonicPhrase,
  password: getPassword,
  isUserHaveWallet: getIsUserHaveWallet,
  account: getAuth,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      addWallet,
      addAccount,
      showNotification,
      createPassword,
      setActive,
      getWalletBalance,
      setNetwork,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmPhraseScreen);
