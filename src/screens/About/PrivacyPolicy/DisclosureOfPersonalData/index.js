import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default class DisclosureOfPersonalData extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>DISCLOSURE OF PERSONAL DATA</Text>
        <Text style={styles.text}>
          We may use or share your personal data with your consent, for example,
          when you instruct us to take a specific action with regard to your
          personal data. We do not disclose or sell the personal data that you
          provide without your explicit consent, except as described in this
          Policy. We may share your personal data with others under the
          following circumstances:
        </Text>
        <View style={styles.list}>
          <Text style={styles.p}>1. Your contact information;</Text>
          <Text style={styles.p}>
            2. Your network information to process transactions;
          </Text>
          <Text style={styles.p}>
            3. Your communications and dealings with us;
          </Text>
          <Text style={styles.p}>
            4. Your participation in Fanclear surveys or research studies;
          </Text>
          <Text style={styles.p}>
            5. Your requests for customer support and technical assistance;
          </Text>
          <Text style={styles.p}>
            6. Your information and behaviors concerning your use the Service;
          </Text>
          <Text style={styles.p}>7. Marketing information;</Text>
        </View>
      </View>
    );
  }
}
