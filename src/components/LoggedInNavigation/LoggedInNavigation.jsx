import Navigation from "../Navigation/Navigation";
import "./LoggedInNavigation.css";
import { PATHS } from "../../utils/consts";
import AccountLink from "../AccountLink/AccountLink";

function LoggedInNavigation() {
  const BTNS_DATA = {
    style: "logged-in-bar__btn",
    btns: [
      {
        title: "Фильмы",
        id: 1,
        path: PATHS.movies,
        className: "",
      },
      {
        title: "Сохранённые фильмы",
        id: 2,
        path: PATHS.savedMovies,
        className: "",
      },
    ],
  };

  return (
    <>
      <div className="logged-in-bar">
        <Navigation data={BTNS_DATA} />
      </div>
      <AccountLink />
    </>
  );
}

export default LoggedInNavigation;
