import LogoLink from "../LogoLink/LogoLink";
import "./Register.css";
import AuthForm from "../AuthForm/AuthForm";
import { PATHS } from "../../utils/consts";

function Register() {
  const FORM_DATA = {
    title: "Добро пожаловать!",
    inputs: [
      { id: 1, data: { label: "Имя" } },
      { id: 2, data: { label: "E-mail" } },
      { id: 3, data: { label: "Пароль" } },
    ],
    btn: "Зарегистрироваться",
    caption: "Уже зарегистрированы?",
    link: { path: PATHS.signin, title: "Войти" },
  };

  return (
    <section className="section section_type_auth">
      <LogoLink />
      <AuthForm data={FORM_DATA} />
    </section>
  );
}

export default Register;
