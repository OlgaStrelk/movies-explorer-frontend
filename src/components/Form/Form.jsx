import "./Form.css";

function Input({ data }) {
  return (
	<form className="form">
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

export default Input;
