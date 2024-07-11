import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const List = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <table>
        <tbody>
          <tr className="list-row">
            <Tooltip title="Logo">
              <td className="td-image">
                <img src={coin.image} alt="" className="coin-logo" />
              </td>
            </Tooltip>
            <Tooltip title="Coin Name">
              <td className="name-col">
                <p className="coin-symbol">{coin.symbol}</p>
                <p className="coin-name">{coin.name}</p>
              </td>
            </Tooltip>

            {/* Conditional Rendering */}
            <Tooltip title="Price Change">
              {coin.price_change_percentage_24h > 0 ? (
                <td>
                  <div className="chip-flex">
                    <div className="price-chip">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className="icon-chip td-icon">
                      <TrendingUpRoundedIcon />
                    </div>
                  </div>
                </td>
              ) : (
                <td>
                  <div className="chip-flex">
                    <div className="price-chip chip-red">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className="icon-chip chip-red td-icon">
                      <TrendingDownRoundedIcon />
                    </div>
                  </div>
                </td>
              )}
            </Tooltip>

            <Tooltip title="Current Price">
              <td>
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
              </td>
            </Tooltip>
            <Tooltip title="Total Volume">
              <td>
                <p className="total-volume td-right-align">
                  {coin.total_volume.toLocaleString()}
                </p>
              </td>
            </Tooltip>
            <Tooltip title="Market Cap">
              <td>
                <p className="total-volume td-right-align">
                  ${coin.market_cap.toLocaleString()}
                </p>
              </td>
            </Tooltip>
          </tr>
        </tbody>
      </table>
    </Link>
  );
};

export default List;
