import React, { useState } from "react";
import "./style.css";
import { useTheme } from "../../../context/ThemeContext";

const CoinInfo = ({ heading, desc }) => {
  const { darkMode } = useTheme();
  const [flag, setFlag] = useState(false);
  const shortDesc =
    desc.slice(0, 410) +
    "<span style='color: var(--grey)'> Read more...</span>";
  const wrapperStyle = darkMode ? "wrapper-dark" : "wrapper-light";
  const coinInfoStyle = darkMode ? "coin-info-desc" : "coin-info-desc coin-info-desc-light";

  return (
    <div className={wrapperStyle}>
      <h2 className="coin-info-heading">{heading}</h2>
      {desc.length > 410 ? (
        <p
          className={coinInfoStyle}
          dangerouslySetInnerHTML={{ __html: flag ? desc : shortDesc }}
          onClick={() => setFlag(!flag)}
        ></p>
      ) : (
        <p className={coinInfoStyle} dangerouslySetInnerHTML={{ __html: desc }}></p>
      )}
    </div>
  );
};

export default CoinInfo;
