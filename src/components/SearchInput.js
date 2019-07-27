import React, { useState } from "react";

const SearchInput = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  const resetSearchInput = () => {
    setSearchInput("");
  };

  const handleSearchInputChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSearchOnClick = e => {
    e.preventDefault();
    search(searchInput);
    resetSearchInput();
  };

  return (
    <form>
      <input
        value={searchInput}
        onChange={handleSearchInputChange}
        type="text"
      />
      <input onClick={handleSearchOnClick} type="submit"/>
    </form>
  );
};

export default SearchInput;