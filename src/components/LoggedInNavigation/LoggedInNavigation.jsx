import Navigation from "../Navigation/Navigation";
import "./LoggedInNavigation.css";
import { PATHS } from "../../utils/consts";
import AccountLink from "../AccountLink/AccountLink";

function LoggedInNavigation() {
  const LIST_CLASS_NAME = "logged-in-bar";

  const LINKS_DATA = {
    styles: {
      listItemClassName: "logged-in-bar__list-item",
      linkClassName: "logged-in-bar__link",
    },
    links: [
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
      <Navigation listClassName={LIST_CLASS_NAME} linksData={LINKS_DATA} />
      <AccountLink />
    </>
  );
}

export default LoggedInNavigation;
