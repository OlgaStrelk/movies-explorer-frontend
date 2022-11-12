import Navigation from "../Navigation/Navigation";
import "./AuthNavigation.css";
import { PATHS } from "../../utils/consts";

function AuthNavigation() {
  const LIST_CLASS_NAME = "auth-bar";
  const LINKS_DATA = {
    styles: {
      listItemClassName: "auth-bar__list-item",
      linkClassName: "auth-bar__link",
    },

    data: [
      {
        title: "Регистрация",
        id: 1,
        path: PATHS.signup,
        className: "auth-bar__link_type_signup",
      },
      {
        title: "Войти",
        id: 2,
        path: PATHS.signin,
        className: "auth-bar__link_type_signin",
      },
    ],
  };

  return <Navigation listClassName={LIST_CLASS_NAME} linksData={LINKS_DATA} />;
}

export default AuthNavigation;
