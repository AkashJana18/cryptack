import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { convertNumber } from "../../../../functions/convertNumber";
import { useTheme } from "../../../../context/ThemeContext";

const List = ({ coin }) => {
  const {darkMode} = useTheme();
  const listRowStyles = darkMode ? "list-row" : "list-row list-row-light";
  const totalVolumeStyles = darkMode ? "total-volume-list td-right-align" : "total-volume-list total-volume-list-light td-right-align";
  const coinSymbolStyles = darkMode ? "coin-symbol" : "coin-symbol coin-symbol-light";
  return (
    <table>
      <tbody>
        <tr className={listRowStyles}>
          <Tooltip title="Logo">
            <td className="td-image">
              <Link to={`/coin/${coin.id}`}>
                <img src={coin.image} alt="" className="coin-logo" />
              </Link>
            </td>
          </Tooltip>
          <Tooltip title="Coin Name">
            <td className="td-info">
              <Link to={`/coin/${coin.id}`}>
                <p className={coinSymbolStyles}>{coin.symbol}</p>
                <p className="coin-name">{coin.name}</p>
              </Link>
            </td>
          </Tooltip>

          {/* Conditional Rendering */}
          <Tooltip title="Price Change">
            <td>
              <Link to={`/coin/${coin.id}`}>
                <div className="chip-flex">
                  {coin.price_change_percentage_24h > 0 ? (
                    <>
                      <div className="price-chip">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </div>
                      <div className="icon-chip td-icon">
                        <TrendingUpRoundedIcon />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="price-chip chip-red">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </div>
                      <div className="icon-chip chip-red td-icon">
                        <TrendingDownRoundedIcon />
                      </div>
                    </>
                  )}
                </div>
              </Link>
            </td>
          </Tooltip>

          <Tooltip title="Current Price">
            <td>
              <Link to={`/coin/${coin.id}`}>
                <h3
                  className="coin-price td-center-align"
                  style={{
                    color:
                      coin.price_change_percentage_24h > 0
                        ? "var(--green)"
                        : "var(--red)",
                  }}
                >
                  ${coin.current_price.toLocaleString()}
                </h3>
              </Link>
            </td>
          </Tooltip>
          <Tooltip title="Total Volume">
            <td>
              <Link to={`/coin/${coin.id}`}>
                <p className={totalVolumeStyles}>
                  {coin.total_volume.toLocaleString()}
                </p>
                <p className="mobile">{convertNumber(coin.total_volume)}</p>
              </Link>
            </td>
          </Tooltip>
          <Tooltip title="Market Cap">
            <td>
              <Link to={`/coin/${coin.id}`}>
                <p className={totalVolumeStyles}>
                  ${coin.market_cap.toLocaleString()}
                </p>
                <p className="mobile">${convertNumber(coin.market_cap)}</p>
              </Link>
            </td>
          </Tooltip>
        </tr>
      </tbody>
    </table>
  );
};

export default List;
