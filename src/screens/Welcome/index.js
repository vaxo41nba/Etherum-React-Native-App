import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

import CustomImageBackground from '../../components/CustomImageBackground';

import styles from './styles';

import { getIsAuthenticated, getIsLogged } from '../../redux/auth/selectors';

class WelcomeScreen extends Component {
  componentDidMount() {
    const { navigation, isAuth, isLogged } = this.props;
    if (isAuth === true && isLogged === false) {
      navigation.navigate('LogIn');
    } else if (isAuth === true && isLogged === true) {
      navigation.navigate('Main');
    } else {
      navigation.navigate('Welcome');
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <CustomImageBackground style={styles.container}>
        <View style={styles.block}>
          {/* Logo */}
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.image}
          />

          {/* Header Text */}
          <Text style={styles.h1}>Welcome to Fanwally!</Text>

          {/* Description */}
          <Text style={styles.text}>
            Fanwally is a non-custodial wallet which lives on your device and
            connects you to the decentralized web. View your media,
            collectables, certificates of authenticity, digital assets and
            digital rights all on Fanwally
          </Text>

          {/* Get started button */}
          <PrimaryButton
            text='Get Started'
            onPress={() => navigation.navigate('GetStarted')}
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      </CustomImageBackground>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isAuth: getIsAuthenticated,
  isLogged: getIsLogged,
});

export default connect(mapStateToProps, null)(WelcomeScreen);
