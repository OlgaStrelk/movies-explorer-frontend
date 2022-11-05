import "./SearchForm.css";
import Form from "../Form/Form";
import SearchBtnIcon from "../../images/search-btn__icon.svg";
import Tumbler from "../Tumbler/Tumbler";

function SearchForm() {
  const TUMBLER_DATA = {
    title: "Короткометражки",
  };
  const FORM_DATA = {
    input: {
      placeholder: "Фильм",
    },
    btn: {
      type: "submit",
      src: SearchBtnIcon,
      alt: "Лупа",
    },
  };

  return (
    <div className="search-form">
      <div className="search-form__container">
        <Form data={FORM_DATA} />
        <Tumbler data={TUMBLER_DATA} />
      </div>
    </div>
  );
}

export default SearchForm;
