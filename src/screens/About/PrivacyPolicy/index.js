import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';
import CustomImageBackground from '../../../components/CustomImageBackground';
import Policy from './Policy';
import TheDataWeCollect from './TheDataWeCollect';
import UseOfPersonalData from './UseOfPersonalData';
import DisclosureOfPersonalData from './DisclosureOfPersonalData';
import InternationalTransferOfPersonalData from './InternationalTransferOfPersonalData';
import SecurityAndRetentionOfPersonalData from './SecurityAndRetentionOfPersonalData';
import PrivacyPolicyChangesAndEligibility from './PrivacyPolicyChangesAndEligibility';
import JurisdictionSpecificProvisions from './JurisdictionSpecificProvisions';
import CookiesAndLocalStoragePolicy from './CookiesAndLocalStoragePolicy';
import BackArrow from '../../../components/Buttons/BackArrow';
import HeaderText from '../../../components/HeaderText';

export default class PrivacyPolicy extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <CustomImageBackground>
        <View style={styles.header}>
          <BackArrow onPress={() => navigation.goBack()} />
          <HeaderText text="PRIVACY POLICY" style={styles.headerText} />
          <BackArrow iconStyle={{ display: 'none' }} />
        </View>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Policy />
          <TheDataWeCollect />
          <UseOfPersonalData />
          <DisclosureOfPersonalData />
          <InternationalTransferOfPersonalData />
          <SecurityAndRetentionOfPersonalData />
          <PrivacyPolicyChangesAndEligibility />
          <JurisdictionSpecificProvisions />
          <CookiesAndLocalStoragePolicy />
        </ScrollView>
        <View style={{ marginTop: 20 }} />
      </CustomImageBackground>
    );
  }
}
