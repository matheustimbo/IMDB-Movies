import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  banner: {
    width,
    height: height / 2,
  },
});

export default styles;
