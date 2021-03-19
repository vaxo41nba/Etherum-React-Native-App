import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  arrow: {
    width: 35,
    height: 35,
    transform: [{ rotate: '180 deg' }],
  },
  arrowButton: {
    overflow: 'hidden',
  },
  line: {
    borderBottomWidth: 0.5,
  },
  sidebarContainer: {
    position: 'absolute',
    right: 0,
    top: Constants.statusBarHeight,
    flexDirection: 'row-reverse',
    height: '100%',
    width: 300,
  },
  sidebar: {
    backgroundColor: '#e4e4e9',
    height: Dimensions.get('screen').height,
    width: 300,
    overflow: 'hidden',
    borderTopLeftRadius: 15,
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    width: 300,
  },
});
