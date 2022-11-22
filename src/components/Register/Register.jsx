import LogoLink from "../LogoLink/LogoLink";
import "./Register.css";
import AuthForm from "../AuthForm/AuthForm";
import { PATHS } from "../../utils/consts";

function Register(props) {
  const FORM_DATA = {
    title: "Добро пожаловать!",
    inputs: [
      { id: 1, data: { label: "Имя", type: "text", required: true } },
      { id: 2, data: { label: "E-mail", type: "email", required: true } },
      { id: 3, data: { label: "Пароль", type: "password", required: true } },
    ],
    btn: "Зарегистрироваться",
    caption: "Уже зарегистрированы?",
    link: { path: PATHS.signin, title: "Войти" },
  };

  return (
    <section className="section section_type_auth">
      <LogoLink />
      <AuthForm handler={props.handler} data={FORM_DATA} />
    </section>
  );
}

export default Register;
