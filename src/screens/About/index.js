import React, { Component } from 'react';
import {
  View, Text, Image, ScrollView,
} from 'react-native';

import { styles } from './styles';
import CustomImageBackground from '../../components/CustomImageBackground';
import HeaderText from '../../components/HeaderText';
import Hyperlink from '../../components/Hyperlink';
import BackArrow from '../../components/Buttons/BackArrow';

export default class About extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <CustomImageBackground>
        <View style={styles.headerAndIcon}>
          <BackArrow onPress={() => navigation.goBack()} />
          <HeaderText text="About" style={styles.headerText} />
          <BackArrow iconStyle={{ display: 'none' }} />
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            style={styles.logo}
            source={require('../../../assets/logo.png')}
          />
          <Text style={styles.title}>Fanwally</Text>
          <Text style={styles.version}>0.1.0</Text>
          <Text style={styles.LLC}>
            fanwally.com is property of Fanclear LLC.
          </Text>
          <Text style={styles.links}>Links</Text>
          <Hyperlink
            style={styles.link}
            text="Privacy Policy"
            onPress={() => navigation.navigate('PrivacyPolicy')}
          />
          <Hyperlink
            style={styles.link}
            text="Terms of Use"
            onPress={() => navigation.navigate('TermsOfUse')}
          />
          <Hyperlink style={styles.link} text="Attributions" />
          <Hyperlink style={styles.link} text="Need Support?" />
          <Hyperlink style={styles.link} text="Want to know more?" />
          <Hyperlink style={styles.link} text="Email us!" />
        </ScrollView>
        <View style={{ marginTop: 15 }} />
      </CustomImageBackground>
    );
  }
}
