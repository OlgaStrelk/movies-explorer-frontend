import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound(props) {
  const navigate = useNavigate();

  const PAGE_NOT_FOUND_DATA = {
    title: "404",
    caption: "Страница не найдена",
    link: "Назад",
  };

  return (
    <main className="page-not-found">
      <section className="page-not-found__container">
        <h1 className="page-not-found__title">{PAGE_NOT_FOUND_DATA.title}</h1>
        <p className="page-not-found__caption">{PAGE_NOT_FOUND_DATA.caption}</p>
      </section>
      <button className="page-not-found__btn" onClick={() => navigate(-1)}>
        {PAGE_NOT_FOUND_DATA.link}
      </button>
    </main>
  );
}

export default PageNotFound;
