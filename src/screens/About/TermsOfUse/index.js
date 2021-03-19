import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';
import CustomImageBackground from '../../../components/CustomImageBackground';
import Terms from './Terms';
import InherentRisks from './InherentRisks';
import IntellectualProperty from './IntellectualProperty';
import ClassActionWaiver from './ClassActionWaiver';
import GeneralInformation from './GeneralInformation';
import BackArrow from '../../../components/Buttons/BackArrow';
import HeaderText from '../../../components/HeaderText';

export default class TermsOfUse extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <CustomImageBackground>
        <View style={styles.header}>
          <BackArrow onPress={() => navigation.goBack()} />
          <HeaderText text="TERMS OF USE" style={styles.headerText} />
          <BackArrow iconStyle={{ display: 'none' }} />
        </View>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Terms />
          <InherentRisks />
          <IntellectualProperty />
          <ClassActionWaiver />
          <GeneralInformation />
        </ScrollView>
        <View style={{ marginTop: 20 }} />
      </CustomImageBackground>
    );
  }
}
