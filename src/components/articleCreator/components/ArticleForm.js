import CodeBlockForm from "./CodeBlockForm";
import ContentsTableForm from "./ContentsTableForm";

function ArticleForm({ setComponents }) {
  return (
    <div className="article-form">
      <CodeBlockForm setComponents={setComponents} />
      <ContentsTableForm setComponents={setComponents} />
    </div>
  );
}

export default ArticleForm;
