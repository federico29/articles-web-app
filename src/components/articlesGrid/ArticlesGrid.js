import { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@mui/material";
import ArticleCard from "../articleCard/ArticleCard";
import axios from "axios";

const ArticlesGrid = () => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://s3aq4jk9m4.execute-api.us-east-1.amazonaws.com/v1/article/random"
      )
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={2}>
      {articles.map((article, i) => {
        if (article) {
          return (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <ArticleCard article={article} />
            </Grid>
          );
        }
        return null;
      })}
    </Grid>
  );
};

export default ArticlesGrid;
