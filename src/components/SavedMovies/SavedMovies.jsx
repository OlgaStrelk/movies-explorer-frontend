import MoviesCardList from '../MoviesCardList/MoviesCardList';
import "./SavedMovies.css";

function SavedMovies(props) {

  return (
    <>
    <MoviesCardList isSorted={true} />
    </>
  );
}

export default SavedMovies;