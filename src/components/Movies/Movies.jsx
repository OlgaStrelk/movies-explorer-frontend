import { useEffect } from "react";
import { useLinkClickHandler } from "react-router-dom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import "./Movies.css";

function Movies(props) {
  
  useEffect(() => {
    props.handler();
  }, []);

  return (
    <>
      <article className="movies__search-form">
        <SearchForm />
      </article>
      <article className="movies__content">
        <MoviesCardList isSorted={false} />
      </article>
      <article className="movies__btn">
        <ShowMoreButton />
      </article>
    </>
  );
}

export default Movies;
