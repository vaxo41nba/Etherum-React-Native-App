import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import CustomImageBackground from '../CustomImageBackground';
import HeaderText from '../HeaderText';

import { styles } from './styles';

export default class ImportNameModal extends Component {
  state = {
    name: '',
  };

  render() {
    const { toggle, importFunc, cancel } = this.props;
    const { name } = this.state;
    return (
      <CustomImageBackground style={styles.container}>
        <HeaderText text="Save As: " style={styles.header} />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ name: text })}
        />
        <View style={styles.buttons}>
          <PrimaryButton
            text="Import"
            onPress={() => {
              importFunc(name);
              toggle();
              cancel();
            }}
          />
          <SecondaryButton
            text="Cancel"
            onPress={toggle}
            style={{ marginVertical: 15 }}
          />
        </View>
      </CustomImageBackground>
    );
  }
}
