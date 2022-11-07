import Navigation from "../Navigation/Navigation";
import "./TabletNavigation.css";
import { PATHS } from "../../utils/consts";

function TabletNavigation({handler}) {
  const BTNS_DATA = {
    style: "tablet-navigation__btn",
    btns: [
      {
        title: "Главная",
        id: 1,
        path: PATHS.aboutProject,
        className: "",
      },
      {
        title: "Фильмы",
        id: 2,
        path: PATHS.movies,
      },
      {
        title: "Сохранённые фильмы",
        id: 3,
        path: PATHS.savedMovies,
        className: "",
      },
    ],
  };
  return (
    <div className="tablet-navigation">
      <Navigation style={BTNS_DATA.style} data={BTNS_DATA} handler={handler}/>
    </div>
  );
}

export default TabletNavigation;
