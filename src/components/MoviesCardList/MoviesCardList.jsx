import "./MoviesCardList.css";
import { CARDS_DATA } from "../../utils/cardsData";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const moviesArray = CARDS_DATA.map((movie) => <MoviesCard  key={movie.id} data={movie} />);
  return <div className="movies-card-list">{moviesArray}</div>;
}

export default MoviesCardList;
