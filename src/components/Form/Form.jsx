import "./Form.css";

function Form({ data }) {
  const handleForm = (e) => {
    e.PreventDefault();
    console.log("You clicked submit.");
  };
  return (
    <form className="form" onSubmit={(e) => handleForm()}>
      <div className="form__icon"></div>
      <input
        className="form__input"
        placeholder={data.input.placeholder}
      ></input>
      <button className="form__btn" type={data.btn.type}>
        <img src={data.btn.src} alt={data.btn.alt} />
      </button>
    </form>
  );
}

export default Form;
