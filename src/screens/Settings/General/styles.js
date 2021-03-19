import { StyleSheet, Dimensions, Platform } from 'react-native';

export const styles = StyleSheet.create({
  arrow: {
    width: 20,
    height: 20,
    transform: [{ rotate: '90deg' }],
  },
  currency: {
    fontSize: 18,
    opacity: 0.8,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 50,
    width: Dimensions.get('screen').width - 70,
    borderWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: 15,
  },
  date: {
    fontSize: 17,
    opacity: 0.6,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    alignSelf: 'center',
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#a2a1a1',
    marginVertical: 20,
  },
  menu: {
    marginVertical: 65,
  },
  menuItemsContainer: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width - 70,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginLeft: 1,
  },
  switch: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  text: {
    fontSize: 19,
  },
  switchText: {
    fontSize: 19,
    marginLeft: Platform.OS === 'ios' ? 10 : 0,
  },
});
