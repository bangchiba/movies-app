import { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getSearch } from '../../../store/searchDuck';
import { Store } from '../../../store/type';
import MovieList from './MovieList';
import { Modal } from '../../uikit';
import { MoviesProps } from './types';

const Movies = (props: any) => {
  const { search } = props;
  const [moviesList, setMoviesList] = useState<MoviesProps>([] as MoviesProps);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [noData, setNodata] = useState(false);
  const [errorMessage, setErrorMessage] = useState<String>('');
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [indexModal, setIndexModal] = useState<number>(0);
  const [oldValue, setOldValue] = useState<String>(search);

  const onClickPoster = (index: number) => {
		console.log('oke', index);
    setIsOpenModal(true);
    setIndexModal(index);
	}

  const getMovies = async () => {
    if (search === '') return;
    setIsLoading(true);
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=faf7e5bb&s=${search}&page=${page}`
      );
      
      if (data.Search) {
        setMoviesList(prevState => [...prevState, ...data.Search]);
        setPage(page + 1);
      } else {
        setNodata(true);
      }

      if (data.Response === 'False' && moviesList.length === 0) {
        setMoviesList([]);
        setErrorMessage(data.Error);
      }
  
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
      setOldValue(search);
    }
  };
  
  const loadmore = () => {
    setTimeout(() => {
      getMovies();
    }, 1500);
  };

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if(!noData) {
        loadmore();
      }
    }
  }
  
  useEffect(() => {
    getMovies();
    if (oldValue != search) {
      setMoviesList([]);
    }
  }, [search]);


  return (
    <>
      <Modal isOpen={isOpenModal} onCloseModal={() => setIsOpenModal(false)}>
        <img src={`${moviesList[indexModal]?.Poster}`} alt="movie" className="w-full mt-5"/>
      </Modal>
      <div className="movies" data-testid="movie">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <MovieList movies={moviesList} onClickPoster={onClickPoster} />
              {isLoading && (<h1>Loading...</h1>)}
              {errorMessage && (<h1>{errorMessage}</h1>)}
              {moviesList.length === 0 && <h1>Search Image by Name</h1>}
          </div>
        </div>
    </>
  );
};

const mapStateToProps = (state: Store) => ({
  search: getSearch(state.search)
});

export default connect(mapStateToProps, null)(Movies);
