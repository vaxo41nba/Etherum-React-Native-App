import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  agreementText: {
    fontSize: 16,
    marginLeft: -10,
    opacity: 0.7,
    flex: 1,
  },
  buttonText: {
    fontSize: 17,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  checkboxTerms: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  grey: {
    borderWidth: 2,
    borderColor: '#b3b3b3',
    backgroundColor: '#d8d8d8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    marginVertical: 25,
  },
  importButton: {
    backgroundColor: '#d8d8d8',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#b3b3b3',
    width: '30%',
    height: 35,
    justifyContent: 'center',
  },
  importButtonText: {
    color: '#6A737D',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  multiline: {
    marginBottom: 10,
  },
  passwords: {
    marginBottom: 20,
  },
  passwordInput: {
    height: 40,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 7,
    borderColor: 'rgb(205, 205, 205)',
    padding: 10,
    marginTop: 7,
    marginBottom: 7,
  },
  phraseInput: {
    height: 60,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'rgb(205, 205, 205)',
    borderRadius: 7,
    padding: 10,
  },
  text: {
    fontSize: 15,
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
  },
  validations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 1,
  },
});
