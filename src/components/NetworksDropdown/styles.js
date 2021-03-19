import Constants from 'expo-constants';
import { Dimensions, Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginVertical: 10,
  },
  menuItemsContainer: {
    backgroundColor: '#1d1d1f',
    width: Dimensions.get('screen').width * 0.5,
    borderRadius: 25,
    paddingVertical: 10,
    marginLeft: -1,
    position: 'absolute',
    top: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
  },
  menu: {
    height: 50,
    width: Dimensions.get('screen').width * 0.5,
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
  },
  menuItem: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  menuText: {
    color: 'lightgrey',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  networks: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
});
