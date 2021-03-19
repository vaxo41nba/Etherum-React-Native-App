import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
} from 'react-native';
import fetch from 'node-fetch';
import * as DocumentPicker from 'expo-document-picker';
import Menu from 'react-native-material-menu';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { styles } from './styles';
import CustomImageBackground from '../../../components/CustomImageBackground';
import Hyperlink from '../../../components/Hyperlink';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import SecondaryButton from '../../../components/Buttons/SecondaryButton';
import SelectNetworkButton from '../../../components/SelectNetworkButton';
import NetworkMenuItem from '../../../components/NetworkMenuItem';
import { getWallets, getSelectedNetwork } from '../../../redux/user/selectors';
import {
  getWalletBalance,
  importKey,
  importTextJSON,
} from '../../../redux/user/actions';
import { showNotification } from '../../../redux/notifications/actions';
import ImportNameModal from '../../../components/ImportNameModal';

const types = [
  { label: 'Private Key' },
  { label: 'JSON File' },
  { label: 'Mnemonic' },
];
class Import extends Component {
  state = {
    selectType: 'Private Key',
    passwordOrKey: '',
    mnemonic: '',
    fileName: '',
    modalVisible: false,
  };

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

  handleSelect = type => {
    this.setState({ selectType: type });
    this.hideMenu();
  };

  toggleModal = () => {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: !modalVisible });
  };

  uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

  importFunc = async name => {
    const { passwordOrKey, selectType, mnemonic } = this.state;
    const { actions, users } = this.props;
    const findName = users.filter(us => us.name === name);
    const id = this.uuidv4();

    if (
      selectType === 'Mnemonic'
      || (selectType === 'JSON File' && findName.length === 0)
    ) {
      actions.importTextJSON(mnemonic, passwordOrKey, name, id);
    } else if (passwordOrKey && findName.length === 0) {
      actions.importKey(passwordOrKey, name, id);
    } else {
      actions.showNotification({
        message: 'Account already exsists',
        isError: true,
      });
    }
  };

  chooseFile = () => {
    DocumentPicker.getDocumentAsync({ type: 'application/json' })
      .then(res => {
        const file = res.uri;
        const fileName = res.name;
        fetch(file)
          .then(response => response.json())
          .then(out => this.setState({ mnemonic: out.mnemonic, fileName }))
          .catch(err => err);
      })
      .catch(err => err);
  };

  render() {
    const { selectType, modalVisible, fileName } = this.state;
    const { cancel } = this.props;
    return (
      <CustomImageBackground>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView>
            {/* Text with white background */}
            <Text style={styles.text}>
              Imported accounts are not opened with your Wally Phrase or your
              Alternate Wally Phrase. Need help? Learn more
              {' '}
              <Hyperlink text="here" />
            </Text>
            {/* Modal select */}
            <View style={styles.modalSelect}>
              <Text style={styles.selectType}>Select Type</Text>
              {/* Menu */}
              <View style={styles.menu}>
                <Menu
                  style={styles.menuItemsContainer}
                  ref={this.setMenuRef}
                  button={(
                    <SelectNetworkButton
                      onPress={this.showMenu}
                      selected={selectType}
                      textStyle={{ flex: 1 }}
                    />
                  )}
                >
                  {types.map(type => (
                    <NetworkMenuItem
                      key={type.label}
                      onPress={() => this.handleSelect(type.label)}
                      style={styles.menuItem}
                      label={type.label}
                      selected={selectType === type.label}
                      textStyle={{ color: 'black' }}
                    />
                  ))}
                </Menu>
              </View>
            </View>
            {/* JSON */}
            {(selectType === 'JSON File' || selectType === 'Mnemonic') && (
              <View style={styles.jsonUpload}>
                <Text>Wally can be used by a variety of applications!</Text>
                <Hyperlink text="Need help? Learn more here" />
                {selectType === 'JSON File' ? (
                  <>
                    <TouchableOpacity
                      style={styles.chooseFileBtn}
                      onPress={this.chooseFile}
                    >
                      <Text>Choose File</Text>
                    </TouchableOpacity>
                    <Text style={styles.fileName}>{fileName}</Text>
                  </>
                ) : (
                  <TextInput
                    style={[styles.input, { borderWidth: 5 }]}
                    placeholder="Mnemonic"
                    onChangeText={text => this.setState({ mnemonic: text })}
                  />
                )}
              </View>
            )}
            {/* Input */}
            <View>
              <Text style={{ fontSize: 17 }}>
                {selectType === 'Private Key'
                  ? 'Paste your private key string here:'
                  : null}
              </Text>
              <TextInput
                onChangeText={text => this.setState({
                  passwordOrKey: text,
                })}
                secureTextEntry
                style={styles.input}
                placeholder={
                  selectType === 'Private Key' ? null : 'Enter Password'
                }
              />
            </View>
            {/* Buttons */}
            <View style={styles.button}>
              <PrimaryButton text="Import" onPress={this.toggleModal} />
              <SecondaryButton text="Cancel" onPress={() => cancel()} />
            </View>
            {/* Import Modal */}
            <Modal animationType="fade" transparent visible={modalVisible}>
              <View style={styles.modalView}>
                <ImportNameModal
                  toggle={this.toggleModal}
                  importFunc={this.importFunc}
                  cancel={cancel}
                />
              </View>
            </Modal>
          </KeyboardAvoidingView>
        </ScrollView>
      </CustomImageBackground>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getWalletBalance,
      importKey,
      importTextJSON,
      showNotification,
    },
    dispatch,
  ),
});
const mapStateToProps = createStructuredSelector({
  users: getWallets,
  network: getSelectedNetwork,
});
export default connect(mapStateToProps, mapDispatchToProps)(Import);
