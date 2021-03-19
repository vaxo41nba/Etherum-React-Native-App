import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  headerText: {
    alignSelf: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  mainText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  optionContainer: {
    backgroundColor: 'black',
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
  },
  optionCircle: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 50,
    alignSelf: 'center',
    width: 100,
    height: 100,
    marginVertical: 25,
    overflow: 'hidden',
  },
  optionSubText: {
    color: 'white',
    paddingHorizontal: 15,
    marginVertical: 15,
    textAlign: 'justify',
  },
  optionButton: {
    height: 45,
    width: 180,
    borderRadius: 25,
    backgroundColor: 'white',
    alignSelf: 'center',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButtonText: {
    fontSize: 15,
  },
  subText: {
    color: '#808080',
    marginBottom: 20,
  },
});
