import React, { Component } from 'react';
import {
  TextInput, TouchableOpacity, View, Text, Image,
} from 'react-native';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import { styles } from './style';
import CustomImageBackground from '../../components/CustomImageBackground';
import HeaderText from '../../components/HeaderText';

import { getWallets, getForeignAddress } from '../../redux/user/selectors';
import { setDestination, setForeignAddres } from '../../redux/user/actions';
import Hyperink from '../../components/Hyperlink';

class SendScreen extends Component {
  state = {
    transfer: false,
    onlyNotActive: [],
    search: false,
  };

  componentDidMount() {
    const { GetAccounts } = this.props;
    const notActive = GetAccounts.filter(user => user.active !== true);
    this.setState({ onlyNotActive: notActive });
  }

  chooseAccount = item => {
    const { navigation, actions } = this.props;
    actions.setDestination(item);
    navigation.navigate('SendEth');
  };

  searchAccountByAddress = item => {
    const { actions } = this.props;

    if (item.length === 0) {
      this.setState({ transfer: false, search: false });
    } else if (item.length === 42) {
      this.setState({ transfer: true, search: true });
      const foreignWall = [
        {
          name: item,
          address: item,
        },
      ];
      actions.setForeignAddres(foreignWall);
    } else {
      this.setState({ transfer: false, search: false });
    }
  };

  render() {
    const { navigation, foreign } = this.props;
    const { transfer, search, onlyNotActive } = this.state;
    return (
      <CustomImageBackground>
        <View>
          <Image
            style={styles.logo}
            source={require('../../../assets/logo.png')}
          />
        </View>
        <View style={styles.headerTextContainer}>
          <HeaderText text="Add Recipient" style={styles.header} />
          <Hyperink
            text="Cancel"
            style={styles.link}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={styles.blackInput}>
          <Image
            style={styles.searchIcon}
            source={require('../../../assets/Usermenu/search-grey.png')}
          />
          <TextInput
            style={styles.placeholder}
            placeholder="Search, public address (0x), or ENS"
            placeholderTextColor="rgba(211,211,211, 0.5)"
            onChangeText={text => this.searchAccountByAddress(text)}
          />
          <TouchableOpacity>
            <Image
              style={styles.searchIcon}
              source={require('../../../assets/Usermenu/qr.png')}
            />
          </TouchableOpacity>
        </View>

        {transfer ? (
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => this.setState({ transfer: !transfer })}
            >
              <Text style={styles.buttonText}>Back To All</Text>
            </TouchableOpacity>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Accounts</Text>
            </View>
            <View style={styles.listHolder}>
              {search
                ? foreign.map(users => (
                  <View style={styles.listHolder} key={users.address}>
                    <TouchableOpacity
                      style={styles.listButton}
                      onPress={() => this.chooseAccount(users)}
                    >
                      <Image
                        style={styles.listLogo}
                        source={require('../../../assets/fanbase.jpg')}
                      />
                      <View style={styles.listText}>
                        <Text>{users.name}</Text>
                        <Text style={styles.accountAddress}>
                          {`${users.address.substring(
                            0,
                            6,
                          )}...${users.address.substring(
                            users.address.length - 4,
                          )}`}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))
                : onlyNotActive.map(users => (
                  <View style={styles.listHolder} key={users.id}>
                    <TouchableOpacity
                      style={styles.listButton}
                      onPress={() => this.chooseAccount(users)}
                    >
                      <Image
                        style={styles.listLogo}
                        source={require('../../../assets/fanbase.jpg')}
                      />
                      <View style={styles.listText}>
                        <Text>{users.name}</Text>
                        <Text style={styles.accountAddress}>
                          {`${users.address.substring(
                            0,
                            6,
                          )}...${users.address.substring(
                            users.address.length - 4,
                          )}`}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => this.setState({ transfer: !transfer })}
            >
              <Text style={styles.buttonText}>
                Transfer between my accounts
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </CustomImageBackground>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  GetAccounts: getWallets,
  foreign: getForeignAddress,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setDestination,
      setForeignAddres,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendScreen);
