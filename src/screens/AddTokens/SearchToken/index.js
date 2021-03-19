import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import CustomImageBackground from '../../../components/CustomImageBackground';
import Hyperink from '../../../components/Hyperlink';

import { styles } from './styles';

export default class SearchToken extends Component {
  render() {
    return (
      <CustomImageBackground>
        <KeyboardAvoidingView>
          {/* Input */}
          <View style={styles.input}>
            <Image
              style={styles.searchIcon}
              source={require('../../../../assets/Usermenu/search-grey.png')}
            />
            <TextInput
              style={styles.placeholder}
              placeholder="Search Tokens"
              placeholderTextColor="grey"
            />
          </View>

          {/* Block */}
          <View style={styles.block}>
            <Image
              source={require('../../../../assets/docfind.png')}
              style={styles.image}
            />
            <Text style={styles.text}>
              Add the tokens you&apos;ve acquired using Wallybase
            </Text>
            <Hyperink text="Learn More" style={styles.link} />
          </View>
        </KeyboardAvoidingView>
      </CustomImageBackground>
    );
  }
}
