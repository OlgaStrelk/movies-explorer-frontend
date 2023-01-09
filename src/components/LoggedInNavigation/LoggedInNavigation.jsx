import Navigation from "../Navigation/Navigation";
import "./LoggedInNavigation.css";
import { NAVIGATION_DATA } from "../../utils/consts";
import AccountLink from "../AccountLink/AccountLink";

function LoggedInNavigation() {
  const STYLES_CONFIG = {
    listClassName: "logged-in-bar",
    listItemClassName: "logged-in-bar__list-item",
    linkClassName: "logged-in-bar__link",
  };

  return (
    <>
      <Navigation styles={STYLES_CONFIG} linksData={NAVIGATION_DATA.loggedInLinks} />
      <AccountLink />
    </>
  );
}

export default LoggedInNavigation;
