import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import CustomImageBackground from '../../../components/CustomImageBackground';

import { styles } from './styles';

export default class CustomToken extends Component {
  render() {
    return (
      <CustomImageBackground>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView>
            <Text style={styles.text}>Token Contract Address</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>Token Symbol</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>Decimals of Precision</Text>
            <TextInput style={styles.input} defaultValue="0" />
          </KeyboardAvoidingView>
        </ScrollView>
      </CustomImageBackground>
    );
  }
}
