import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  address: {
    fontSize: 18,
    padding: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 19,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    alignSelf: 'center',
  },
  qr: {
    alignItems: 'center',
    marginVertical: 40,
  },
});
