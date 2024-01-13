import { useForm } from "react-hook-form";

import "./Form.css";
// import { required } from "joi";

function Form({ data, onChange, onSubmit }) {
  const methods = useForm();
  const {
    handleSubmit,
    setError,
    register,
    formState: { errors },
  } = methods;

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  const handleForm = (data, e) => {
    e.preventDefault();
    onSubmit();
  };

  // const handleError = (errors, e) => {
  //   setError("moviesQuery", {
  //     type: "custom",
  //     message: "Нужно ввести ключевое слово",
  //   });
  // };

  return (
    <>
      <form
        noValidate
        className="form"
        onSubmit={handleSubmit(handleForm)}

        // onSubmit={handleSubmit(handleForm, handleError)}
      >
        <div className="form__icon"></div>
        <input
          className="form__input"
          placeholder={data.input.placeholder}
          // required={data.input.required}
          onChange={handleInputChange}
          // {...register("moviesQuery", { required: true })}
        />
        <button className="form__btn" type={data.btn.type}>
          <img src={data.btn.src} alt={data.btn.alt} />
        </button>
      </form>
      <p>{errors.moviesQuery?.message}</p>
    </>
  );
}

export default Form;
