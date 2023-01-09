import Navigation from "../Navigation/Navigation";
import "./TabletNavigation.css";


function TabletNavigation({ handler, linksData }) {
  const STYLES_CONFIG = {
    listClassName: "tablet-navigation",
    listItemClassName: "tablet-navigation__list-item",
    linkClassName: "tablet-navigation__link",
  };

  return (
    <Navigation
      styles={STYLES_CONFIG}
      linksData={linksData}
      handler={handler}
    />
  );
}

export default TabletNavigation;
