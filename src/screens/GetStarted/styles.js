import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 7,
  },
  block: {
    borderWidth: 0.5,
    borderRadius: 7,
    marginVertical: 20,
    padding: 5,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#037dd6',
    borderWidth: 0,
    paddingHorizontal: 25,
    width: '60%',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
  },
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  h1: {
    textAlign: 'center',
    marginTop: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  opacity: {
    color: 'grey',
    marginVertical: 7,
  },
});
