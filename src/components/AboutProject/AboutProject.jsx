import "./AboutProject.css";
import Title from "../Title/Title";
import Article from "../Article/Article";
import TimeLine from "../TimeLine/TimeLine";

function AboutProject() {
  const ABOUT_PROJECT_TITLE = "О проекте";
  const CLASS_NAMES_CONFIG = {
    uniqueTitleClass: "about-project__title", 
  }
  const ARTICLES_DATA = [
    {
      data: {
        title: "Дипломный проект включал 5 этапов",
        text: "Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.",
      },
      id: "1",
    },
    {
      data: {
        title: "На выполнение диплома ушло 5 недель",
        text: "У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.",
      },
      id: "2",
    },
  ];

  const articlesMarkup = ARTICLES_DATA.map((article) => (
    <Article
      key={article.id}
      classes={CLASS_NAMES_CONFIG}
    >
      {article.data}
    </Article>
  ));
  return (
    <section className="section section_type_base">
      <Title>{ABOUT_PROJECT_TITLE}</Title>
      <div className="about-project__texts">{articlesMarkup}</div>
      <TimeLine />
    </section>
  );
}

export default AboutProject;
