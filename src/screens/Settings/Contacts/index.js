import React, { Component } from 'react';
import {
  View, Image, TouchableOpacity, ScrollView,
} from 'react-native';

import { styles } from './styles';
import CustomImageBackground from '../../../components/CustomImageBackground';
import HeaderText from '../../../components/HeaderText';
import SettingsBlock from '../SettingsBlock';
import BackArrow from '../../../components/Buttons/BackArrow';

export default class Contacts extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <CustomImageBackground>
        <ScrollView>
          {/* Header and Add Button */}
          <View style={styles.header}>
            <BackArrow onPress={() => navigation.goBack()} />
            <HeaderText text="Contacts" />
            <TouchableOpacity onPress={() => navigation.navigate('NewContact')}>
              <Image
                style={styles.add}
                source={require('../../../../assets/Usermenu/add-black.png')}
              />
            </TouchableOpacity>
          </View>

          <SettingsBlock
            title="My Wallet Accounts"
            text="All of your Wallybase created accounts will automatically be added to this section."
          />
        </ScrollView>
      </CustomImageBackground>
    );
  }
}
