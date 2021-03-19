import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  arrow: {
    width: 20,
    height: 20,
  },
  history: {
    alignItems: 'flex-start',
    backgroundColor: 'rgba(29,29,31,1)',
    width: Dimensions.get('screen').width,
    padding: 10,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    position: 'absolute',
    bottom: 0,
  },
  TouchableOpacity: {
    flexDirection: 'row',
    width: '100%',
  },
  historyText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginRight: 6,
  },
  transactionsText: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 12,
    paddingBottom: 10,
  },
  transactionsBlock: {
    marginTop: 25,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  singleText: {
    display: 'flex',
    flexDirection: 'row',
  },
});
