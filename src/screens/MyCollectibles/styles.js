import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  author: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    alignSelf: 'center',
  },
  player: {
    borderWidth: 1,
    borderRadius: 25,
    width: '100%',
    marginVertical: 10,
    backgroundColor: 'white',
    paddingVertical: 15,
  },
  playlistButton: {
    width: 30,
    height: 30,
  },
  playlist: {
    borderWidth: 1,
    borderColor: '#037dd6',
    marginHorizontal: 15,
    marginVertical: 15,
    padding: 10,
    height: 300,
  },
  playlistItemText: {
    marginVertical: 10,
    paddingHorizontal: 5,
    fontSize: 20,
  },
  slider: {
    marginVertical: 20,
    flex: 1,
  },
  seekbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 21,
  },
});
