import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  View,
} from 'react-native';

import { styles } from './styles';
import CustomImageBackground from '../../../../components/CustomImageBackground';
import PrimaryButton from '../../../../components/Buttons/PrimaryButton';
import SecondaryButton from '../../../../components/Buttons/SecondaryButton';

export default class Network extends Component {
  render() {
    const {
      navigation: {
        state: {
          params: { editable, selectTextOnFocus, placeholder },
        },
      },
      navigation,
    } = this.props;

    return (
      <CustomImageBackground>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView enabled>
            <Text style={styles.text}>Network Name</Text>
            <TextInput
              placeholder={placeholder}
              editable={editable}
              selectTextOnFocus={selectTextOnFocus}
              style={styles.input}
            />

            <Text style={styles.text}>New RPC URL</Text>
            <TextInput
              editable={editable}
              selectTextOnFocus={selectTextOnFocus}
              style={styles.input}
            />

            <Text style={styles.text}>ChainID (optional)</Text>
            <TextInput
              editable={editable}
              selectTextOnFocus={selectTextOnFocus}
              style={styles.input}
            />

            <Text style={styles.text}>Symbol (optional)</Text>
            <TextInput
              editable={editable}
              selectTextOnFocus={selectTextOnFocus}
              style={styles.input}
            />

            <Text style={styles.text}>Block Explorer URL (optional)</Text>
            <TextInput
              editable={editable}
              selectTextOnFocus={selectTextOnFocus}
              style={styles.input}
            />

            <View style={styles.buttons}>
              <PrimaryButton
                text="Save"
                style={[styles.button, styles.primaryButton]}
                textStyle={{ color: '#fff' }}
              />
              <SecondaryButton
                text="Cancel"
                style={styles.button}
                onPress={() => navigation.goBack()}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </CustomImageBackground>
    );
  }
}
