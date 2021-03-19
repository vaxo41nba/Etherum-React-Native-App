import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default class PrivacyPolicyChangesAndEligibility extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>PRIVACY POLICY CHANGES</Text>
        <Text style={styles.text}>
          We may change this Policy from time to time to reflect changes in our
          personal data practices or relevant laws. The “Last Updated” legend at
          the top of this Policy indicates when this Policy was last revised. We
          encourage you to periodically review this page for the latest
          information on our privacy practices. Any modifications to this Policy
          will be effective upon our posting of the new terms or upon
          implementation of the changes to the Site. In all cases, your
          continued use of the Site or Services after the posting of any revised
          Privacy Policy indicates your acceptance of the terms of the revised
          Privacy Policy.
        </Text>
        <Text style={styles.header}>ELIGIBILITY</Text>
        <Text style={styles.text}>
          If you are under the age of majority in your jurisdiction of
          residence, you may use the Services only with the consent of or under
          the supervision of your parent or legal guardian. Consistent with the
          requirements of the Children&apos;s Online Privacy Protection Act
          (COPPA), if we learn that we have received any information directly
          from a child under age 13 without first receiving his or her
          parent&apos;s verified consent, we will use that information only to
          respond directly to that child (or his or her parent or legal
          guardian) to inform the child that he or she cannot use the Site and
          subsequently we will delete that information.
        </Text>
      </View>
    );
  }
}
