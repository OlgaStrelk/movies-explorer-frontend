import LogoLink from "../LogoLink/LogoLink";
import "./Register.css";
import AuthForm from "../AuthForm/AuthForm";

function Register(props) {
  const FORM_DATA = {
    title: "Добро пожаловать!",
    inputs: [
      { id: 1, data: { label: "Имя", placeholder: "Введите имя" } },
      { id: 2, data: { label: "E-mail", placeholder: "Введите e-mail" } },
      { id: 3, data: { label: "Пароль", placeholder: "Введите пароль" } },
    ],
    btn: "Зарегистрироваться",
    caption: "Уже зарегистрированы?",
    link: "Войти",
  };

  return (
    <section className="section section_type_auth">
      <LogoLink />
      <AuthForm data={FORM_DATA} />
    </section>
  );
}

export default Register;
