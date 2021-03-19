import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  chooseFileBtn: {
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 5,
    marginTop: 15,
  },
  dropdown: {
    backgroundColor: 'rgba(0, 0, 255, 0.4)',
    borderRadius: 7,
    height: 40,
    justifyContent: 'center',
    flex: 1,
  },
  dropdownText: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
  fileName: {
    fontSize: 17,
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 7,
    fontSize: 17,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#d2d8dd',
  },
  jsonUpload: {
    alignItems: 'center',
    marginVertical: 15,
  },
  menu: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  menuItemsContainer: {
    width: Dimensions.get('screen').width - 60,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: -1,
  },
  menuItem: {
    paddingVertical: 10,
  },
  modalSelect: {
    marginVertical: 50,
  },
  modalView: {
    paddingHorizontal: 30,
    paddingVertical: '25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
  },
  selectType: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#655d5d',
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 20,
    textAlign: 'justify',
  },
});
