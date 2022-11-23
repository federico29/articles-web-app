import { Grid } from "@mui/material";
import Card from "./card";

function ArticlesGrid({ articles }) {
  return (
    <Grid container spacing={2}>
      {articles.map((article, i) => {
        if (article) {
          return (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card article={article} />
            </Grid>
          );
        }
        return null;
      })}
    </Grid>
  );
}

export default ArticlesGrid;
