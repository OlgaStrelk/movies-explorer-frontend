import React, { useContext} from "react";

import Navigation from "../Navigation/Navigation";
import "./AuthNavigation.css";
import { NAVIGATION_DATA } from "../../utils/consts";
import { LoggedInContext } from "../../contexts/LoggedInContext";


function AuthNavigation() {
  const isLoggedIn = useContext(LoggedInContext);

  const stylesConfig = {
    // listClassName: isLoggedIn ? "auth-bar is-hidden" : "auth-bar",
    listClassName: "auth-bar is-hidden",
    listItemClassName: "auth-bar__list-item",
    linkClassName: "auth-bar__link",
  };

  return (
    <Navigation
      styles={stylesConfig}
      linksData={NAVIGATION_DATA.authLinks}
    />
  );
}

export default AuthNavigation;
