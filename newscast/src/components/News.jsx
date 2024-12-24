import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import SearchBar from "./SearchBar";

const News = () => {
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState("technology");
    const [error, setError] = useState(null);
  
    const fetchNews = async () => {
      try {
        const API_KEY = "60316ee615c24a2e45841fffbada3a11";
        const response = await axios.get(
          `https://gnews.io/api/v4/search?q=${query}&lang=en&country=us&token=${"60316ee615c24a2e45841fffbada3a11"}`
        );
        setArticles(response.data.articles);
      } catch (err) {
        setError("Failed to fetch news. Please try again later.");
      }
    };
  
    useEffect(() => {
      fetchNews();
    }, [query]);
  
    const handleSearch = async (e) => {
      e.preventDefault();
      if (!query.trim()) {
        setError("Please enter a search term.");
        return
    };
  

  return (
    <div className="p-4">
    <form onSubmit={handleSearch} className="mb-4">
    <input
         type="text"
         name="query"
         value={query}
         onChange={(e) => setQuery(e.target.value)}
         placeholder="Search news..."
        className="border p-2 mr-2 w-full"/>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>

    {error && <p className="text-red-500">{error}</p>}

    <div>
      {articles.map((article) => (
        <div key={article.url} className="mb-4">
          <h2 className="text-xl font-bold">{article.title}</h2>
          <p>{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  </div>
);
};
}

export default News;