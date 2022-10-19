import "./Portfolio.css";
import ListItem from "../ListItem/ListItem";

function Portfolio() {
  const PORTFOLIO_TITLE = "Портфолио";
  const LINKS_DATA = [
    { id: 1, data: { href: "", title: "Статичный сайт" } },
    { id: 2, data: { href: "", title: "Адаптивный сайт" } },
    { id: 3, data: { href: "", title: "Одностраничное приложение" } },
  ];
  const linksMarkdown = LINKS_DATA.map((link) => (
    <ListItem key={link.id} link={link.data} />
  ));
  return (
    <>
      <h4 className="portfolio__title">{PORTFOLIO_TITLE}</h4>
      <ul>{linksMarkdown}</ul>
    </>
  );
}

export default Portfolio;
