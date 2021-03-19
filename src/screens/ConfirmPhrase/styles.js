import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#0563d0',
    borderColor: '#0563d0',
    borderRadius: 5,
    height: 44,
    width: 160,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  headerText: {
    alignSelf: 'center',
    marginLeft: 15,
    fontSize: 20,
  },
  phrase: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 15,
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 10,
  },
  text: {
    fontSize: 17,
  },

  confirmPhraseText: {
    color: 'navy',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 15,
    letterSpacing: 5,
  },
  buttonContainer: {
    marginTop: 15,
  },
});
