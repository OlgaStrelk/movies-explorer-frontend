import "./AboutMe.css";
import Title from "../Title/Title";
import Article from "../Article/Article";
function AboutMe() {
  const ABOUT_ME_TITLE = "Студентка";

  const PERSONAL_DATA = {
    data: {
      title: "Ольга",
      subtitle: "Фронтенд-разработчица, 26 лет",
      text: "Я родилась и живу в Москве, заканчиваю искусствоведческое направление НИУ ВШЭ и исследую советское неофициальное искусство. Люблю читать и смотреть кино, а из спорта предпочитаю всему йогу. У меня есть муж и дочка. Последние полтора года изучаю программирование, прошла курс по веб-разработке и хочу найти работу в IT.",
      link: "https://github.com/OlgaStrelk",
    },
  };

  const CLASS_NAMES_CONFIG = {
    uniqueTitleClass: "", 
    uniqueTextCLass: "", 
    subtitleClassName: "", 
    linkClassName: "",
  }

  return (
    <section className="section section_type_base">
      <Title>{ABOUT_ME_TITLE}</Title>
      <Article classes={CLASS_NAMES_CONFIG}>{PERSONAL_DATA.data}</Article>
    </section>
  );
}

export default AboutMe;
