import MoviesCardList from '../MoviesCardList/MoviesCardList';
import "./SavedMovies.css";
import { useEffect } from 'react';

function SavedMovies(props) {
  useEffect(() => {
    props.handler();
  }, []);
  
  return (
    <>
    <MoviesCardList isSorted={true} />
    </>
  );
}

export default SavedMovies;