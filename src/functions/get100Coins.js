import axios from "axios";

export const get100Coins = () => {
  const options = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1",
    headers: { accept: "application/json" },
  };

  const myCoins = axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

    return myCoins;
};
