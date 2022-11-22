import "./Portfolio.css";
import ListItem from "../ListItem/ListItem";

function Portfolio() {
  const TITLE_CLASS_NAME = "portfolio__title"
  const LIST_CLASS_NAME = "portfolio__list"
  const PORTFOLIO_TITLE = "Портфолио";
  const LINKS_DATA = [
    { id: 1, data: { href: "https://github.com/OlgaStrelk/how-to-learn", title: "Статичный сайт" } },
    { id: 2, data: { href: "https://github.com/OlgaStrelk/russian-travel", title: "Адаптивный сайт" } },
    { id: 3, data: { href: "https://github.com/OlgaStrelk/react-mesto-api-full", title: "Одностраничное приложение" } },
  ];

  const STYLES_CONFIG = {
    itemClassName: "list-item",
    linkClassName: "list-item__link",
    titleClassName: "list-item__title",
    iconClassName: "list-item__icon"
  }
  const linksMarkdown = LINKS_DATA.map((link) => (
    <ListItem key={link.id} link={link.data} styles={STYLES_CONFIG}/>
  ));
  return (
    <>
      <h4 className={TITLE_CLASS_NAME}>{PORTFOLIO_TITLE}</h4>
      <ul className={LIST_CLASS_NAME}>{linksMarkdown}</ul>
    </>
  );
}

export default Portfolio;
