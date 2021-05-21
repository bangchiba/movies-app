import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import { MoviesProps } from './types';
// import {movieList} from '../data';

const Movies = () => {
  const [moviesList, setMoviesList] = useState<MoviesProps>([] as MoviesProps);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMovies = async () => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const { data } = await axios.get('http://www.omdbapi.com/?apikey=3207ad8&s=inception');
      if (data.Search) {
        setMoviesList(data.Search);
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
    // setMoviesList(movieList);
  }, []);
  
  if (isLoading) return <h1>Loading...</h1>;

  return <MovieList movies={moviesList}/>
  
}

export default Movies;