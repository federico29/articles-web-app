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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </div>
    );
  }

  return <ArticlesGrid articles={articles} />;
}

export default FetchArticles;
