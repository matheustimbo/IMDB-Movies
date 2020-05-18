import React, {useContext} from 'react';
import {AppContext} from '../../providers/AppProvider';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const Movie = props => {
  let context = useContext(AppContext);
  console.log('movie', context.detailedMovie);
  return (
    <View>
      <ImageBackground
        style={styles.banner}
        source={{uri: IMG_URL + context.detailedMovie.poster_path}}>
        <SafeAreaView>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Home');
            }}>
            <Text style={{color: 'white'}}>Voltar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Movie;
