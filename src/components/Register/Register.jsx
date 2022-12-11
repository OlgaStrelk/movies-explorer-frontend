import LogoLink from "../LogoLink/LogoLink";
import "./Register.css";
import AuthForm from "../AuthForm/AuthForm";
import { PATHS } from "../../utils/consts";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";

function Register(props) {
  const onSubmit = (data) => {
    console.log(data);
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
      required: true,
      minLength: 2,
      maxLength: 20,
      pattern: "^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$",
    },
    {
      label: "E-mail",
      name: "email",
      type: "email",
      required: true,
      pattern: "^([^ ]+@[^ ]+.[a-z]{2,6}|)$",
    },
    { label: "Пароль", name: "password", type: "password", required: true },
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
    <section className="section section_type_auth">
      <LogoLink />
      <h1 className={FORM_DATA.className}>{FORM_DATA.title}</h1>
      <AuthForm onSubmit={onSubmit}>
        {inputsMarkup}
        <SubmitButton data={SUBMIT_BTN_DATA} />
      </AuthForm>
    </section>
  );
}

export default Register;
