import React from "react";
import News from "./News";
const SearchBar = ({ placeholder, onSearch }) => {
  e.preventDefault();
  if (!query.trim()) {
    setError("Please enter a search term.");
    return;
};

return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
       <input
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search news..."
          className="border p-2 mr-2 w-full"
        />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;