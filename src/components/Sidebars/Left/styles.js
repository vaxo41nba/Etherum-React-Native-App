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
    height: 60,
    backgroundColor: 'rgba(29,29,31,1)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  arrow: {
    width: 35,
    height: 35,
  },
  arrowButton: {
    overflow: 'hidden',
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#d2d8dd',
    paddingVertical: 20,
  },
  button: {
    width: '45%',
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  sidebarContainer: {
    flexDirection: 'row',
    height: '100%',
    width: 300,
  },
  sidebar: {
    backgroundColor: '#e4e4e9',
    overflow: 'hidden',
    borderTopRightRadius: 15,
    zIndex: 0,
    width: 300,
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    width: 300,
  },
  sidebarSection: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
    height: 40,
    width: 300,
    justifyContent: 'center',
  },
  sidebarSectionText: {
    marginLeft: 10,
    fontSize: 17,
  },
  sidebarLogo: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    width: 200,
    height: 200,
    zIndex: 5,
    resizeMode: 'contain',
    opacity: 0.3,
  },
});
