import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  agreementHolder: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  agreementText: {
    fontSize: 16,
    marginLeft: -10,
    opacity: 0.7,
    flex: 1,
  },
  button: {
    backgroundColor: '#0563d0',
    borderColor: '#0563d0',
    borderRadius: 5,
    height: 44,
    width: 160,
  },
  buttonText: {
    color: 'white',
  },
  confirmPasswordWrapper: {
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  formWrapper: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subText: {
    fontSize: 14,
  },
  text: {
    fontSize: 14,
    color: '#5b5b5b',
    marginTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  validationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
