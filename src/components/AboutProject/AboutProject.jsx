import "./AboutProject.css";
import Title from "../Title/Title";
import Article from "../Article/Article";
import TimeLine from "../TimeLine/TimeLine";

function AboutProject() {
  const ABOUT_PROJECT_TITLE = "О проекте";
  const ABOUT_PROJECT_ARTICLE_TITLE_CLASS_NAME = "about-project__title";

  const ARTICLES_DATA = [
    {
      title: "Дипломный проект включал 5 этапов",
      text: "Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.",
      id: "1",
    },
    {
      title: "На выполнение диплома ушло 5 недель",
      text: "У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.",
      id: "2",
    },
  ];

  const articlesMarkup = ARTICLES_DATA.map((article) => (
    <Article
      key={article.id}
      title={article.title}
      text={article.text}
      uniqueTitleClass={ABOUT_PROJECT_ARTICLE_TITLE_CLASS_NAME}
    />
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
