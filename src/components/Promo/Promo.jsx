import "./Promo.css";
function Promo() {
  const PROMO_TITLE_TEXT =
    "Учебный проект студентки факультета Веб-разработки.";
  return (
    <section className="section section_type_promo promo__container">
      <div className="promo__image"></div>
      <h1 className="promo__title">{PROMO_TITLE_TEXT}</h1>
    </section>
  );
}

export default Promo;
