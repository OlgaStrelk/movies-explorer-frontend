import React from "react";
import "./Header.css";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import LoggedInNavigation from "../LoggedInNavigation/LoggedInNavigation";
import LogoLink from "../LogoLink/LogoLink";
import { PATHS } from "../../utils/consts";
import { useLocation } from "react-router-dom";
function Header({ isLoggedIn }) {
  const STYLE = {
    section: "section",
    sectionType: { promo: "section_type_promo" },
    header: "header__panel",
  };

  let location = useLocation();

  const path = location.pathname;

  return (
    <div
      className={
        path !== PATHS.aboutProject
          ? `${STYLE.section} ${STYLE.header}`
          : `${STYLE.section} ${STYLE.sectionType.promo} ${STYLE.header}`
      }
    >
      {path !== PATHS.signup && path !== PATHS.signin && <LogoLink />}
      {isLoggedIn ? (
        <LoggedInNavigation />
      ) : path === PATHS.signup || path === PATHS.signin ? (
        <></>
      ) : (
        <AuthNavigation />
      )}
    </div>
  );
}

export default Header;
