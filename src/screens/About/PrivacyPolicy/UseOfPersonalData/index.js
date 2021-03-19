import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default class UseOfPersonalData extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>USE OF PERSONAL DATA</Text>
        <Text style={styles.text}>
          We will use your personal data in the following ways:
        </Text>
        <Text>
          <Text style={styles.title}>1- To provide our service. </Text>
          <Text style={styles.p}>
            We collect and use your personal data to provide, improve, and
            protect our Services. It enables us to send information, including
            technical notices and confirmations, updates and security alerts,
            technical support and administrative messages.
          </Text>
        </Text>
        <Text>
          <Text style={styles.title}>
            2- To comply with laws and law enforcement.
            {' '}
          </Text>
          <Text style={styles.p}>
            We use your personal data to comply with applicable laws, lawful
            requests and legal process. We may also use your personal data to
            protect and deter against fraudulent and unauthorized activity.
          </Text>
        </Text>
        <Text>
          <Text style={styles.title}>3- To communicate with you. </Text>
          <Text style={styles.p}>
            We use your personal data to communicate about promotions, upcoming
            events, and other news related to services and products provided by
            our platform and our selected partners.
          </Text>
        </Text>
      </View>
    );
  }
}
