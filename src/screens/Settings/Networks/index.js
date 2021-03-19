import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';
import NetworkBlock from './NetworkBlock';
import CustomImageBackground from '../../../components/CustomImageBackground';
import HeaderText from '../../../components/HeaderText';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import BackArrow from '../../../components/Buttons/BackArrow';

const networks = [
  { title: 'Main Ethereum Network', color: '#ff0000' },
  { title: 'Ropsten Test Network', color: '#00f' },
  { title: 'Kovan Test Network', color: '#ff0' },
  { title: 'Rinkeby Test Network', color: '#ffc0cb' },
  { title: 'Goerli Test Network', color: '#00ffff' },
  { title: 'Localhost 8545', color: '#c0c0c0' },
  { title: 'Custom RPC', color: '#ffd700' },
];

export default class Networks extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <CustomImageBackground>
        <View style={styles.header}>
          <BackArrow onPress={() => navigation.goBack()} />
          <HeaderText text="Networks" style={styles.headerText} />
          <BackArrow iconStyle={{ display: 'none' }} />
        </View>
        <ScrollView>
          {networks.map(net => (
            <NetworkBlock
              title={net.title}
              color={net.color}
              key={net.title}
              onPress={() => navigation.navigate('Network', {
                placeholder: net.title,
                editable: false,
                selectTextOnFocus: false,
              })}
            />
          ))}
          <PrimaryButton
            text="Add Network"
            style={styles.button}
            textStyle={{ color: '#fff' }}
            onPress={() => navigation.navigate('AddNetwork')}
          />
        </ScrollView>
      </CustomImageBackground>
    );
  }
}
