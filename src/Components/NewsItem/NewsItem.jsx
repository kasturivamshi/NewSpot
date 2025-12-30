import React from "react";
import "./NewsItem.css";

export default function NewsItem(props) {
  const d = new Date(props.data.publishedAt);
  const uploadDate = d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div>
      <div className="news-card">
        <p className="badge">{props.data.source.name}</p>
        <img className={props.data.urlToImage? "" : "no-img"} src={props.data.urlToImage? props.data.urlToImage : "No image Available"} alt="No image available" />
        <div className="news-content">
          <h4>{props.data.title ? (props.data.title).slice(0,77) + "..." : "No title available"}</h4>
          <p>{props.data.description ? (props.data.description).slice(0,188) + "...": "No description available"}...</p>
          <div className="news-details">
            <p className="author-time"> {props.data.author || "Unknown"}  ● {uploadDate}</p>
          </div>
        </div>
        <a target="_blank" href={props.data.url}> Read more</a>
      </div>
    </div>
  );
}
