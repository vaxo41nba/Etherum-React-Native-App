import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  blackInput: {
    borderRadius: 7,
    backgroundColor: '#1f1f20',
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  block: {
    marginVertical: 50,
  },
  buttons: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#d2d8dd',
    paddingVertical: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bbc0c5',
    borderRadius: 7,
    fontSize: 17,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  light: {
    fontSize: 15,
    opacity: 0.7,
    marginBottom: 10,
  },
  placeholder: {
    fontSize: 17,
    color: 'lightgrey',
    flex: 1,
    paddingHorizontal: 10,
  },
  primaryButton: {
    backgroundColor: '#037dd6',
    width: '45%',
  },
  secondaryButton: {
    width: '45%',
  },
  searchIcon: {
    width: 27,
    height: 27,
  },
});
