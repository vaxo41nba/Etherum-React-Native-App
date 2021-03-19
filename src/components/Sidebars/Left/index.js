import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Clipboard,
  Modal,
} from 'react-native';
import Constants from 'expo-constants';

import { styles } from './styles';
import AddTokenContainer from '../../../navigation/AddTokenNavigation';
import PrimaryButton from '../../Buttons/PrimaryButton';
import SecondaryButton from '../../Buttons/SecondaryButton';

class LeftSidebar extends Component {
  state = {
    addTokensVisible: false,
  };

  toggleAddTokensModal = () => {
    const { addTokensVisible } = this.state;
    this.setState({ addTokensVisible: !addTokensVisible });
  };

  getReducedAddress = address => `${address.substring(0, 8)}...${address.substring(address.length - 6)}`;

  render() {
    const { addTokensVisible } = this.state;
    const {
      toggle, logo, defName, defAddress, currentAcc,
    } = this.props;
    return (
      <View style={styles.sidebarContainer}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <View style={styles.sidebarHeader}>
            {/* Account name and address */}
            <View style={styles.addressContainer}>
              <Text style={styles.accountText}>
                {currentAcc === null || undefined ? defName : currentAcc.name}
              </Text>
              <Text
                style={styles.addressText}
                onPress={() => Clipboard.setString(
                  currentAcc === null || undefined
                    ? defAddress
                    : currentAcc.address,
                )}
              >
                {this.getReducedAddress(
                  currentAcc === null || undefined
                    ? defAddress
                    : currentAcc.address,
                )}
              </Text>
            </View>

            {/* Arrow */}
            <TouchableOpacity style={styles.arrowButton} onPress={toggle}>
              <Image
                source={require('../../../../assets/sidebar-arrow.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>

          {/* Add Tokens */}
          <TouchableOpacity
            style={styles.sidebarSection}
            onPress={this.toggleAddTokensModal}
          >
            <Text style={styles.sidebarSectionText}>&gt; Add Tokens</Text>
          </TouchableOpacity>

          {/* Background Logo */}
          <Image source={logo} style={styles.sidebarLogo} />
        </View>

        {/* Add Tokens Modal */}
        <Modal
          visible={addTokensVisible}
          animationType="fade"
          style={{ paddingTop: Constants.statusBarHeight }}
        >
          <AddTokenContainer toggle={this.toggleAddTokensModal} />
          <View style={styles.buttons}>
            <PrimaryButton text="Next" style={styles.button} />
            <SecondaryButton
              text="Cancel"
              style={styles.button}
              onPress={this.toggleAddTokensModal}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

export default LeftSidebar;
