import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default class GeneralInformation extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>GENERAL INFORMATION</Text>

        {/* Entire Agreement */}
        <Text>
          <Text style={styles.title}>1- Entire Agreement. </Text>
          <Text style={styles.p}>
            These Terms (and any additional terms, rules and conditions of
            participation that Fanclear may post on the Service) forms the
            entire agreement between you and Fanclear with respect to the
            Service and supersedes any prior agreements or arrangements, be it
            oral or written, between you and Fanclear. In the event of a
            conflict between these Terms and the additional terms, rules and
            conditions of participation, the latter will prevail over the Terms
            to the extent of the conflict.
          </Text>
        </Text>

        {/* Waiver and Severability of Terms */}
        <Text>
          <Text style={styles.title}>
            2- Waiver and Severability of Terms.
            {' '}
          </Text>
          <Text style={styles.p}>
            Where Fanclear fails to exercise or enforce a right or any provision
            of the Terms, such act or omission shall not constitute a waiver of
            the said Term(s) or provision. Where a competent court of law or an
            arbitration committee find or consider any of the Terms as invalid,
            the parties, regardless of such fact agree that the court or
            committee should give effect to the parties’ intentions as reflected
            in the provision, and the other provisions of the Terms remain in
            full force and have full effect.
          </Text>
        </Text>

        {/* Statute of Limitations */}
        <Text>
          <Text style={styles.title}>3- Statute of Limitations. </Text>
          <Text style={styles.p}>
            Notwithstanding any law or statute to the contrary, you accept that
            any claim or cause of action originating from or related to the use
            of the Service or the Terms must be filed within a period of one
            year after such claim or cause of action arose, failure to do so,
            such action becomes permanently barred.
          </Text>
        </Text>

        {/* Section Titles */}
        <Text>
          <Text style={styles.title}>4- Section Titles. </Text>
          <Text style={styles.p}>
            The section titles in the Terms are mainly for purposes of
            convenience and don&apos;t have any legal or contractual effect.
          </Text>
        </Text>

        {/* Communications */}
        <Text>
          <Text style={styles.title}>5- Communications. </Text>
          <Text style={styles.p}>
            support@fanclear.com is the proper contact information or help
            medium with which any user with questions, complaints, claims or
            distress with respect to the Service can easily reach out to us.
          </Text>
        </Text>
      </View>
    );
  }
}
