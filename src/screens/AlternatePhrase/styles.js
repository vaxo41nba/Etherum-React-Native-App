import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  btnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  nextBtn: {
    backgroundColor: '#0563d0',
    borderColor: '#0563d0',
    borderRadius: 5,
    height: 44,
    width: 160,
  },
  nextText: {
    color: 'white',
  },
  remindLaterBtn: {
    backgroundColor: '#ffffff',
    borderColor: '#0563d0',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    height: 44,
    width: 160,
    justifyContent: 'center',
  },
  remindLaterText: {
    color: '#0563d0',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    marginTop: 15,
  },
});
