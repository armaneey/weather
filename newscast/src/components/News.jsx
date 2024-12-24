import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import SearchBar from "./SearchBar";

const News = () => {
  const [query, setQuery] = useState("technology");
  const API_KEY = "971a03d50a104480a2a6b5bad31a4c81"; 
  const { data, loading, error } = useFetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${"971a03d50a104480a2a6b5bad31a4c81"}`
  );

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">News</h2>
      <SearchBar placeholder="Search news" onSearch={setQuery} />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {data?.articles && (
        <ul className="space-y-4">
          {data.articles.slice(0, 5).map((article, index) => (
            <li key={index} className="border-b pb-2">
              <h3 className="font-bold">{article.title}</h3>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Read more
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;