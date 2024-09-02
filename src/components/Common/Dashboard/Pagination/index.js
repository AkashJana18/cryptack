import React from "react";
import Pagination from "@mui/material/Pagination";
import "./style.css";
import { useTheme } from "../../../../context/ThemeContext";

export default function ({ page, handlePageChange }) {
  const {darkMode} = useTheme();
  const colorStyle = darkMode ? "#fff" : "#000";
  return (
    <div className="pagination-div">
      <Pagination
        sx={{
          "& .MuiPaginationItem-text": {
            color: `${colorStyle} !important`,
            border: "1px solid var(--grey)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--blue)",
            borderColor: "var(--blue)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
        count={10}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
