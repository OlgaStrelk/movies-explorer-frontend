import "./Article.css";

function Article(props) {
  const { isCentred, uniqueTitleClassName, uniqueTextClassName, subtitleClassName } =
    props.classes;

  const { title, subtitle, text } = props.children;

  const articleClassName = isCentred ? "article article_centred" : "article";
  const titleClassName = `article__title ${uniqueTitleClassName}`;
  const textClassName = uniqueTextClassName
    ? `article__text ${uniqueTextClassName}`
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
