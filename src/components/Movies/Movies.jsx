import { useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";
import { getMovies } from "../../utils/MoviesApi";

import Fuse from "fuse.js";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // const [sortedMovies, setSortedMovies] = useState([]);
  const handleSearchRequest = (inputValue) => {
    setInputValue(inputValue);
  };
  const uploadMovies = () => {
    getMovies().then((data) => {
      setMovies(data);
    });
  };

  useEffect(() => {
    uploadMovies();
  }, []);
  console.log(inputValue);
  const fuse = new Fuse(movies, {
    keys: ["nameRU", "director", "description"],
  });

  const sortedMovies = fuse.search(inputValue);
  console.log(sortedMovies)
  let isLoading = false;
  // useEffect(() => {
  //   props.handler();
  // }, []);

  return (
    <>
      <article className="movies__search-form">
        <SearchForm onChange={handleSearchRequest} />
      </article>
      <article className="movies__content">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList movies={sortedMovies}/>
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
