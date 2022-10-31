import { Link } from "react-router-dom";
import "./AuthForm.css";
import AuthInput from "../AuthInput/AuthInput";

function AuthForm({ data }) {
  const inputMarkup = data.inputs.map((input) => (
    <AuthInput key={input.id} input={input.data} />
  ));
  return (
    <>
      <h4 className="auth__title">{data.title}</h4>
      <form className="auth__form">
        <div className="auth__inputs">{inputMarkup}</div>
        <div className="auths__submit">
          <button className="auth__btn" type="button">
            {data.btn}
          </button>
          <div className="auth__caption">
            <p className="auth__text">{data.caption}</p>
            <Link className="auth__link">{data.link}</Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default AuthForm;
