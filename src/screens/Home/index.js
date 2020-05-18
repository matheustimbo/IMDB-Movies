/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useContext, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MovieCard from '../../components/MovieCard';
import styles from './styles';
import {AppContext} from '../../providers/AppProvider';
import Carousel from 'react-native-snap-carousel';
const {width, height} = Dimensions.get('window');

const API_KEY = 'ab7e70767dfe42f8f72cd8b9e592a44c';

const Home = props => {
  const context = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const carouselRef = useRef(null);

  const getMoviesGenres = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${
        context.language
      }`,
    );
    const genres = await response.json();
    console.log('GENRES', genres);
    context.setMovieGenreList([...genres.genres]);
  };

  const fetchData = async genresParameter => {
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=${
        context.language
      }&page=${context.upComingPage}`,
    );
    const movies = await response.json();
    let moviesAux = movies.results;
    console.log('genres from context', genresParameter);
    let moviesWithGenres = [];
    moviesAux.forEach(pMovie => {
      let movieGenres = [];
      pMovie.genre_ids.forEach(genreId => {
        try {
          movieGenres.push(
            genresParameter.filter(pGenre => {
              return pGenre.id == genreId;
            })[0].name,
          );
        } catch {
          e => {
            console.log(e);
          };
        }
      });
      pMovie.genresNames = movieGenres;
      moviesWithGenres.push(pMovie);
    });
    context.setUpComingPage(context.upComingPage + 1);

    context.setUpComingMovies([
      ...context.upComingMovies.concat(moviesWithGenres),
    ]);
    setLoading(false);
  };

  useEffect(() => {
    if (context.movieGenreList != []) {
      fetchData(context.movieGenreList);
    }
  }, [context.movieGenreList]);

  useEffect(() => {
    getMoviesGenres();
  }, []);

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Carousel
        ref={carouselRef}
        data={context.upComingMovies}
        renderItem={itemProps => (
          <TouchableOpacity
            onPress={() => {
              context.setDetailedMovie(itemProps.item);
              props.navigation.navigate('Movie');
            }}>
            <MovieCard movie={itemProps} />
          </TouchableOpacity>
        )}
        sliderWidth={width}
        itemWidth={width * 0.6}
      />
    </SafeAreaView>
  );
};

export default Home;
