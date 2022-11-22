import { useState } from "react";
import ArticleForm from "./components/ArticleForm";
import ArticleViewer from "./components/ArticleViewer";

function ArticleCreator() {
  const [components, setComponents] = useState([]);
  return (
    <div className="split-screen">
      <ArticleForm setComponents={setComponents} />
      <ArticleViewer components={components} />
    </div>
  );
}

export default ArticleCreator;
