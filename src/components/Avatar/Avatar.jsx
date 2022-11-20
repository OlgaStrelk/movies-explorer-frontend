import "./Avatar.css";

function Avatar({ data }) {
  return (
    <div className="photo__container">
      <img className="photo__item" alt={data.alt} src={data.src} />
    </div>
  );
}

export default Avatar;
