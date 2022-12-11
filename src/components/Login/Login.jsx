import "./Login.css";
import LogoLink from "../LogoLink/LogoLink";
import AuthForm from "../AuthForm/AuthForm";
import { PATHS } from "../../utils/consts";
function Login(props) {
  const STYLES_CONFIG = {
    sectionClassName: "section section_type_auth",
  };
  const FORM_DATA = {
    title: "Рады видеть!",
    btn: { type: "submit", title: "Войти" },
    caption: "Ещё не зарегистрированы?",
    link: { path: PATHS.signup, title: "Регистрация" },
  };

  const INPUTS_DATA = [
    { label: "E-mail", name: "email", type: "email", required: true },
    { label: "Пароль", name: "password", type: "password", required: true },
  ];

  return (
    <section className={STYLES_CONFIG.sectionClassName}>
      {/* <LogoLink />
      <AuthForm handler={props.handler} data={FORM_DATA}></AuthForm> */}
    </section>
  );
}

export default Login;
