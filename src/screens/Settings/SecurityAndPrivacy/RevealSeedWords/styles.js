import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    fontSize: 17,
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
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#a2a1a1',
    marginVertical: 20,
  },
  note: {
    backgroundColor: '#fdf4f4',
    flexDirection: 'row',
    padding: 10,
    marginVertical: 25,
  },
  noteText: {
    fontSize: 16,
    marginTop: 10,
  },

  text: {
    fontSize: 17,
    textAlign: 'justify',
  },
});
