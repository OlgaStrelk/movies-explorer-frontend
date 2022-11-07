import { Link } from "react-router-dom";
import "./AuthForm.css";
import Input from '../Input/Input';

function AuthForm({ handler, data }) {
  const stylesConfig = {
    labelClassName: "auth__label",
    inputClassName: "auth__input",
  };
  
  const inputMarkup = data.inputs.map((input) => (
    <Input key={input.id} data={input.data} styles={stylesConfig}/>
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
