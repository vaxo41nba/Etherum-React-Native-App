import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  balance: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    width: '35%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 27,
    borderWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 17,
  },
  container: {
    width: '80%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: '5%',
  },
  logo: {
    width: '75%',
    height: '75%',
    resizeMode: 'contain',
  },
  logoContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  network: {
    fontSize: 35,
    textAlign: 'center',
    marginVertical: 20,
  },
});
