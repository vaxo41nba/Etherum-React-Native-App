import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  blackInput: {
    borderRadius: 7,
    backgroundColor: '#1f1f20',
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  buttonText: {
    color: '#037DD6',
  },
  container: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'lightgray',
    marginTop: 20,
  },
  headerContainer: {
    backgroundColor: 'white',
    height: 50,
    marginTop: 10,
    borderColor: 'lightgray',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  header: {
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
  },
  logo: {
    height: 40,
    width: 40,
  },
  link: {
    alignSelf: 'center',
    fontSize: 17,
  },
  listHolder: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'flex-start',
    display: 'flex',
  },
  listLogo: {
    height: 30,
    width: 30,
    borderRadius: 25,
    marginRight: 10,
    resizeMode: 'center',
    backgroundColor: '#0563d0',
  },
  listButton: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  placeholder: {
    fontSize: 17,
    color: 'lightgrey',
    flex: 1,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 27,
    height: 27,
  },
  listText: {
    display: 'flex',
    flexDirection: 'column',
  },
  accountAddress: {
    paddingTop: 10,
    color: 'gray',
  },
});
