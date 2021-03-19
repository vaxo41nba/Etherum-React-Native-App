import React, { Component } from 'react';
import {
  View, Text, Modal, Image,
} from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import {
  getIsNotificationError,
  getNotificationDisplay,
  getNotificationMessage,
} from '../../redux/notifications/selectors';

import { styles } from './styles';

class Snackbar extends Component {
  render() {
    const { message, isError, isVisible } = this.props;

    return (
      <Modal animationType="slide" transparent visible={isVisible}>
        <View
          style={[
            styles.modalView,
            { backgroundColor: isError ? '#f94c56' : '#0563d0' },
          ]}
        >
          <Image
            style={styles.icon}
            source={
              isError
                ? require('../../../assets/exclamation-mark.png')
                : require('../../../assets/check-mark.png')
            }
          />
          <Text style={styles.modalText}>{message}</Text>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  message: getNotificationMessage,
  isError: getIsNotificationError,
  isVisible: getNotificationDisplay,
});

export default connect(mapStateToProps, null)(Snackbar);
