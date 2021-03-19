import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginTop: 15,
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    alignSelf: 'center',
  },
  light: {
    opacity: 0.7,
    fontSize: 15,
    marginVertical: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#a2a1a1',
    marginVertical: 20,
  },
  switch: {
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'center',
  },
  switchText: {
    fontSize: 19,
    marginLeft: Platform.OS === 'ios' ? 10 : 0,
  },
  text: {
    fontSize: 18,
  },
});
