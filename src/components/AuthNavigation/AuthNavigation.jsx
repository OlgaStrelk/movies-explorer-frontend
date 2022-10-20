import Navigation from "../Navigation/Navigation";
import "./AuthNavigation.css";
import { PATHS } from "../../utils/consts";

function AuthNavigation() {
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
    <div className='auth-bar'>
      <Navigation data={BTNS_DATA} />
    </div>
  );
}

export default AuthNavigation;
