import React, {useState} from 'react';

const AppContext = React.createContext();

const AppProvider = props => {
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [upComingPage, setUpComingPage] = useState(1);
  const [movieGenreList, setMovieGenreList] = useState([]);
  const [language, setLanguage] = useState('en-US');
  const [detailedMovie, setDetailedMovie] = useState({});
  return (
    <AppContext.Provider
      value={{
        upComingMovies,
        setUpComingMovies,
        upComingPage,
        setUpComingPage,
        movieGenreList,
        setMovieGenreList,
        language,
        setLanguage,
        detailedMovie,
        setDetailedMovie,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};
