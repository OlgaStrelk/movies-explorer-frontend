import React from "react";
import "./Header.css";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import LoggedInNavigation from "../LoggedInNavigation/LoggedInNavigation";
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
    <>
      {path !== PATHS.signup && path !== PATHS.signin && (
        <div
          className={
            path !== PATHS.aboutProject
              ? `${STYLE.section} ${STYLE.header}`
              : `${STYLE.section} ${STYLE.sectionType.promo} ${STYLE.header}`
          }
        >
          {isLoggedIn ? <LoggedInNavigation /> : <AuthNavigation />}
        </div>
      )}
    </>
  );
}

export default Header;
