import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, CircularProgress } from "@mui/material";
import getArticle from "./services/getArticle";
import ArticleViewer from "./components/articleViewer";

function ViewArticle() {
  const [isLoading, setLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const { articleId } = useParams();

  useEffect(() => {
    getArticle({
      articleId,
      setArticle,
      setLoading,
    });
  }, [articleId]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <Container>
      <ArticleViewer article={article} />
    </Container>
  );
}

export default ViewArticle;
