import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Menu from 'react-native-material-menu';
import NetworkMenuItem from '../NetworkMenuItem';
import SelectNetworkButton from '../SelectNetworkButton';

import { styles } from './styles';
import { networks } from '../../constants/networks';

export default class NetworksDropdown extends Component {
  menu = null;

  setMenuRef = ref => {
    this.menu = ref;
  };

  hideMenu = () => {
    this.menu.hide();
  };

  showMenu = () => {
    this.menu.show();
  };

  select = net => {
    const { handleSelect } = this.props;
    handleSelect(net);
    this.hideMenu();
  };

  render() {
    const { selected } = this.props;
    return (
      <View style={styles.menu}>
        <Menu
          style={styles.menuItemsContainer}
          ref={this.setMenuRef}
          button={(
            <SelectNetworkButton
              onPress={this.showMenu}
              selected={selected.label}
              color={selected.color}
              logo={selected.logo}
            />
          )}
        >
          <Text style={styles.networks}>Networks</Text>
          <View style={styles.line} />
          <Text style={styles.menuText}>
            The default network for Ether transactions is Main Net
          </Text>

          {networks.map(net => (
            <NetworkMenuItem
              key={net.label}
              onPress={() => this.select(net)}
              style={styles.menuItem}
              label={net.label}
              backgroundColor={net.color}
              selected={selected.label === net.label}
            />
          ))}
        </Menu>
      </View>
    );
  }
}
