import HeaderBar from "../HeaderBar/HeaderBar";
import "./AuthBar.css";

function AuthBar() {
  const BTNS_DATA = {
    style: "auth-bar__btn",
    btns: [
      {
        title: "Регистрация",
        id: 1,
        className: "auth-bar__btn_type_signup",
      },
      {
        title: "Войти",
        id: 2,
        className: "auth-bar__btn_type_signin",
      },
    ],
  };

  return (
    <>
      <HeaderBar data={BTNS_DATA} />
    </>
  );
}

export default AuthBar;
