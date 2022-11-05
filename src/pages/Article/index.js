import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, CircularProgress } from "@mui/material";
import axios from "axios";
import {
  BigHeader,
  Paragraph,
  ContentTable,
  Section,
} from "../../components/article";

const Article = () => {
  const search = useLocation().search;
  const articleId = new URLSearchParams(search).get("id");
  const [isLoading, setLoading] = useState(true);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://s3aq4jk9m4.execute-api.us-east-1.amazonaws.com/v1/article/file?id=${articleId}`
      )
      .then((res) => {
        setArticle(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [articleId]);

  if (isLoading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      {article.components.map((component, i) => {
        if (component.className === "big-header") {
          return <BigHeader props={component.props} key={i} />;
        }
        if (component.className === "paragraph") {
          return <Paragraph props={component.props} key={i} />;
        }
        if (component.className === "content-table") {
          return <ContentTable props={component.props} key={i} />;
        }
        if (component.className === "section") {
          return <Section props={component.props} key={i} />;
        }
        return null;
      })}
    </Container>
  );
};

export default Article;
