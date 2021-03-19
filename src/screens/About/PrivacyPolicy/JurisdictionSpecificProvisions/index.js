import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default class JurisdictionSpecificProvisions extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>JURISDICTION-SPECIFIC PROVISIONS</Text>

        {/* Notice to California residents */}
        <Text style={styles.marginTop}>
          <Text style={styles.title}>1- Notice to California residents. </Text>
          <Text style={styles.p}>
            Under California Civil Code Section 1789.3, California users are
            entitled to the following consumer rights notice: California
            residents may reach the Complaint Assistance Unit of the Division of
            Consumer Services of the California Department of Consumer Affairs
            by mail at 1625 North Market Blvd., Sacramento, CA 95834, or by
            telephone at (916) 445-1254 or (800) 952-5210.
          </Text>
        </Text>

        {/* Notice to EU DATA subjects */}
        <Text>
          <Text style={styles.title}>2- Notice to EU DATA subjects. </Text>
          <Text style={styles.p}>
            For the purpose of this Privacy Policy, we are a Data Controller of
            your personal data. The information you provide us may include
            sensitive data as defined in the GDPR, for example, your race or
            ethnicity on government-issued identification documents.
          </Text>
        </Text>

        {/* Legal Basis for Processing in Europe */}
        <Text>
          <Text style={styles.title}>
            3- Legal Basis for Processing in Europe.
            {' '}
          </Text>
          <Text style={styles.p}>
            The legal basis upon which we may collect and process your personal
            data as required by current legislation includes when:
          </Text>
        </Text>
        <View style={styles.list}>
          <Text style={styles.p}>
            1. We need to perform a contract with you to provide our service;
          </Text>
          <Text style={styles.p}>2. We need to optimize our platform;</Text>
          <Text style={styles.p}>
            3. You have given us permission to do so;
          </Text>
          <Text style={styles.p}>
            4. The processing is in our legitimate interests and it is not
            overridden by your rights or interests;
          </Text>
          <Text style={styles.p}>
            5. Payment processing purposes are required;
          </Text>
          <Text style={styles.p}>6. We need to comply with the law;</Text>
          <Text style={styles.p}>
            7. We need to prevent fraudulent activity;
          </Text>
        </View>

        <Text style={styles.text}>
          Where our use of your personal data is based upon your consent, you
          have the right to withdraw it anytime in the manner indicated in the
          Service. If you have questions about the legal basis for processing
          your personal data, contact us at support@fanclear.com.
        </Text>

        {/* Your Rights */}
        <Text>
          <Text style={styles.title}>4- Your Rights. </Text>
          <Text style={styles.p}>
            Under the GDPR, you have certain rights regarding your personal
            data. In certain circumstances you have the following data
            protection rights; (A) the right to access, correct or to delete
            your personal data; (B) the right to object to our reliance on our
            legitimate interests; (C) the right to restrict the processing of
            your personal data; (D) the right to data portability; (E) the right
            to withdraw consent.
          </Text>
        </Text>

        <Text style={styles.text}>
          You can submit these requests by email to support@fanclear.com. Please
          note that we may ask you to verify your identity before responding to
          such requests. You have the right to complain to a Data Protection
          Authority about our collection and use of your personal information.
          For more information, please contact your local data protection
          authority in the European Economic Area (EEA).
        </Text>

        {/* Data Transfers Across Borders */}
        <Text>
          <Text style={styles.title}>5- Data Transfers Across Borders. </Text>
          <Text style={styles.p}>
            Please be aware that your personal data will be transferred to,
            processed, and stored in the United States. Data protection laws in
            the U.S. may be different from those in your country of residence.
            By using our Services, you consent to the transfer of personal data
            to the U.S. as stated in this Policy. Whenever we transfer your
            personal data out of the EEA to the U.S., the transfer will be based
            on a data transfer mechanism recognized by the European Commission
            as providing adequate protection for personal data.
          </Text>
        </Text>

        {/* Contact Information */}
        <Text style={styles.header}>CONTACT INFORMATION</Text>
        <Text style={styles.text}>
          If there are any questions regarding this Policy you may contact us at
          support@fanclear.com.
        </Text>
      </View>
    );
  }
}
