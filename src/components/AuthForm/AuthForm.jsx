import { Link, useNavigate } from "react-router-dom";
import "./AuthForm.css";
import Input from '../Input/Input';
import { PATHS } from "../../utils/consts";

function AuthForm({ handler, data }) {
  const navigate = useNavigate();

  const stylesConfig = {
    labelClassName: "auth__label",
    inputClassName: "auth__input",
  };
  
  const inputMarkup = data.inputs.map((input) => (
    <Input key={input.id} data={input.data} styles={stylesConfig} />
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    handler()
    navigate(PATHS.movies)
  }


  return (
    <>
      <h1 className="auth__title">{data.title}</h1>
      <form onSubmit={handleSubmit} className="auth__form">
        <div className="auth__inputs">{inputMarkup}</div>
        <div>
          <button className="auth__btn" type="submit">
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
