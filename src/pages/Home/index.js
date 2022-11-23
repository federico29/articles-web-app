import { Container } from "@mui/material";
import FetchArticles from "../../features/fetchArticles";

const Home = () => {
  return (
    <Container>
      <h1>Any Article</h1>
      <br />
      <FetchArticles />
    </Container>
  );
};

export default Home;
