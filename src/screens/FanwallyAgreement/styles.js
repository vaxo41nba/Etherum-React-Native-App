import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  button: {
    width: '30%',
    height: 40,
    borderRadius: 7,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  container: {
  },
  grey: {
    borderWidth: 2,
    borderColor: '#b3b3b3',
    backgroundColor: '#d8d8d8',
  },
  h1: {
    marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    marginVertical: 20,
  },
  text: {
    fontSize: 15,
  },
});
