import React from "react";
import "./style.css";
function Button({text, onClick, outLined}) {
  return <div className={ outLined ? "btn-outlined" : "btn"} onClick={onClick}>{text}</div>;
}

export default Button;
