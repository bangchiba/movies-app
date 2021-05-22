import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { List } from '../../uikit';
import { MovieDetailProps } from './types';

const MovieDetail = () => {
  const { imdbID } = useParams<{ imdbID: string }>();

  const [movie, setMovie] = useState<MovieDetailProps>({} as MovieDetailProps);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMovieDetail = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=3207ad8&i=${imdbID}`
      );
      setMovie(data);
    } catch (error) {
      console.log('error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div className="movie-info border-b border-gray-800">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
        <div className="flex-none">
          <img src={`${movie.Poster}`} alt="poster" className="w-64 lg:w-96" />
        </div>
        <div className="md:ml-24">
          <h2 className="text-4xl mt-4 md:mt-0 font-semibold">{movie.Title}</h2>
          <div className="flex flex-wrap items-center text-gray-400 text-sm">
            <svg
              className="fill-current text-orange-500 w-4"
              viewBox="0 0 24 24"
            >
              <g data-name="Layer 2">
                <path
                  d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                  data-name="star"
                />
              </g>
            </svg>
            <span className="ml-1">{movie.imdbVotes}</span>
            <span className="mx-2">|</span>
            <span>{movie.Released}</span>
            <span className="mx-2">|</span>
            <span>{movie.Genre}</span>
          </div>

          <p className="text-gray-300 mt-8">{movie.Plot}</p>

          <List label="Actors" value={movie.Actors} />
          <List label="Writer" value={movie.Writer} />
          <List label="Director" value={movie.Director} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
