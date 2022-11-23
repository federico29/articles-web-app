import axios from "axios";

async function getArticle({ articleId, setArticle, setLoading }) {
  axios
    .get(
      `https://s3aq4jk9m4.execute-api.us-east-1.amazonaws.com/v1/article?id=${articleId}`
    )
    .then((res) => {
      setArticle(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default getArticle;
