import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.css";
import { useTheme } from "../../../context/ThemeContext";


export default function SelectDays({days, handleDaysChange}) {
  const {darkMode} = useTheme();
  const priceTextStyle = darkMode ? "select-days" : "select-days select-days-light";
  return (
    <div className={priceTextStyle} style={{"marginLeft": "1rem"}}>
      <p>Price change in </p>

      <Select
        sx={{
          height: "2.5rem",
          color: darkMode ? "var(--white)" : "var(--black)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: darkMode ? "var(--blue)" : "var(--blue)",
          },
          "& .MuiSvgIcon-root": {
            color: darkMode ? "var(--white)" : "var(--black)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
        value={days}
        label="days"
        onChange={handleDaysChange}
      >
        <MenuItem value={7}>7 days</MenuItem>
        <MenuItem value={30}>30 days</MenuItem>
        <MenuItem value={60}>60 days</MenuItem>
        <MenuItem value={90}>90 days</MenuItem>
        <MenuItem value={120}>120 days</MenuItem>
      </Select>
    </div>
  );
}
