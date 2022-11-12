import "./AboutMe.css";
import Title from "../Title/Title";
import Article from "../Article/Article";
import PhotoPath from "../../images/photo.jpeg";
import Avatar from "../Avatar/Avatar";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  const SECTION_DATA = { id: "student", title: "Студентка" };

  const PERSONAL_DATA = {
    data: {
      title: "Ольга",
      subtitle: "Фронтенд-разработчица, 26 лет",
      text: "Я родилась и живу в Москве, заканчиваю искусствоведческое направление НИУ ВШЭ и исследую советское неофициальное искусство. Люблю читать и смотреть кино, а из спорта предпочитаю йогу. У меня есть муж и дочка. Последние полтора года изучаю программирование, прошла курс по веб-разработке и хочу найти работу в IT.",
      typo: "Я&nbsp;родилась и&nbsp;живу в&nbsp;Москве, заканчиваю искусствоведческое направление НИУ ВШЭ и&nbsp;исследую советское неофициальное искусство. Люблю читать и&nbsp;смотреть кино, а&nbsp;из&nbsp;спорта предпочитаю йогу. У&nbsp;меня есть муж и&nbsp;дочка. Последние полтора года изучаю программирование, прошла курс по&nbsp;веб-разработке и&nbsp;хочу найти работу в&nbsp;IT.",
    },
    link: { title: "Github", url: "https://github.com/OlgaStrelk" },
    photo: {
      alt: "Фотография Ольги",
      src: PhotoPath,
    },
  };

  const STYLES_CONFIG = {
    uniqueTitleClassName: "about-me__title",
    uniqueTextClassName: "about-me__text",
    subtitleClassName: "about-me__subtitle",
  };

  return (
    <section className="section section_type_base section_type_about-me" id={SECTION_DATA.id}>
      <Title>{SECTION_DATA.title}</Title>
      <div className="about-me__grid">
        <Article classes={STYLES_CONFIG}>{PERSONAL_DATA.data}</Article>
        <Avatar data={PERSONAL_DATA.photo} />
        <a className="about-me__link" href={PERSONAL_DATA.link.url}>
          {PERSONAL_DATA.link.title}
        </a>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
