import { Container } from "@mui/material";
import ArticlesGrid from "../../components/articlesGrid/ArticlesGrid";
import ArticleForm from "../../components/articleForm/ArticleForm";

const Home = () => {
  return (
    <Container>
      <h1>Any Article</h1>
      <ArticleForm />
      <br />
      <ArticlesGrid />
    </Container>
  );
};

export default Home;
