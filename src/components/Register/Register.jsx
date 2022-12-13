import validator from 'validator'
import LogoLink from "../LogoLink/LogoLink";
import "./Register.css";
import AuthForm from "../AuthForm/AuthForm";
import { PATHS } from "../../utils/consts";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import Popup from "../Popup/Popup";

function Register({ handler, infoToolTip, isOpen, onClose }) {

  const onSubmit = (data) => {
    handler(data);
  };

  const INPUTS_STYLES_CONFIG = {
    labelClassName: "auth__label",
    inputClassName: "auth__input",
    errorTextClassName: "auth__error",
  };

  const FORM_DATA = {
    title: "Добро пожаловать!",
    className: "auth__title",
  };

  const SUBMIT_BTN_DATA = {
    btn: { title: "Зарегистрироваться", type: "submit" },
    caption: "Уже зарегистрированы?",
    link: { path: PATHS.signin, title: "Войти" },
  };

  const INPUTS_DATA = [
    {
      label: "Имя",
      name: "name",
      type: "text",
    },
    {
      label: "E-mail",
      name: "email",
      type: "email",
    },
    {
      label: "Пароль",
      name: "password",
      type: "password",
    },
  ];

  const inputsMarkup = INPUTS_DATA.map((input) => (
    <Input
      key={input.name}
      name={input.name}
      data={input}
      styles={INPUTS_STYLES_CONFIG}
    />
  ));

  return (
    <>
      <section className="section section_type_auth">
        <LogoLink />
        <h1 className={FORM_DATA.className}>{FORM_DATA.title}</h1>
        <AuthForm onSubmit={onSubmit}>
          {inputsMarkup}
          <SubmitButton data={SUBMIT_BTN_DATA} />
        </AuthForm>
      </section>
      <Popup isOpen={isOpen} text={infoToolTip} onClose={onClose} />
    </>
  );
}

export default Register;
