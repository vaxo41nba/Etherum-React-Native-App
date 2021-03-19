import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#037dd6',
    borderWidth: 0,
  },
  buttons: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  button: {
    width: '40%',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: '#bbc0c5',
    borderRadius: 7,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 17,
    marginLeft: -1,
    marginTop: 7,
    marginBottom: 15,
  },
  text: {
    opacity: 0.7,
    fontSize: 17,
  },
});
