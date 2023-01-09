import React, { useContext } from "react";

import AccountLink from "../AccountLink/AccountLink";
import "./SideBar.css";
import TabletNavigation from "../TabletNavigation/TabletNavigation";
import { NAVIGATION_DATA } from "../../utils/consts";

function SideBar({ toggleMenuState, isLoggedIn }) {
  let linksData = isLoggedIn
    ? NAVIGATION_DATA.loggedInLinks
    : NAVIGATION_DATA.authLinks;
  return (
    <div className="side-bar__overlay">
      <div className="side-bar__container">
        <button className="side-bar__close-btn" onClick={toggleMenuState} />
        <TabletNavigation handler={toggleMenuState} linksData={linksData} />
        {isLoggedIn && (
          <div className="side-bar__link">
            <AccountLink
              handler={toggleMenuState}
              style={{ display: "flex" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
