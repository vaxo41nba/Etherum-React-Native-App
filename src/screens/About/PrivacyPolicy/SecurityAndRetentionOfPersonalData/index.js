import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default class SecurityAndRetentionOfPersonalData extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>
          SECURITY AND RETENTION OF PERSONAL DATA
        </Text>
        <Text style={styles.text}>
          We make reasonable efforts to ensure a level of security appropriate
          to the risk associated with the processing of personal data and employ
          industry standard security measures designed to ensure the security of
          all personal data shared through the Services. Unfortunately, the
          transmission or storage of information through the Internet cannot be
          guaranteed to be 100% secure. We are not responsible for any
          interception or interruption of any communications and for changes to
          or losses of data. Users of the Services are responsible for
          maintaining the security of password, user ID, or any other form of
          authentication involved in obtaining access to any of our Services. We
          may suspend your use of any of the Services without notice, if any
          breach of security is suspected. If you feel that the security of your
          account has been compromised, please contact us immediately.
        </Text>
        <Text style={styles.text}>
          We retain any information as long as it is necessary to fulfill the
          purposes outlined in this Policy. In addition, we retain personal data
          to prevent fraudulent activity, comply with applicable law, resolve
          disputes, assist with any investigation, enforce our Terms of Use, and
          other actions permitted by law. When determining the period of
          retention of personal data, we consider the following relevant factors
          such as the amount and nature of the personal data and the potential
          risk of harm from unlawful use or disclosure of such information.
        </Text>
        <Text style={styles.text}>
          In some circumstances we may anonymize your personal data, so we may
          use this information indefinitely without further notice to you.
        </Text>
      </View>
    );
  }
}
