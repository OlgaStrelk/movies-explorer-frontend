import Article from "../Article/Article";
import Icon from "../Icon/Icon";
import Title from "../Title/Title";
import "./Techs.css";

function Techs() {
  const TECHS_TITLE = "Технологии";
  const CLASS_NAMES_CONFIG = {
    uniqueTitleClass: "techs__title",
    isCentred: true,
  };

  const ARTICLE_DATA = {
    data: {
      title: "7 технологий",
      text: "На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.",
    },
  };

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
        <Article classes={CLASS_NAMES_CONFIG}>
          {ARTICLE_DATA.data}
        </Article>
      </div>
      <div className="techs__icons">{iconsMarkup}</div>
    </section>
  );
}

export default Techs;
