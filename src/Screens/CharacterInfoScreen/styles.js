import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  image: {
    height: width,
    width: width,
  },
});

export default styles;
