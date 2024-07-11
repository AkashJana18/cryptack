import axios from "axios";

export const getCoinData = (id) => {
  const options = {
    method: "GET",
    url: `https://api.coingecko.com/api/v3/coins/${id}`,
    headers: { accept: "application/json" },
  };

  const myCoin = axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return myCoin;
};
