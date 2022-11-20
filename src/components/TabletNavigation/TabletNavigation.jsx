import Navigation from "../Navigation/Navigation";
import "./TabletNavigation.css";


function TabletNavigation({ handler, linksData }) {
  const stylesConfig = {
    listClassName: "tablet-navigation",
    listItemClassName: "tablet-navigation__list-item",
    linkClassName: "tablet-navigation__link",
  };

  return (
    <Navigation
      styles={stylesConfig}
      linksData={linksData}
      handler={handler}
    />
  );
}

export default TabletNavigation;
