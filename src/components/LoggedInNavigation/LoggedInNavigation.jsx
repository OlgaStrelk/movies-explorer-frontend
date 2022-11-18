import Navigation from "../Navigation/Navigation";
import "./LoggedInNavigation.css";
import { NAVIGATION_DATA } from "../../utils/consts";
import AccountLink from "../AccountLink/AccountLink";

function LoggedInNavigation() {
  const stylesConfig = {
    listClassName: "logged-in-bar",
    listItemClassName: "logged-in-bar__list-item",
    linkClassName: "logged-in-bar__link",
  };

  return (
    <>
      <Navigation styles={stylesConfig} linksData={NAVIGATION_DATA.loggedInLinks} />
      <AccountLink />
    </>
  );
}

export default LoggedInNavigation;
