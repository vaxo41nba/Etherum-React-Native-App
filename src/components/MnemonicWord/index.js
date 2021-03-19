import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

import { styles } from './styles';

const MnemonicWord = ({
  onWordPress, id, checked, word,
}) => (
  <TouchableWithoutFeedback onPress={() => onWordPress(id, checked)}>
    <View style={styles.wrapper}>
      <View style={[styles.container, checked && styles.checked]}>
        <Text style={[styles.text, checked && styles.checkedText]}>{word}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export default MnemonicWord;
