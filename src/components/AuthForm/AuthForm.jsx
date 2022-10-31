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
        {inputMarkup}
        <button className="auth__btn" type="button">
          {data.btn}
        </button>
        <p className="auth__caption">{data.caption}</p>
        <Link>{data.link}</Link>
      </form>
    </>
  );
}

export default AuthForm;
