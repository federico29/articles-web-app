import { useState } from "react";
import { Container } from "@mui/material";
import ArticleViewer from "./components/ArticleViewer";
import CodeBlockForm from "./components/CodeBlockForm";
import ContentsTableForm from "./components/ContentsTableForm";

function ArticleForm() {
  const [components, setComponents] = useState([]);
  return (
    <>
      <Container>
        <CodeBlockForm setComponents={setComponents} />
        <ContentsTableForm setComponents={setComponents} />
      </Container>
      <ArticleViewer components={components} />
    </>
  );
}

export default ArticleForm;
