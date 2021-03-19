import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  accountText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  addressText: {
    color: 'white',
    fontSize: 16,
  },
  addressContainer: {
    height: 85,
    backgroundColor: 'rgba(29,29,31,1)',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blueButtonContainer: {
    borderRadius: 50,
    width: 70,
    height: 70,
    borderColor: 'blue',
    borderWidth: 2,
    padding: 2,
    alignSelf: 'center',
  },
  blueButton: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: '#0563d0',
    overflow: 'hidden',
  },
  blueButtonImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
    zIndex: 20,
  },
  container: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
  },
  dropdown: {
    backgroundColor: 'rgba(0, 0, 255, 0.4)',
    borderRadius: 7,
    height: 40,
    justifyContent: 'center',
    flex: 1,
    marginLeft: 20,
  },
  dropdownText: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  menuIconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 70,
    height: 70,
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
  },
});
