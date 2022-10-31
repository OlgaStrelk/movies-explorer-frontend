import { Link } from "react-router-dom";
import "./AuthForm.css";
import AuthInput from "../AuthInput/AuthInput";

function AuthForm(props) {
  const inputMarkup = props.array.map((input) => <AuthInput key={input.id} input={input.data}/>);
  return (
    <>
      <h4 className="auth__title">{props.title}</h4>
      <form className="auth__form">
        {inputMarkup}
        <button className="auth__btn" type="button">
          {props.btn}
        </button>
        <p className="auth__caption">{props.caption}</p>
        <Link>{props.link}</Link>
      </form>
    </>
  );
}

export default AuthForm;
