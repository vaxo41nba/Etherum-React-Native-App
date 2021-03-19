import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';
import CustomImageBackground from '../../components/CustomImageBackground';
import HeaderText from '../../components/HeaderText';
import SettingsBlock from './SettingsBlock';
import BackArrow from '../../components/Buttons/BackArrow';

export default class Settings extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <CustomImageBackground>
        <View style={styles.header}>
          <BackArrow onPress={() => navigation.goBack()} />
          <HeaderText text="Settings" style={styles.headerText} />
          <BackArrow iconStyle={{ display: 'none' }} />
        </View>
        <ScrollView>
          <SettingsBlock
            title="General"
            text="Currency conversion, primary currency, language, blockies identicon"
            onPress={() => navigation.navigate('General')}
          />
          <SettingsBlock
            title="Advanced"
            text="Access developer features, download State Logs, Reset Account, setup testnets and custom RPC"
            onPress={() => navigation.navigate('Advanced')}
          />
          <SettingsBlock
            title="Contacts"
            text="Add, edit, remove, and manage your contacts"
            onPress={() => navigation.navigate('Contacts')}
          />
          <SettingsBlock
            title="Security & Privacy"
            text="Privacy settings and wallet seed phrase"
            onPress={() => navigation.navigate('SecurityAndPrivacy')}
          />
          <SettingsBlock
            title="Networks"
            text="Add and edit custom RPC networks"
            onPress={() => navigation.navigate('Networks')}
          />
          <SettingsBlock
            title="About"
            text="Version, support center, and contact info."
            onPress={() => navigation.navigate('About')}
          />
        </ScrollView>
      </CustomImageBackground>
    );
  }
}
