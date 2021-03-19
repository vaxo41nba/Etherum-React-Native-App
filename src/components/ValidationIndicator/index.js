import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

const ValidationIndicator = ({ isValid, text }) => (
  <View style={[styles.alert, isValid ? styles.valid : '']}>
    <Text style={styles.validationCaseText}>{text}</Text>
  </View>
);

export default ValidationIndicator;
