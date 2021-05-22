/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { MoviesProps } from './types';

interface MovieListProps {
  movies: MoviesProps;
	onClickPoster: (index: number) => void;
}

const MovieList = ({ movies, onClickPoster }: MovieListProps) => {
	
  return (
    <>
      {movies.map((movie, index) => (
        <div key={index}>
          <img
            src={`${movie.Poster}`}
            alt="movie"
            className="hover:opacity-75 transition ease-in-out duration-150"
						onClick={() => onClickPoster(index)}
          />
          <div className="mt-2">
            <Link
              to={`/detail/${movie.imdbID}`}
              className="text-lg mt-2 hover:text-gray-300"
            >
              {movie.Title}
            </Link>
            <div className="flex items-center text-gray-400 text-sm mt-1">
              <span>{movie.Year}</span>
              <span className="mx-2">|</span>
              <span>{movie.Type}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
