import { useState, useEffect } from "react";
import { Container, CircularProgress } from "@mui/material";
import "./assets/styles/styles.css";
import getRandomArticles from "./services/getRandomArticles";
import ArticlesGrid from "./components/grid";

function FetchArticles() {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getRandomArticles({ setArticles, setLoading });
  }, []);

  if (isLoading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <ArticlesGrid articles={articles} />
    </Container>
  );
}

export default FetchArticles;
