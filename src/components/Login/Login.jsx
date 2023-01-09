import "./Login.css";
import LogoLink from "../LogoLink/LogoLink";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import { PATHS } from "../../utils/consts";
import Popup from "../Popup/Popup";
import { loginValidationSchema } from "../../utils/joiValidationSchema";
import AuthRedirect from "../AuthRedirect/AuthRedirect";

function Login({ handler, infoToolTip, isOpen, onClose, isLoggedIn }) {
  const onSubmit = (data) => {
    handler(data);
  };

  const STYLES_CONFIG = {
    sectionClassName: "section section_type_auth",
  };

  const INPUTS_STYLES_CONFIG = {
    labelClassName: "auth__label",
    inputClassName: "auth__input",
    errorTextClassName: "auth__error",
  };

  const FORM_DATA = {
    title: "Рады видеть!",
    className: "auth__title",
  };

  const SUBMIT_BTN_DATA = {
    btn: { type: "submit", title: "Войти" },
    caption: "Ещё не зарегистрированы?",
    link: { path: PATHS.signup, title: "Регистрация" },
  };

  const INPUTS_DATA = [
    { id: 543, data: { label: "E-mail", name: "email", type: "email" } },
    { id: 654, data: { label: "Пароль", name: "password", type: "password" } },
  ];

  const inputsMarkup = INPUTS_DATA.map((input) => (
    <Input key={input.id} data={input.data} styles={INPUTS_STYLES_CONFIG} />
  ));

  return (
    <>
      <section className={STYLES_CONFIG.sectionClassName}>
        <LogoLink />
        <h1 className={FORM_DATA.className}>{FORM_DATA.title}</h1>
        {isLoggedIn ? (
          <AuthRedirect />
        ) : (
          <AuthForm onSubmit={onSubmit} validationScema={loginValidationSchema}>
            {inputsMarkup}
            <SubmitButton data={SUBMIT_BTN_DATA} />
          </AuthForm>
        )}
      </section>
      <Popup isOpen={isOpen} text={infoToolTip} onClose={onClose} />
    </>
  );
}

export default Login;
