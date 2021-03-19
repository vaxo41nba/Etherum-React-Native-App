import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { styles } from './styles';
import CustomImageBackground from '../../../components/CustomImageBackground';
import HeaderText from '../../../components/HeaderText';
import BackArrow from '../../../components/Buttons/BackArrow';

import { getSelectedAccount } from '../../../redux/user/selectors';

class AccountDetailsPage extends Component {
  render() {
    const { navigation, GetAccount } = this.props;
    return (
      <CustomImageBackground>
        <View style={styles.header}>
          <BackArrow onPress={() => navigation.goBack()} />
          <HeaderText text="Account Name" style={styles.headerText} />
          <BackArrow iconStyle={{ display: 'none' }} />
        </View>

        <View style={styles.qr}>
          <QRCode size={160} value={GetAccount === null || undefined ? '0x548bbad21e900ef291e0b09a6ee43b39ced84169' : GetAccount.address} />
          <Text style={styles.address}>{GetAccount.address}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text>View on Fanscanner</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ShowPrivateKeys')}
          >
            <Text>Export Private Key</Text>
          </TouchableOpacity>
        </View>
      </CustomImageBackground>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  GetAccount: getSelectedAccount,
});

export default connect(mapStateToProps, null)(AccountDetailsPage);
