import "./Article.css";

function Article(props) {
  const { isCentred, uniqueTitleClass, uniqueTextClass, subtitleClassName } =
    props.classes;

  const { title, subtitle, text } = props.children;

  const articleClassName = isCentred ? "article article_centred" : "article";
  const titleClassName = `article__title ${uniqueTitleClass}`;
  const textClassName = uniqueTextClass
    ? `article__text ${uniqueTextClass}`
    : "article__text";
  return (
    <article className={articleClassName}>
      <h3 className={titleClassName}>{title}</h3>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
      <p className={textClassName}>{text}</p>
    </article>
  );
}

export default Article;
