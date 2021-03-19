import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const MnemonicContainer = ({ mnemonicPhrase, copyToClipboard }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => copyToClipboard(mnemonicPhrase)}
  >
    <Text style={styles.text}>{mnemonicPhrase}</Text>
    <Image source={require('../../../assets/copy.png')} style={styles.copy} />
  </TouchableOpacity>
);

export default MnemonicContainer;
