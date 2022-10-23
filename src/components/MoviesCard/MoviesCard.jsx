import { useState } from "react";
import "./MoviesCard.css";

function MoviesCard({ data }) {
  const [isVisible, setVisible] = useState(false);

  const saveBtnClassName =
    isVisible && !data.isSaved
      ? "card__save-btn card__save-btn_visible"
      : "card__save-btn";
  const checkMarkClassName =
    isVisible && data.isSaved
      ? "card__check-mark card__check-mark_visible"
      : "card__check-mark";

  const showBtn = () => {
    setVisible(true);
  };

  const hideBtn = () => {
    setVisible(false);
  };

  return (
    <div className="card">
      <button type="button" className={saveBtnClassName}>
        Сохранить
      </button>
      <div className={checkMarkClassName}></div>
      <img
        className="card__image"
        alt={data.title}
        src={data.src}
        onMouseEnter={showBtn}
        onMouseLeave={hideBtn}
      />
      <div className="card__caption">
        <h4 className="card__title">{data.title}</h4>
        <p className="card__duration">{data.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
