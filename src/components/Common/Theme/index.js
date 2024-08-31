import React from "react";
import "./style.css";
import { useTheme } from "../../../context/ThemeContext";

function Button() {
  const { darkMode, toggleDarkMode } = useTheme();
  return <div className={ darkMode ? "dark-mode" : "light-mode"} onClick={toggleDarkMode}>{darkMode ? "Dark Theme" : "Light Theme"}</div>;
}

export default Button;
