import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { styles } from './styles';
import UserMenuHeader from '../../UserMenuHeader';
import UserMenuItem from '../../UserMenuItem';
import UserMenuAccounts from '../../UserMenuAccounts';

import { getSelectedAccount } from '../../../redux/user/selectors';

class RightSidebar extends Component {
  render() {
    const {
      toggle, GetAccount, navigateToScreens, logOut,
    } = this.props;

    const currentUser = GetAccount === null || undefined ? 'Account 1' : GetAccount.name;

    /* Icons */
    const icons = {
      info: require('../../../../assets/Usermenu/info-details-2.png'),
      arrow: require('../../../../assets/Usermenu/arrow-top-right.png'),
      star: require('../../../../assets/Usermenu/star.png'),
      add: require('../../../../assets/Usermenu/add.png'),
      import: require('../../../../assets/Usermenu/download.png'),
      settings: require('../../../../assets/Usermenu/settings.png'),
    };

    return (
      <View style={styles.sidebarContainer}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <View style={styles.sidebarHeader}>
            {/* Arrow */}
            <TouchableOpacity style={styles.arrowButton} onPress={toggle}>
              <Image
                source={require('../../../../assets/sidebar-arrow.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>

            {/* My accounts and logout */}
            <View style={styles.header}>
              <UserMenuHeader logOut={logOut} />
              <UserMenuAccounts />
            </View>
          </View>
          <View style={styles.line} />

          {/* User Menu */}
          <UserMenuItem
            icon={icons.info}
            text={` ${currentUser} Details`}
            onPress={() => navigateToScreens('AccountDetails')}
          />
          <UserMenuItem
            icon={icons.star}
            text="My Collectibles"
            onPress={() => navigateToScreens('MyCollectibles')}
          />
          <UserMenuItem
            icon={icons.add}
            text="Create Account"
            onPress={() => navigateToScreens('CreateAccount')}
          />
          <UserMenuItem
            icon={icons.import}
            text="Import Account"
            onPress={() => navigateToScreens('ImportAccount')}
          />
          <UserMenuItem
            icon={icons.info}
            text="Info & Help"
            onPress={() => navigateToScreens('About')}
          />
          <UserMenuItem
            icon={icons.settings}
            text="Settings"
            onPress={() => navigateToScreens('Settings')}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  GetAccount: getSelectedAccount,
});

export default connect(mapStateToProps, null)(RightSidebar);
