import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  touchable: {borderBottomWidth: 1, borderBottomColor: 'black', marginStart: 1},
  characterInfoContainer: {flexDirection: 'column'},
  headerContainer: {
    height: 40,
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#97ce4c',
  },
  header: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  flatList: {
    marginBottom: 100,
  },
  activitIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
