import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Form.css";
// import { required } from "joi";

function Form({ data, onChange, onSubmit, renderError }) {
  // const methods = useForm();
  // const {
  //   handleSubmit,
  //   setError,
  //   register,
  //   formState: { errors },
  // } = methods;

  const [error, setError] = useState({});

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  const validateSearch = (e) => {
    let error;
    const formElement = e.target;
    const inputElement = formElement.querySelector("input");
    if (!inputElement.value) {
      error = {
        name: inputElement.name,
        message: "Нужно ввести ключевое слово",
      };
      return error;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    renderError(validateSearch(e));
    onSubmit();
  };

  return (
    <form
      noValidate
      className="form"
      onSubmit={handleSubmit}
      // onSubmit={handleSubmit(handleForm, handleError)}
    >
      <div className="form__icon"></div>
      <input
        className="form__input"
        name={data.input.name}
        placeholder={data.input.placeholder}
        // required={data.input.required}
        onChange={handleInputChange}
        // {...register("moviesQuery", { required: true })}
      />
      <button className="form__btn" type={data.btn.type}>
        <img src={data.btn.src} alt={data.btn.alt} />
      </button>
    </form>
  );
}

export default Form;
