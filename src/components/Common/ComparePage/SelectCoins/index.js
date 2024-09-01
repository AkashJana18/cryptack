import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { get100Coins } from "../../../../functions/get100Coins";
import "./style.css";
import { useTheme } from '../../../../context/ThemeContext';

export default function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
  const [allCoins, setAllCoins] = useState([]);
  const {darkMode} = useTheme();
  const textStyle = darkMode ? "text" : "text-white";
  const style = {
    height: "2.5rem",
    color: darkMode ? "var(--white)" : "var(--black)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: darkMode ? "var(--white)" : "var(--black)",
    },
    "& .MuiSvgIcon-root": {
      color: darkMode ? "var(--white)" : "var(--black)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  async function getData() {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="select-coins">
      <p className={textStyle}>Crypto 1</p>
      <Select
        sx={style}
        value={crypto1}
        label="crypto1"
        onChange={(e) => handleCoinChange(e, false)}
      >
        {allCoins
          .filter((item) => item.id != crypto2)
          .map((coin, i) => (
            <MenuItem value={coin.id} key={i}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>

      <p className={textStyle}>Crypto 2</p>
      <Select
        sx={style}
        value={crypto2}
        label="crypto2"
        onChange={(e) => handleCoinChange(e, true)}
      >
        {allCoins
          .filter((item) => item.id != crypto1)
          .map((coin, i) => (
            <MenuItem value={coin.id} key={i}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
}
