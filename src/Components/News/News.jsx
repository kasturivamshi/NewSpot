import { useEffect, useState } from "react";
import "./News.css";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  let newsAPI_APIkey = process.env.NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${newsAPI_APIkey}&page=${page}`;
      setLoading(true);
      const response = await fetch(url);
      const news = await response.json();
      setArticles(news.articles);
      setLoading(false);
      setTotalResults(news.totalResults);
    };
    fetchNews();
  }, [props.category]);

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${newsAPI_APIkey}&page=${page}`;
    setLoading(true);
    const response = await fetch(url);
    const news = await response.json();
    setArticles(articles.concat(news.articles));
    setLoading(false);
    setTotalResults(news.totalResults);
  };

  return (
    <>
      <div className="news-bg">
        <div className="news-place">
          <div className="heading">
            <h2>
              NewSpot - Today{" "}
              {props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}
              headlines{" "}
            </h2>
          </div>
          <div className="loading-div">{loading && <Spinner />}</div>

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length < totalResults}
            loader={<Spinner />}
          >
            <div className="news-items">
              {articles.length > 0 &&
                articles.map((article) => (
                  <NewsItem key={article.url} data={article} />
                ))}
            </div>

          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}
