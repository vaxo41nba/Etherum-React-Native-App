import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
  },
  headerAndIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    alignSelf: 'center',
  },
  links: {
    marginTop: 20,
    fontSize: 20,
  },
  link: {
    marginVertical: 5,
    fontSize: 17,
  },
  LLC: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.85)',
    opacity: 0.6,
    marginVertical: 15,
  },
  logo: {
    height: 150,
    width: 150,
  },
  title: {
    color: 'rgb(77, 77, 77)',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  version: {
    color: 'rgb(77, 77, 77)',
    opacity: 0.7,
    fontSize: 17,
    marginVertical: 15,
  },
});
