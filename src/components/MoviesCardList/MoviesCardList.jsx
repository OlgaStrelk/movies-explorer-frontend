import { useState, useEffect } from "react";

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  // let cards;
  // isSorted
  //   ? (cards = CARDS_DATA.filter((card) => card.isSaved === true))
  //   : (cards = CARDS_DATA);
  const moviesArray = movies.map((movie) => (
    <li key={movie.item.id} className="card">
      <MoviesCard data={movie.item} />
    </li>
  ));
  return <ul className="movies-card-list">{moviesArray}</ul>;
}

export default MoviesCardList;
