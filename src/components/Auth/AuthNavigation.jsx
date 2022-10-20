import HeaderBar from "../HeaderBar/Navigation";
import "./AuthBar.css";
import { PATHS } from "../../utils/consts";

function AuthBar() {
  const BTNS_DATA = {
    style: "auth-bar__btn",
    btns: [
      {
        title: "Регистрация",
        id: 1,
        to: PATHS.signup,
        className: "auth-bar__btn_type_signup",
      },
      {
        title: "Войти",
        id: 2,
        to: PATHS.signin,
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
