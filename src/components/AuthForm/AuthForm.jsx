import { Link } from "react-router-dom";
import "./AuthForm.css";
import AuthInput from "../AuthInput/AuthInput";

function AuthForm({ handler, data }) {
  const inputMarkup = data.inputs.map((input) => (
    <AuthInput key={input.id} input={input.data} />
  ));
  return (
    <>
      <h1 className="auth__title">{data.title}</h1>
      <form onSubmit={() => handler(true)} className="auth__form">
        <div className="auth__inputs">{inputMarkup}</div>
        <div>
          <button className="auth__btn" type="button">
            {data.btn}
          </button>
          <div className="auth__caption">
            <p className="auth__text">{data.caption}</p>
            <Link to={data.link.path}className="auth__link">{data.link.title}</Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default AuthForm;
