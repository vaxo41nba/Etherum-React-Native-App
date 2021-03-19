import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default class Terms extends Component {
  render() {
    return (
      <View>
        {/* Acceptance of terms */}
        <Text>
          <Text style={styles.title}>1- Acceptance of terms. </Text>
          <Text style={styles.p}>
            Fanclear LLC (“Fanclear”, “Fanwally,” “we,” “us,” or “our”) provides
            you the Fanwally eWallet platform for managing Ethereum (or “ETH”),
            Fanbase Dollars (or “FNBD”), and Fanbase Euro (or “FNBE”) accounts,
            in addition to your certificates of authenticity, cryptocurrencies,
            collectables and securities each in token form. Fanclear gives
            access to ordinary websites and applications to actively interact
            with the Ethereum and Fanbase blockchains, while keeping users in
            absolute control of the transactions they approve, through our
            website located at https://www.fanwally.com/ and browser plugin (the
            “Site”) and mobile application (the “App”) — which includes text,
            images, audio, code and other materials (collectively, the
            “Content”) and all of the features, and services provided. The Site,
            the App and any other features, tools, materials, or other services
            offered from time to time by Fanclear are referred to here as the
            “Services.” Please read these Terms of Use (hereinafter referred to
            the “Terms”) carefully before using the Services. By using or
            accessing the Services, or clicking to agree to these Terms where
            that option is made available, you implicitly (A) accept and agree
            to these Terms; (B) consent to the collection, handling, disclosure
            and other use of information as described in our Privacy Policy and;
            (C) agree to any additional terms, rules and conditions of
            participation issued by Fanclear from time to time. If you do not
            agree to the Terms, then you may not access or use the Content or
            Services. For any dispute not subject to arbitration you and
            Fanclear agree to submit to the personal and exclusive jurisdiction
            of and venue in the federal and state courts located in Tallinn,
            Estonia. You further agree to accept service of process by mail, and
            hereby waive any and all jurisdictional and venue defenses otherwise
            available. The Terms and the relationship between you and Fanclear
            shall be governed by the laws of Estonia, without regard to conflict
            of legal provisions.
          </Text>
        </Text>

        {/* Modification of Terms of Use */}
        <Text>
          <Text style={styles.title}>2- Modification of Terms of Use. </Text>
          <Text style={styles.p}>
            Except for the “Binding Arbitration and Waiver of Class Action
            Rights” section, Fanclear reserves the right, at its sole
            discretion, to replace, enhance and/or modify the Terms of Use at
            any time. The Use of our Services by you after any modification to
            the Terms does constitute your acceptance of the Terms of Use as
            modified. The most current version of these Terms will be posted on
            our Site. It is incumbent on you to review and be familiar with any
            such modifications.
          </Text>
        </Text>

        {/* Eligibility */}
        <Text>
          <Text style={styles.title}>3- Eligibility. </Text>
          <Text style={styles.p}>
            You hereby represent and/or constitute competence to enter into the
            terms, conditions, obligations, affirmations, representations and
            warranties and be bound by them as set forth in these Terms and to
            abide by and comply with these Terms. Fanclear provides a global
            platform and by accessing its Content or Services, you are
            indicating and warranting that you are of the legal age of majority
            in your jurisdiction as is required to access such Services and
            Content and enter into plans of actions and schemes as provided by
            the Service. You further represent that you are legally permitted to
            make use of the service in your jurisdiction including owning
            cryptographic tokens of value, interacting with the Services or
            Content in any way and you are responsible for ensuring compliance
            with the laws of your jurisdiction and acknowledge that Fanwally is
            not liable for your compliance with such laws.
          </Text>
        </Text>

        {/* Account Password and Security */}
        <Text>
          <Text style={styles.title}>4- Account Password and Security. </Text>
          <Text style={styles.p}>
            When setting up a Fanwally account, you will be responsible for
            keeping your own account secrets and protecting sensitive
            information concerning the same, which may be a twelve-word phrase,
            an account file, or other locally stored secret information.
            Fanwally encrypts this data locally with a password you provide,
            that we never send to our servers. You agree to the following to (A)
            never use the same password for Fanwally that you have ever used
            outside of this service; (B) always keep your secret information and
            password highly confidential and never share them with anyone; and
            (C) immediately notify Fanwally of any unauthorized use of your
            account or in situations where you notice any form of breach of
            security. Please note that Fanwally cannot and will not be liable
            for any loss or damage arising from your inadequacies or failures to
            comply with this section.
          </Text>
        </Text>
      </View>
    );
  }
}
