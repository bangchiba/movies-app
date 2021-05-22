import { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getSearch } from '../../../store/searchDuck';
import { Store } from '../../../store/type';
import MovieList from './MovieList';
import { MoviesProps } from './types';

const Movies = (props: any) => {
  const { search } = props;
  const [moviesList, setMoviesList] = useState<MoviesProps>([] as MoviesProps);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMovies = async () => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=3207ad8&s=${search}`
      );
      if (data.Search) {
        setMoviesList(data.Search);
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [search]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
      <div className="popular-movies">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <MovieList movies={moviesList} />
        </div>
      </div>
  );
};

const mapStateToProps = (state: Store) => ({
  search: getSearch(state.search)
});

export default connect(mapStateToProps, null)(Movies);
