import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  block: {
    marginTop: 30,
    opacity: 0.5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  input: {
    borderRadius: 7,
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#BBC0C5',
  },
  link: {
    fontSize: 22,
  },
  placeholder: {
    fontSize: 17,
    flex: 1,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 23,
    height: 23,
  },
  text: {
    width: 200,
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 15,
  },
});
