import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { showNotification } from '../../redux/notifications/actions';

import { styles } from './styles';
import LogoAndTitle from '../../components/LogoAndTitle';
import CustomImageBackground from '../../components/CustomImageBackground';
import BackArrow from '../../components/Buttons/BackArrow';
import HeaderText from '../../components/HeaderText';

class FanwallyAgreementScreen extends Component {
  render() {
    const { navigation, actions } = this.props;

    return (
      <CustomImageBackground style={styles.container}>
        <View style={styles.header}>
          <BackArrow onPress={() => navigation.goBack()} />
          <LogoAndTitle />
          <BackArrow iconStyle={{ display: 'none' }} />
        </View>

        <HeaderText style={styles.h1} text="We need your help" />
        <Text style={styles.text}>
          Fanwally only collects user data to improve the useability of the app.
          To change your settings you may...
        </Text>

        {/* List */}
        <View style={styles.list}>
          <Text>Opt-out via Settings</Text>
          <Text style={styles.text}>View pages anonymously</Text>
          <Text style={styles.text}>Edit our public boards</Text>
          <Text style={styles.text}>Read our oaths</Text>
          <Text style={styles.text}>Write us with ways to improve</Text>
        </View>

        <Text style={styles.text}>
          Fanwally aims to limit the collection of data to the minimum allowable
          by US and EU law. This includes addresses, keys, amounts, hashes,
          transaction histories and personal information. We never sell data for
          profit.
        </Text>

        {/* Buttons */}
        <View style={styles.buttons}>
          <TouchableHighlight style={[styles.button, styles.grey]}>
            <Text
              style={[styles.buttonText, { color: '#6a737d' }]}
              onPress={() => actions.showNotification({
                message: 'You have to agree, my friend',
                isError: true,
              })}
            >
              I disagree
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, { backgroundColor: '#0563d0' }]}
            onPress={() => {
              // Testing snackbar functional
              actions.showNotification({
                message: 'Good job, go ahead!',
                isError: false,
              });
              navigation.navigate({ routeName: 'ImportWallet' });
            }}
          >
            <Text style={[styles.buttonText, { color: 'white' }]}>I agree</Text>
          </TouchableHighlight>
        </View>

        {/* Footer */}
        <Text style={[styles.text, { opacity: 0.5 }]}>
          We adhere to General Data Protection Regulations (EU) 2016/679. For a
          deeper look, view our policies here.
        </Text>
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

export default connect(null, mapDispatchToProps)(FanwallyAgreementScreen);
