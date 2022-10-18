import "./Portfolio.css";
import ListItem from '../ListItem/ListItem';

function Portfolio() {
  const PORTFOLIO_TITLE = "Портфолио";
  const LINKS_DATA = [
    { id: 1, href: "", title: "Статичный сайт" },
    { id: 2, href: "", title: "Адаптивный сайт" },
    { id: 3, href: "", title: "Одностраничное приложение" },
  ];
  const linksMarkdown = LINKS_DATA.map((link) => <ListItem link={link} />);
  return (
    <>
      <h4 className="portfolio__title">{PORTFOLIO_TITLE}</h4>
      <ul className="portfolio__list">{linksMarkdown}</ul>
    </>
  );
}

export default Portfolio;
