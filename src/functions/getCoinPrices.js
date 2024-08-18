import axios from "axios";

export const getCoinPrices = (id, days, priceType)=>{
    
    const options = {
        method: 'GET',
        url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
        params: {vs_currency: 'usd', days: `${days}`},
        headers: {accept: 'application/json', 'x-cg-demo-api-key': process.env.COINGECKO_API_KEY}
    };
    
    const prices = axios
      .request(options)
      .then(function (response) {
        return response.data[priceType];
      })
      .catch(function (error) {
        console.error(error);
      });

      return prices;
}