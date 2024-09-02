import React, { useState } from "react";
import "./style.css";
import { useTheme } from "../../../context/ThemeContext";

function Button({text, onClick, outLined}) {
  const {darkMode} = useTheme();
  if (!outLined) {
    return <div className="btn" onClick={onClick}>{text}</div>;
  }
  const darkButtonStyles = darkMode ? 'btn-outlined-dark' : 'btn-outlined-light';
  return <div className={`btn-outlined ${darkButtonStyles}`} onClick={onClick}>{text}</div>;
}

export default Button;
