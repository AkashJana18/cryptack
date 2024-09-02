import React from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import "./style.css";
import { useTheme } from "../../../context/ThemeContext";
const Loader = () => {
  const {darkMode} = useTheme();
  const loaderStyle = darkMode ? "loader-container" : "loader-container loader-container-light";
  return (
    <div className={loaderStyle}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
