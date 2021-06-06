import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 35,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 10,
    marginTop: 5,
    height: 120,
    padding: 10,
    backgroundColor: '#c7f9cc',
  },
  columun: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  columuntext: {
    marginTop: 20,
  },
  row: {
    flex: 1,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttontext: {
    flex: 1,
    textAlignVertical: 'center',
  },
  header: {
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 17,
    width: 90,
    backgroundColor: '#00ff44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttoncontainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default styles;
