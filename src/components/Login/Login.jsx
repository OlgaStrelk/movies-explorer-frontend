import "./Login.css";
import LogoLink from "../LogoLink/LogoLink";
import AuthForm from "../AuthForm/AuthForm";
import { PATHS } from "../../utils/consts";
function Login(props) {
  const FORM_DATA = {
    title: "Рады видеть!",
    inputs: [
      { id: 1, data: { label: "E-mail" } },
      { id: 2, data: { label: "Пароль" } },
    ],
    btn: "Войти",
    caption: "Ещё не зарегистрированы?",
    link: { path: PATHS.signup, title: "Регистрация" },
  };

  return (
    <section className="section section_type_auth">
      <LogoLink />
      <AuthForm handler={props.handler} data={FORM_DATA} />
    </section>
  );
}

export default Login;
