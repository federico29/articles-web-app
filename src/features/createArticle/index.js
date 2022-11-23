import ArticleForm from "./components/articleForm";
import uploadArticle from "./services/uploadArticle";

function NewArticle() {
  return <ArticleForm uploadArticle={uploadArticle} />;
}

export default NewArticle;
