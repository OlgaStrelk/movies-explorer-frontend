import "./Login.css";
import LogoLink from '../LogoLink/LogoLink';
import AuthForm from '../AuthForm/AuthForm';

function Login(props) {
  const FORM_DATA = {
    title: "Рады видеть!",
    inputs: [
      { id: 1, data: { label: "E-mail", placeholder: "Введите e-mail" } },
      { id: 2, data: { label: "Пароль", placeholder: "Введите пароль" } },
    ],
    btn: "Войти",
    caption: "Ещё не зарегистрированы?",
    link: "Регистрация"
  }

  return (
    <>
      <LogoLink />
      <AuthForm data={FORM_DATA}></AuthForm>
    </>
  );
}

export default Login;
