import { useState } from "react";
import searchIcon from "../assets/icon-search.svg";
import Button from "./Button";

const SearchBar = ({
  setIsLoading,
  error,
  setError,
  searchUser,
  setSearchUser,
}) => {
  const [search, setSearch] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchUser(search);
    setIsLoading(true);
  };

  return (
    <form onSubmit={handleFormSubmit} id="search-bar">
      <label htmlFor="username">
        <img
          className="search-icon"
          src={searchIcon}
          alt="magnifying glass icon that will help to search"
        />
      </label>

      <input
        value={search}
        autoComplete="off"
        onChange={(e) => {
          const typedText = e.target.value;
          setSearch(e.target.value);
          // remove no results msg when the input is clear
          if (typedText === "") {
            setError(null);
          }
        }}
        type="text"
        name="username"
        id="username"
        placeholder="Search Github username..."
      />
      <span className="user-not-found-msg">{error && "No results"}</span>
      <Button classname="search-btn" text="Search" />
    </form>
  );
};
export default SearchBar;
