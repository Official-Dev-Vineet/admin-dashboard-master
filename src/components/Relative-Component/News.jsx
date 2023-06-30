import React, { useState } from "react";
import { FetchAPI } from "../../Constants/FetchData";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import "./News.css";
const News = () => {
  const [searchTerm, setSearchTerm] = useState("javascript");
  const [news, setNews] = useState([]);
  function setData(val) {
    setSearchTerm(val.target.value);
  }
  function SearchNews() {
    FetchAPI(searchTerm).then((data) => {
      setNews(data.articles);
    });
  }
  return (
    <div className="news">
      <div className="input-box">
        <input
          placeholder={searchTerm}
          type="text"
          onChange={(val) => setData(val)}
        />
        <button type="submit" onClick={() => SearchNews()}>
          {<SearchSharpIcon />}
        </button>
      </div>
      <ul className="news-list">
        {news?.map((data, index) => {
          return (
            <li key={index}>
              <span
                className="news-info"
                onClick={() => {
                  window.open(
                    data?.url,
                    "_blank",
                    "top=50,height=500,width=500,left=400"
                  );
                }}
              >
                <img src={data?.urlToImage} alt={data?.author} />
                <div className="news-text">
                  <h5 className="title">{data?.title}</h5>
                  <p className="description">{data?.description}</p>
                </div>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default News;
