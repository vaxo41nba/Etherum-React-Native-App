import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 80,
  },
  transactionFeeText: {
    display: 'flex',
    flexDirection: 'column',
  },
  transactionFeeTitle: {
    fontWeight: 'bold',
    color: '#5D5D5D',
    fontSize: 16,
  },
  transactionFeeSubText: {
    fontSize: 10,
    color: '#4d4d4d',
    marginTop: 5,
  },
  pressedButton: {
    backgroundColor: '#3099f2',
    color: 'white',
    width: 80,
    paddingLeft: 5,
  },
});
