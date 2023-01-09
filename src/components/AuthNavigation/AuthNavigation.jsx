import React from "react";

import Navigation from "../Navigation/Navigation";
import "./AuthNavigation.css";
import { NAVIGATION_DATA } from "../../utils/consts";


function AuthNavigation() {

  const STYLES_CONFIG = {
    listClassName: "auth-bar is-hidden",
    listItemClassName: "auth-bar__list-item",
    linkClassName: "auth-bar__link",
  };

  return (
    <Navigation
      styles={STYLES_CONFIG}
      linksData={NAVIGATION_DATA.authLinks}
    />
  );
}

export default AuthNavigation;
