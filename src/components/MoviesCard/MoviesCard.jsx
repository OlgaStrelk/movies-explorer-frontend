import { useState } from "react";
import "./MoviesCard.css";
import CheckButton from "../CheckButton/CheckButton";
import CheckButtonIcon from "../../images/card__check-mark.svg";
import CrossButtonIcon from "../../images/card__cross.svg";

function MoviesCard({ data, isSorted }) {
  const saveMovie = () => {
    console.log("Фильм сохранен");
  };
  const deleteSavedMovie = () => {
    console.log("Фильм удален");
  };

  let BUTTON_DATA =
    data.isSaved && isSorted
      ? {
          style: "card__btn_type_icon-content card__btn_type_delete",
          handler: deleteSavedMovie,
        }
      : data.isSaved
      ? {
          style: "card__btn_type_icon-content card__btn_type_checked",
          handler: deleteSavedMovie,
        }
      : {
          style: "card__btn_type_text-content",
          handler: saveMovie,
        };

  let CHILDREN_DATA =
    data.isSaved && isSorted
      ? {
          src: CrossButtonIcon,
          alt: "Удалить",
        }
      : data.isSaved
      ? {
          src: CheckButtonIcon,
          alt: "Сохранено",
        }
      : {
          text: "Сохранить",
        };

  const [isVisible, setVisible] = useState(false);

  const showBtn = () => {
    setVisible(true);
  };

  const hideBtn = () => {
    setVisible(false);
  };

  return (
    <div className="card">
      <div
        className="card__image"
        style={{
          background: `center center no-repeat url(${data.src})`,
        }}
        onMouseOver={showBtn}
        onMouseLeave={hideBtn}
      >
        {(CHILDREN_DATA.src) ? (
        <CheckButton data={BUTTON_DATA} isVisible={isVisible}>
          <img src={CHILDREN_DATA.src} alt={CHILDREN_DATA.alt} />
        </CheckButton>
        ) : (
        <CheckButton data={BUTTON_DATA} isVisible={isVisible}>
          {CHILDREN_DATA.text}
        </CheckButton>
        )}
      </div>
      <div className="card__caption">
        <h4 className="card__title">{data.title}</h4>
        <p className="card__duration">{data.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
