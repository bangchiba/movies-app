import React from 'react';
import { MoviesProps } from './types';

interface MovieListProps {
  movies: MoviesProps;
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
		<>
			{movies.map((movie, index) => (
				<div key={index}>
					<img src={`${movie.Poster}`} alt='movie' />
					<h1>{movie.Title}</h1>
				</div>
			))}
		</>
	);
}

export default MovieList;