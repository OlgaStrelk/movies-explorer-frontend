import { useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  let isLoading = false;
  useEffect(() => {
    props.handler();
  }, []);

  return (
    <>
      <article className="movies__search-form">
        <SearchForm />
      </article>
      <article className="movies__content">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList isSorted={false} />
            <div className="movies__btn">
              <ShowMoreButton />
            </div>
          </>
        )}
      </article>
    </>
  );
}

export default Movies;
