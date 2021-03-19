import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: 'white',
    display: 'flex',
    marginTop: 50,
  },
  chartSubText: {
    fontSize: 10,
    color: '#313A5E',
    paddingBottom: 10,
  },
  chartLiveGasText: {
    color: '#313A5E',
    fontSize: 12,
    marginLeft: 15,
  },
  inputStyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#9b9b9b',
    borderRadius: 4,
    width: 160,
    paddingLeft: 5,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextSubText: {
    width: '100%',
    borderBottomColor: '#d2d8dd',
    borderBottomWidth: 1,
    marginTop: 10,
    paddingBottom: 10,
    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
  },
  transactionFeeAndTime: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  transactionFeeSubText: {
    fontSize: 12,
    color: '#313a5e',
  },
  transactionFeeText: {
    fontSize: 16,
    color: '#313a5e',
    paddingTop: 10,
  },
  sumUpFee: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
  },
  sumUpFeeText: {
    fontSize: 16,
  },
  newTotal: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  totalToUsd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
  },
});
