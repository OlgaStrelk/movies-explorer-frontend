import { useState, useEffect } from "react";

import "./MoviesCardList.css";
import { CARDS_DATA } from "../../utils/cardsData";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, isSorted }) {


  // let cards;
  // isSorted
  //   ? (cards = CARDS_DATA.filter((card) => card.isSaved === true))
  //   : (cards = CARDS_DATA);
  const moviesArray = movies.map((movie) => (
    <MoviesCard key={movie.id} data={movie} isSorted={isSorted} />
  ));
  return <ul className="movies-card-list">{moviesArray}</ul>;
}

export default MoviesCardList;
