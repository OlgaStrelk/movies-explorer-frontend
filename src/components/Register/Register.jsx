import LogoLink from "../LogoLink/LogoLink";
import "./Register.css";
import AuthForm from "../AuthForm/AuthForm";

function Register(props) {
  const REGISTER_INPUTS = [
    { id: 1, data: { label: "Имя", placeholder: "Введите имя" } },
    { id: 2, data: { label: "E-mail", placeholder: "Введите e-mail" } },
    { id: 3, data: { label: "Пароль", placeholder: "Введите пароль" } },
  ];
  return (
    <>
      <LogoLink />
      <AuthForm array={REGISTER_INPUTS}></AuthForm>
    </>
  );
}

export default Register;
