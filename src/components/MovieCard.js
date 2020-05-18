import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {AppContext} from '../providers/AppProvider';

const {width, height} = Dimensions.get('window');
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieCard = props => {
  let movie = props.movie.item;
  return (
    <View>
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.6,
          shadowRadius: 8.3,
          marginTop: 10,
          elevation: 13,
        }}>
        <Image
          style={{
            width: width * 0.6,
            height: height * 0.4,
            borderRadius: 30,
          }}
          source={{uri: IMG_URL + movie.poster_path}}
        />
      </View>

      <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 20}}>
        {movie.title}
      </Text>
      <Text style={{color: '#8A8C8E', fontSize: 16}}>
        {movie.genresNames.map((genre, index) => {
          return genre + (index == movie.genresNames.length - 1 ? '' : ', ');
        })}
      </Text>
    </View>
  );
};

export default MovieCard;
