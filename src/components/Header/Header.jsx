import React from "react";
import "./Header.css";
import { ReactComponent as LogoImage } from "../../images/header__logo.svg";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import LoggedInNavigation from "../LoggedInNavigation/LoggedInNavigation";

function Header({ isLoggedIn, handler }) {
  const STYLE = {
    section: "section",
    sectionType: { promo: "section_type_promo" },
    header: "header__panel",
  };

  return (
    <div
      className={
        isLoggedIn
          ? `${STYLE.section} ${STYLE.header}`
          : `${STYLE.section} ${STYLE.sectionType.promo} ${STYLE.header}`
      }
    >
      <LogoImage className="header__logo" onClick={handler} />
      {!isLoggedIn ? <AuthNavigation /> : <LoggedInNavigation />}
    </div>
  );
}

export default Header;
