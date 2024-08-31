import React, { useState } from "react";
import "./style.css";
function Button({text, onClick, outLined}) {
  const darkMode = useState(false)
  return <div className={ outLined ? "btn-outlined" : "btn"} onClick={onClick}>{text}</div>;
}

export default Button;
