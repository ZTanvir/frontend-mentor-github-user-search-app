import { useState } from "react";
import searchIcon from "../assets/icon-search.svg";
import Button from "./Button";

const SearchBar = ({ error, setSearchUser }) => {
  const [search, setSearch] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
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
      <Button
        classname="search-btn"
        text="Search"
        handleOnClick={() => setSearchUser(search)}
      />
    </form>
  );
};
export default SearchBar;
