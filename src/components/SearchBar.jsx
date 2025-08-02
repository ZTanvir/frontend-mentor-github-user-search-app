import { useState } from "react";
import searchIcon from "../assets/icon-search.svg";

const SearchBar = ({ error, setSearchUser }) => {
  const [search, setSearch] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <form onSubmit={handleFormSubmit} id="search-bar">
      <img
        src={searchIcon}
        alt="magnifying glass icon that will help to search"
      />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        name="username"
        id="username"
      />
      <span>{error && error}</span>
      <button
        type="submit"
        onClick={() => setSearchUser(search)}
        className="search-btn"
      >
        Search
      </button>
    </form>
  );
};
export default SearchBar;
