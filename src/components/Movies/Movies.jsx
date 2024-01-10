import { useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";
import { getMovies } from "../../utils/MoviesApi";

import Fuse from 'fuse.js'


function Movies(props) {

  const [movies, setMovies] = useState([]);
  const fuse = new Fuse(movies, {
    keys:['title']
  })
  const uploadMovies = () => {
    getMovies().then((data) => {
      setMovies(data);
    });
  };

  useEffect(() => {
    uploadMovies();
  }, []);
  let isLoading = false;
  // useEffect(() => {
  //   props.handler();
  // }, []);

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
            <MoviesCardList movies={movies} isSorted={false} />
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
