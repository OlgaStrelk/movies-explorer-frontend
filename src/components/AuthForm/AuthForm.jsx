import { Link, useNavigate } from "react-router-dom";
import "./AuthForm.css";
import Input from "../Input/Input";
import { PATHS } from "../../utils/consts";

function AuthForm({ handler, data }) {
  const navigate = useNavigate();

  const STYLES_CONFIG = {
    titleClassName: "auth__title",
    formClassName: "auth__form",
    buttonClassName: "auth__btn",
    inputsContainerClassName: "auth__inputs",
    captionClassName: "auth__caption",
    textClassName: "auth__text",
    linkClassName: "auth__link"
  };
  const INPUTS_STYLES_CONFIG = {
    labelClassName: "auth__label",
    inputClassName: "auth__input",
  };

  const inputMarkup = data.inputs.map((input) => (
    <Input key={input.id} data={input.data} styles={INPUTS_STYLES_CONFIG} />
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    handler();
    navigate(PATHS.movies);
  };

  return (
    <>
      <h1 className={STYLES_CONFIG.titleClassName}>{data.title}</h1>
      <form onSubmit={handleSubmit} className={STYLES_CONFIG.formClassName}>
        <div className={STYLES_CONFIG.inputsContainerClassName}>{inputMarkup}</div>
        <div>
          <button className={STYLES_CONFIG.buttonClassName} type="submit">
            {data.btn}
          </button>
          <div className={STYLES_CONFIG.captionClassName}>
            <p className={STYLES_CONFIG.textClassName}>{data.caption}</p>
            <Link to={data.link.path} className={STYLES_CONFIG.linkClassName}>
              {data.link.title}
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default AuthForm;
