import { useEffect, useState } from "react";
import "./News.css";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";

export default function News(prop) {
  const [data, setData] = useState({ articles: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${prop.category}&apiKey=6abc8f1031b44ac898de6a101a60c4b5&pageSize=${prop.pageSize}`;
      setLoading(true);
      const response = await fetch(url);
      const news = await response.json();
      setData(news);
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <div className="news-bg">
      <div className="news-place">
        <div className="heading">
          <h2>NewSpot - Today {prop.category.charAt(0).toUpperCase() + prop.category.slice(1)} headlines </h2>
        </div>

          <div className="loading-div">{loading && <Spinner />}</div>
          <div className="news-items">
            {data.articles.length > 0 &&
              data.articles.map((article) => (
                <NewsItem key={article.url} data={article} />
              ))}
          </div>
        
      </div>
    </div>
  );
}
