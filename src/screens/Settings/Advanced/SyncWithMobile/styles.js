import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  buttons: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#d2d8dd',
    paddingVertical: 20,
  },
  button: {
    width: '45%',
  },
  enterPassword: {
    fontSize: 18,
    opacity: 0.8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    alignSelf: 'center',
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginRight: 15,
  },
  input: {
    width: '100%',
    height: 40,
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#dedede',
  },
  note: {
    backgroundColor: '#fdf4f4',
    flexDirection: 'row',
    padding: 10,
    marginVertical: 20,
  },
  noteText: {
    fontSize: 18,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'justify',
  },
});
