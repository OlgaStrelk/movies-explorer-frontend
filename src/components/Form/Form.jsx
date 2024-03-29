import { useForm } from "react-hook-form";

import "./Form.css";

function Form({ data }) {
  const methods = useForm();
  const { handleSubmit } = methods;


  
  const handleForm = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
  };
  return (
    <form className="form" onSubmit={handleSubmit(handleForm)}>
      <div className="form__icon"></div>
      <input
        className="form__input"
        placeholder={data.input.placeholder}
        required={data.input.required}
      />
      <button className="form__btn" type={data.btn.type}>
        <img src={data.btn.src} alt={data.btn.alt} />
      </button>
    </form>
  );
}

export default Form;
