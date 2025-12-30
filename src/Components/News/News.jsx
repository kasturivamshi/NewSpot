import { useEffect, useState } from "react";
import "./News.css";
import NewsItem from "../NewsItem/NewsItem";

export default function News() {
  const [data, setData] = useState({ articles: [] });

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=6abc8f1031b44ac898de6a101a60c4b5"
      );
      const news = await response.json();
      setData(news);
    };
    fetchNews();
  }, []);

  return (
    <div className="news-bg">
      <div className="news-place">
        <div className="heading">
          <h2>NewSpot - Today category headlines </h2>
        </div>

        <div className="news-items">
          {data.articles.length > 0 ? (
            data.articles.map((article) => (
              <NewsItem key={article.url} data={article} />
            ))
          ) : (
            <p>No Data Found</p>
          )}
        </div>
      </div>
    </div>
  );
}
