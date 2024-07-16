import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Grid = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.div
        className={`grid ${coin.price_change_percentage_24h < 0 && "grid-red"}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: .3 }}
      >
        <div
          className={`grid-container ${
            coin.price_change_percentage_24h < 0 && "grid-container-red"
          }`}
        >
          <div className="info-flex">
            <img src={coin.image} alt="" className="coin-logo" />
            <div className="name-col">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </div>

          {/* Conditional Rendering */}
          {coin.price_change_percentage_24h > 0 ? (
            <div className="chip-flex">
              <div className="price-chip">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip">
                <TrendingUpRoundedIcon />
              </div>
            </div>
          ) : (
            <div className="chip-flex">
              <div className="price-chip chip-red">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip chip-red">
                <TrendingDownRoundedIcon />
              </div>
            </div>
          )}
          <div className="info-container">
            <h3
              className="coin-price"
              style={{
                color:
                  coin.price_change_percentage_24h > 0
                    ? "var(--green)"
                    : "var(--red)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
            <p className="total-volume">
              Total Volume : {coin.total_volume.toLocaleString()}
            </p>
            <p className="total-volume">
              Market Cap : ${coin.market_cap.toLocaleString()}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Grid;
