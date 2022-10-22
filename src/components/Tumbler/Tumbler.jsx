import { useState } from "react";
import "./Tumbler.css";

function Tumbler({ data }) {
  const [isClicked, setClicked] = useState(false);
  const tmblrClass = isClicked
    ? "tumbler__container tumbler__container_active"
    : "tumbler__container";
  return (
    <div className="tumbler">
      <div
        className={tmblrClass}
        onClick={() => {
          setClicked(!isClicked);
        }}
      >
        <div className="tumbler__switch"></div>
      </div>
      <p className="tumbler__title">{data.title}</p>
    </div>
  );
}

export default Tumbler;
