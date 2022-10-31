import "./Login.css";
import LogoLink from '../LogoLink/LogoLink';
import AuthForm from '../AuthForm/AuthForm';

function Login(props) {
  const LOGIN_INPUTS = [
    { id: 1, data: { label: "E-mail", placeholder: "Введите e-mail" } },
    { id: 2, data: { label: "Пароль", placeholder: "Введите пароль" } },
  ];
  return (
    <>
      <LogoLink />
      <AuthForm array={LOGIN_INPUTS}></AuthForm>
    </>
  );
}

export default Login;
