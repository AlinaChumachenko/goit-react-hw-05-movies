import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import Form from 'components/Form/Form';
import FilmsList from 'components/FilmsList/FilmsList';
import { getMovieByQuery } from 'serveses/getMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await getMovieByQuery(currentQuery);
        setMovies(movieByQuery);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <div className={css.box}>
      <Form setSearchParams={setSearchParams} />
      {movies.length > 0 && <FilmsList movies={movies} />}
    </div>
  );
};

export default Movies;
