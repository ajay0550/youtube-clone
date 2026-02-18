import { useState } from "react";

function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="navbar">
      <div className="logo">AJ Streams</div>

      <div className="search">
        <input
          className="searchBar"
          type="text"
          placeholder="Search here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="searchBarButton" onClick={handleSearch}>Search</button>
      </div>
        <div>

        </div>
    </div>

  );
}

export default Navbar;
