import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default class Policy extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          This policy details the ways that Fanclear LLC (“Fanclear”,
          “Fanwally”, “We”, “Us”, “Our”, the “Company”) collects and uses your
          data in accordance with GDPR guidelines. Fanclear recognizes that
          users of the Fanwally product value the personal ownership of their
          data and the privacy that decentralized systems afford. This Policy
          applies to our website (“Site”), applications (“Apps”), and
          (“Services”). Please carefully read the information as it becomes
          legally binding when you do use our services. We take the privacy and
          protection issues of our customers and agents very seriously and we
          are wholly dedicated to handling it in accordance with the legal
          requirements of the countries we operate. Should you feel the need to
          ask any questions, kindly, contact us at support@fanclear.com.
        </Text>
        <Text style={styles.text}>
          By using the Services, you agree to our use of your personal data in
          the manner described in this Privacy Policy and to be bound by our
          Terms of Use.
        </Text>
        <Text style={styles.text}>
          IF YOU DO NOT AGREE WITH THIS PRIVACY POLICY, OR ANY PART THEREOF, OR
          TO OUR TERMS OF USE, THEN YOU MUST DECLINE THE USE OF THE SERVICE.
        </Text>
        <Text style={styles.text}>
          This Privacy Policy does not apply to any information collected
          through third-party services that you may access through the Services
          or that you submit to us through email or other means of electronic
          communication.
        </Text>
        <Text style={styles.text}>
          If you are accessing this site from within the European Union (EU),
          see our Notice to EU Data Subjects below for information regarding
          your personal data protection rights under General Data Protection
          Regulation (GDPR) and our legal basis for processing and transfer of
          your personal data.
        </Text>
      </View>
    );
  }
}
