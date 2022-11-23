import ReactMarkdown from "react-markdown";

function ArticleViewer({ article }) {
  return (
    <div>
      <div>
        <h3>{article.title}</h3>
        <p>{article.category}</p>
      </div>
      <ReactMarkdown children={article.markdown} />
    </div>
  );
}

export default ArticleViewer;
