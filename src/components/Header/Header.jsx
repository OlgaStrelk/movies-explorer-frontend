import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ReactComponent as LogoImage } from "../../images/header__logo.svg";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import LoggedInNavigation from "../LoggedInNavigation/LoggedInNavigation";
import { PATHS } from "../../utils/consts";

function Header({ isLoggedIn }) {
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
      <Link to={PATHS.aboutProject}>
      <LogoImage className="header__logo" />
      </Link>
      {!isLoggedIn ? <AuthNavigation /> : <LoggedInNavigation />}
    </div>
  );
}

export default Header;
