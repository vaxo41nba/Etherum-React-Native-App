import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  address: {
    fontSize: 18,
    padding: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 7,
    borderWidth: 2,
    padding: 15,
    height: 50,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  buttoText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  cancel: {
    backgroundColor: '#dddddd',
    borderColor: '#b3b3b3',
  },
  confirm: {
    backgroundColor: 'white',
    borderColor: '#b0d7f2',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
  },
  container: {
    justifyContent: 'space-evenly',
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
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#9a9a9a',
    marginBottom: 15,
    height: 50,
    padding: 10,
    fontSize: 20,
  },
  smallText: {
    color: 'grey',
    marginVertical: 5,
  },
  warning: {
    padding: 10,
    backgroundColor: 'white',
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'justify',
  },
});
