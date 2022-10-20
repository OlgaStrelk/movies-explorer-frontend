import HeaderBar from "../HeaderBar/HeaderBar";
import "./LoggedInBar.css";

function LoggedInBar() {
  const BTNS_DATA = {
    style: "logged-in-bar__btn",
    btns: [
      {
        title: "Фильмы",
        id: 1,
        className: "",
      },
      {
        title: "Сохранённые фильмы",
        id: 2,
        className: "",
      },
    ],
  };

  return (
    <>
      <HeaderBar data={BTNS_DATA} />
    </>
  );
}

export default LoggedInBar;
