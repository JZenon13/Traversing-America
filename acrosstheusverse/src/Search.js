import React, { useState } from "react";

const Search = ({ setSearch }) => {
  const [searchStatus, setSearchStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchStatus);
  };

  return (
    <form className="text-center" onSubmit={handleSubmit}>
      States:{" "}
      <input
        type="text"
        id="search"
        placeholder="search state"
        value={searchStatus}
        onChange={(e) => setSearchStatus(e.target.value)}
      />
      <button type="submit">search</button>
    </form>
  );
};

export default Search;
