import axios from "axios";

async function getRandomArticles({ setArticles, setLoading }) {
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
}

export default getRandomArticles;
