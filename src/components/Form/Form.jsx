import { useForm } from "react-hook-form";

import "./Form.css";

function Form({ data, onChange }) {
  const methods = useForm();
  const { handleSubmit } = methods;

const handleInputChange =(e)=> {
  onChange(e.target.value)
}

  const handleForm = (form, e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form className="form" onSubmit={handleSubmit(handleForm)}>
      <div className="form__icon"></div>
      <input
        className="form__input"
        placeholder={data.input.placeholder}
        required={data.input.required}
        onChange={handleInputChange}
        // value={value}
      />
      <button className="form__btn" type={data.btn.type}>
        <img src={data.btn.src} alt={data.btn.alt} />
      </button>
    </form>
  );
}

export default Form;
