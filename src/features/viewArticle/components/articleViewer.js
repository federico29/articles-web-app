import "../assets/styles/styles.css";
import ReactMarkdown from "react-markdown";

function ArticleViewer({ article }) {
  return <ReactMarkdown children={article.markdown} className="article-body" />;
}

export default ArticleViewer;
