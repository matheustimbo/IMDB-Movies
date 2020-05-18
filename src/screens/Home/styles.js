import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  movieCard: {
    width: width * 0.6,
    height: height / 2,
  },
});

export default styles;
