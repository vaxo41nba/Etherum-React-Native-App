import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import Menu from 'react-native-material-menu';

import { styles } from './styles';
import CustomImageBackground from '../../../components/CustomImageBackground';
import HeaderText from '../../../components/HeaderText';
import BackArrow from '../../../components/Buttons/BackArrow';

export default class General extends Component {
  state = {
    currency: 'USD - United States Dollar',
    isEnabled: false,
  };

  date = new Date();

  setMenuRef = ref => {
    this.menu = ref;
  };

  hideMenu = () => {
    this.menu.hide();
  };

  showMenu = () => {
    this.menu.show();
  };

  toggleSwitch = () => {
    const { isEnabled } = this.state;
    this.setState({ isEnabled: !isEnabled });
  };

  render() {
    const { currency, isEnabled } = this.state;
    const { navigation } = this.props;
    return (
      <CustomImageBackground>
        <ScrollView>
          <View style={styles.header}>
            <BackArrow onPress={() => navigation.goBack()} />
            <HeaderText text="General" style={styles.headerText} />
            <BackArrow iconStyle={{ display: 'none' }} />
          </View>

          <View style={styles.line} />
          <Text style={styles.text}>Currency Conversion</Text>
          <Text style={styles.date}>{this.date.toString()}</Text>

          {/* Menu */}
          <Menu
            style={styles.menu}
            ref={this.setMenuRef}
            button={(
              <TouchableOpacity onPress={this.showMenu} style={styles.button}>
                <Text style={styles.currency}>{currency}</Text>
                <Image
                  source={require('../../../../assets/Usermenu/right-arrow.png')}
                  style={styles.arrow}
                />
              </TouchableOpacity>
            )}
          >
            <View style={styles.menuItemsContainer}>
              <Text style={styles.menuItems}>{currency}</Text>
            </View>
          </Menu>

          <Text style={styles.text}>Use Blockies Identicon</Text>
          <View style={styles.switch}>
            <Switch onValueChange={this.toggleSwitch} value={isEnabled} />
            <Text style={styles.switchText}>{isEnabled ? 'ON' : 'OFF'}</Text>
          </View>
        </ScrollView>
      </CustomImageBackground>
    );
  }
}
