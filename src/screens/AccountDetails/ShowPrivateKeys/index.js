import React, { Component } from 'react';
import {
  Text, View, TextInput, Clipboard,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { styles } from './styles';
import CustomImageBackground from '../../../components/CustomImageBackground';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import SecondaryButton from '../../../components/Buttons/SecondaryButton';

import { showNotification } from '../../../redux/notifications/actions';

const address = '0x548bbad21e900ef291e0b09a6ee43b39ced84169';
const warning = 'Warning: Never disclose this key. Anyone with your private keys can steal any assets held in your account.';
const privateKeyExample = 'AE80D414127517AA8C2A8DE5E305385BB0320FFD8B1E6CB1DA192D0ADAD44EFB';

class ShowPrivateKeys extends Component {
  state = {
    typeMode: true,
  };

  handleConfirm = () => {
    this.setState({ typeMode: false });
  };

  render() {
    const { navigation, actions } = this.props;
    const { typeMode } = this.state;
    return (
      <CustomImageBackground style={styles.container}>
        {/* Name, address, title */}
        <View>
          <Text style={styles.bold}>Account Name</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
        <Text style={styles.bold}>Show Private Keys</Text>

        {/* Password input with warning */}
        {typeMode ? (
          <View>
            <Text style={styles.smallText}>Type your Wallybase password</Text>
            <TextInput secureTextEntry style={styles.input} />
          </View>
        ) : (
          <>
            <Text style={styles.smallText}>This is your private key</Text>
            <Text
              onPress={() => {
                actions.showNotification({
                  message: 'Copied to clipboard',
                  isError: false,
                });
                Clipboard.setString(privateKeyExample);
              }}
              style={{ color: 'red', fontSize: 17 }}
            >
              {privateKeyExample}
            </Text>
          </>
        )}
        <Text style={styles.warning}>{warning}</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          {typeMode ? (
            <>
              <SecondaryButton
                text="Cancel"
                onPress={() => navigation.navigate('AccountDetails')}
              />
              <PrimaryButton text="Confirm" onPress={this.handleConfirm} />
            </>
          ) : (
            <PrimaryButton
              text="Done"
              onPress={() => navigation.navigate('AccountDetails')}
            />
          )}
        </View>
      </CustomImageBackground>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      showNotification,
    },
    dispatch,
  ),
});

export default connect(null, mapDispatchToProps)(ShowPrivateKeys);
