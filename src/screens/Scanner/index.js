import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { styles } from './styles';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

class ScannerScreen extends Component {
  state = {
    // hasPermission: null,
    scanned: false,
  };

  componentDidMount() {
    // const { status } = BarCodeScanner.requestPermissionsAsync();
    // this.setState({ hasPermission: status === 'granted' });
  }

  handleBarCodeScanned = ({ data }) => {
    this.setState({ scanned: true });
    alert(`Bar code  ${data} has been scanned!`); // eslint-disable-line  no-alert,no-undef
  };

  render() {
    const { scanned } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.buttons}>
          <PrimaryButton text="Go Back" onPress={() => navigation.goBack()} />
          {scanned && (
            <PrimaryButton
              text="Scan Again"
              onPress={() => this.setState({ scanned: false })}
            />
          )}
        </View>
      </View>
    );
  }
}

export default ScannerScreen;
