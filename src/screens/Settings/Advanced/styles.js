import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginTop: 15,
    marginBottom: 25,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#bbc0c5',
    borderWidth: 2,
    borderRadius: 7,
    paddingHorizontal: 15,
    fontSize: 17,
  },
  light: {
    fontSize: 17,
    opacity: 0.6,
    marginVertical: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#a2a1a1',
    marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    alignSelf: 'center',
  },
  modalView: {
    paddingHorizontal: 30,
    paddingVertical: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
  },
  save: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  saveButton: {
    marginTop: 7,
    marginBottom: 20,
    backgroundColor: '#037dd6',
    borderRadius: 7,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    width: 80,
    height: 35,
  },
  switch: {
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'center',
  },
  text: {
    fontSize: 19,
  },
  switchText: {
    fontSize: 19,
    marginLeft: Platform.OS === 'ios' ? 10 : 0,
  },
});
