import React, { Component } from 'react';
import {
  Image, Text, TextInput, View, ScrollView,
} from 'react-native';

import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { styles } from './styles';
import CustomImageBackground from '../../components/CustomImageBackground';
import HeaderText from '../../components/HeaderText';
import Hyperink from '../../components/Hyperlink';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

import { showNotification } from '../../redux/notifications/actions';
import { SetLogin } from '../../redux/auth/actions';

import { getPassword } from '../../redux/auth/selectors';

class LogIn extends Component {
  state = {
    inputPass: '',
  }

  validateLogIn = () => {
    const { password, actions, navigation } = this.props;
    const { inputPass } = this.state;
    if (inputPass === password) {
      actions.SetLogin(true);
      navigation.navigate('Main');
      actions.showNotification({
        message: 'Successful Log In',
        isError: false,
      });
    } else {
      actions.showNotification({
        message: 'Incorrect password',
        isError: true,
      });
    }
  }

  render() {
    return (
      <CustomImageBackground>
        <ScrollView>
          {/* Image with logo an name */}
          <Image
            source={require('../../../assets/fanbase.jpg')}
            style={styles.image}
          />

          {/* Header and slogan text */}
          <View style={styles.header}>
            <HeaderText
              text="Welcome back to Fanwally!"
              style={{ textAlign: 'center' }}
            />
            <Text style={styles.text}>
              The decentralized web is now at your fingertips!
            </Text>
          </View>

          {/* Login form */}
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            onChangeText={text => this.setState({ inputPass: text })}
          />
          <PrimaryButton
            text="LOG IN"
            style={styles.button}
            textStyle={styles.buttonText}
            onPress={() => this.validateLogIn()}
          />

          {/* Restore account and import using wally phrase */}
          <View style={styles.links}>
            <Hyperink text="Restore account?" style={{ marginBottom: 10 }} />
            <Hyperink text="Import using wally phrase" />
          </View>
        </ScrollView>
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
      SetLogin,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
