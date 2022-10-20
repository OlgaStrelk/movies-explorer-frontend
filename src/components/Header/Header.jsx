import React from "react";
import "./Header.css";
import { ReactComponent as LogoImage } from "../../images/header__logo.svg";
import AuthBar from "../AuthBar/AuthBar";
import LoggedInBar from '../LoggedInBar/LoggedInBar';

function Header({ isLoggedIn, handler }) {
  return (
    <div className="section section_type_promo header__panel">
      <LogoImage onClick={handler} />
      {!isLoggedIn ? <AuthBar /> : <LoggedInBar />}
    </div>
  );
}

export default Header;
