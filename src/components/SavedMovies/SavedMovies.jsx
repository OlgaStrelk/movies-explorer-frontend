import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import { useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  let isLoading = false;
  useEffect(() => {
    props.handler();
  }, []);

  return (
    <main>
      <article className="movies__search-form">
        <SearchForm />
      </article>{" "}
      <article className="movies__content">
        {isLoading ? <Preloader /> : <MoviesCardList isSorted={true} />}
      </article>
    </main>
  );
}

export default SavedMovies;
