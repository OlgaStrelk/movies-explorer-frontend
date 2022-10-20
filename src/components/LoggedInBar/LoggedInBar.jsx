import Navigation from "../Navigation/Navigation";
import "./LoggedInBar.css";
import { PATHS } from "../../utils/consts";

function LoggedInBar() {
  const BTNS_DATA = {
    style: "logged-in-bar__btn",
    btns: [
      {
        title: "Фильмы",
        id: 1,
        to: PATHS.movies,
        className: "",
      },
      {
        title: "Сохранённые фильмы",
        id: 2,
        to: PATHS.savedMovies,
        className: "",
      },
    ],
  };

  return (
    <>
      <Navigation data={BTNS_DATA} />
      {/* <AccountLink></AccountLink> */}
    </>
  );
}

export default LoggedInBar;
