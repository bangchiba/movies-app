import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import { MoviesProps } from './types';

const Movies = () => {
  const [moviesList, setMoviesList] = useState<MoviesProps>([] as MoviesProps);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMovies = async () => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const { data } = await axios.get('http://www.omdbapi.com/?apikey=3207ad8&s=batman');
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
  }, []);
  
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="container mx-auto px-4 pt-16">
      <div className="popular-movies">
        <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">Popular Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <MovieList movies={moviesList}/>
        </div>
      </div>
    </div>
  )
  
}

export default Movies;