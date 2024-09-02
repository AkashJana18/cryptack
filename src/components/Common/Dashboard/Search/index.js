import React from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useTheme } from "../../../../context/ThemeContext";

const Search = ({search, onSearchChange}) => {
  const {darkMode, _} = useTheme()
  const styles = darkMode ? 'search-flex search-flex-dark' : 'search-flex search-flex-light'
  return (
    <div className={styles}>
      <SearchRoundedIcon />
      <input placeholder="Search" type="text" value={search} onChange={onSearchChange} />
    </div>
  );
};

export default Search;
