import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttons: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
  },
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    width: '90%',
    height: 100,
  },
  header: {
    textAlign: 'center',
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
