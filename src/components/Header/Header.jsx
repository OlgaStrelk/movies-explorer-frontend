import React from "react";
import "./Header.css";
import { ReactComponent as LogoImage } from "../../images/header__logo.svg";
import AuthBar from "../AuthBar/AuthBar";

function Header() {
  return (
    <div className="section section_type_promo header__panel">
      <LogoImage />
      <AuthBar />
    </div>
  );
}

export default Header;
