import React, { useState } from "react";
import "./style.css";
const CoinInfo = ({ heading, desc }) => {
  const [flag, setFlag] = useState(false);
  const shortDesc =
    desc.slice(0, 410) +
    "<span style='color: var(--grey)'> Read more...</span>";

  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      {desc.length > 410 ? (
      <p
        className="coin-info-desc"
        dangerouslySetInnerHTML={{ __html: flag ? desc : shortDesc }}
        onClick={() => {
          setFlag(!flag);
        }}
      ></p>) : (
        <p className="coin-info-desc" dangerouslySetInnerHTML={{__html: desc}}></p>
      )}
    </div>
  );
};

export default CoinInfo;
