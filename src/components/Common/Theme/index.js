import React from "react";
import Switch from "@mui/material/Switch"; // Import the MUI Switch component
import { useTheme } from "../../../context/ThemeContext";

function Button() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Switch
      checked={darkMode}
      onChange={toggleDarkMode}
      color="primary" // Change this to customize the switch color
      inputProps={{ 'aria-label': 'toggle dark mode' }}
    />
  );
}

export default Button;

