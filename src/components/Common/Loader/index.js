import React from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import "./style.css";
const Loader = () => {
  return (
    <div className="loader-container">
      <CircularProgress />
    </div>
  );
};

export default Loader;
