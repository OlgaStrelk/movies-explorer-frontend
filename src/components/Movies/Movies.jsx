import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies(props) {
  return (
    <>
      <section className="section section_type_search-form">
        <SearchForm />
      </section>
      <section className="section section_type_content">
        <MoviesCardList isSorted={false}/>
      </section>
    </>
  );
}

export default Movies;
