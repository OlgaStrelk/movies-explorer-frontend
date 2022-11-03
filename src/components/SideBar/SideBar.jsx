import AccountLink from "../AccountLink/AccountLink";
import "./SideBar.css";
import TabletNavigation from "../TabletNavigation/TabletNavigation";

function SideBar(props) {
  return (
    <div className="side-bar__overlay">
      <div className="side-bar__container">
        <button className="side-bar__close-btn" />
        <TabletNavigation />
        <div className='side-bar__link'><AccountLink style={{ display: "flex"}} /></div>
      </div>
    </div>
  );
}

export default SideBar;
