import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default class InternationalTransferOfPersonalData extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>
          INTERNATIONAL TRANSFER OF PERSONAL DATA
        </Text>
        <Text style={styles.text}>
          Fanclear is a global business. Your personal data may be stored and
          processed in any country where we have operations or where we engage
          service providers. We have offices in the United States and have
          affiliates and service providers in the EU. Your personal data may be
          transferred to or from the United States or other locations outside of
          your state, country or other governmental jurisdiction where privacy
          laws may have data protection rules that are different from those of
          your country. However, we will take measures to ensure that any
          transfer of personal data remains protected to the standards described
          in this Policy.
        </Text>
        <Text style={styles.text}>
          EU users should read the important information provided below about
          transfer of personal data outside of the European Economic Area (EEA).
        </Text>
      </View>
    );
  }
}
