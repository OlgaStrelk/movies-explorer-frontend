import React from "react";
import "./Header.css";
import { ReactComponent as LogoImage } from "../../images/header__logo.svg";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import LoggedInBar from '../LoggedInBar/LoggedInBar';

function Header({ isLoggedIn, handler }) {
  return (
    <div className="section section_type_promo header__panel">
      <LogoImage onClick={handler} />
      {!isLoggedIn ? <AuthNavigation /> : <LoggedInBar />}
    </div>
  );
}

export default Header;
