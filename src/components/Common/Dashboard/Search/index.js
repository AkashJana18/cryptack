import React from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Search = ({search, onSearchChange}) => {
  return (
    <div className="search-flex">
      <SearchRoundedIcon />
      <input placeholder="Search" type="text" value={search} onChange={onSearchChange} />
    </div>
  );
};

export default Search;
