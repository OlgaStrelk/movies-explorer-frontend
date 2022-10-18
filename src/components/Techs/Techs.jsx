import Article from "../Article/Article";
import Icon from "../Icon/Icon";
import Title from "../Title/Title";
import "./Techs.css";

function Techs() {
  const TECHS_TITLE = "Технологии";
  const ARTICLE_TITLE = "7 технологий";
  const TECHS_TITLE_CLASS_NAME = "techs__title";
  const ARTICLE_TEXT =
    "На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.";

  const ICONS_TITLES = [
    { title: "HTML", id: 1 },
    { title: "CSS", id: 2 },
    { title: "JS", id: 3 },
    { title: "React", id: 4 },
    { title: "Git", id: 5 },
    { title: "Express.js", id: 6 },
    { title: "mongoDB", id: 7 },
  ];
  const iconsMarkup = ICONS_TITLES.map((icon) => (
    <Icon title={icon.title} key={icon.id} />
  ));

  return (
    <section className="section section_type_contrast">
      <Title>{TECHS_TITLE}</Title>
      <div className="techs__article">
        <Article
          title={ARTICLE_TITLE}
          text={ARTICLE_TEXT}
          uniqueTitleClass={TECHS_TITLE_CLASS_NAME}
          isCentred={true}
        />
      </div>
      <div className="techs__icons">{iconsMarkup}</div>
    </section>
  );
}

export default Techs;
