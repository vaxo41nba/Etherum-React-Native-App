import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import PrimaryButton from '../../../../components/Buttons/PrimaryButton';
import SecondaryButton from '../../../../components/Buttons/SecondaryButton';
import CustomImageBackground from '../../../../components/CustomImageBackground';
import HeaderText from '../../../../components/HeaderText';

import { styles } from './styles';

export default class NewContact extends Component {
  render() {
    const { navigation } = this.props;
    return (
      /* Containers */
      <CustomImageBackground>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView enabled>
            {/* Header */}
            <HeaderText text="New Contact" />

            {/* Block */}
            <View style={styles.block}>
              <Text style={styles.light}>Username</Text>
              <TextInput style={styles.input} />

              <Text style={styles.light}>Ethereum Public Address</Text>
              <View style={styles.blackInput}>
                <Image
                  style={styles.searchIcon}
                  source={require('../../../../../assets/Usermenu/search-grey.png')}
                />
                <TextInput
                  style={styles.placeholder}
                  placeholder="Search, public address (0x), or ENS"
                  placeholderTextColor="rgba(211,211,211, 0.5)"
                />
                <Image
                  style={styles.searchIcon}
                  source={require('../../../../../assets/Usermenu/qr.png')}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>

        {/* Buttons */}
        <View style={styles.buttons}>
          <PrimaryButton
            text="Next"
            style={styles.primaryButton}
            textStyle={{ color: '#fff' }}
          />
          <SecondaryButton
            text="Cancel"
            style={styles.secondaryButton}
            onPress={() => navigation.goBack()}
          />
        </View>
      </CustomImageBackground>
    );
  }
}
