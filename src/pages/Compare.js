import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SelectCoins from "../components/Common/ComparePage/SelectCoins";
import SelectDays from "../components/Coin/SelectDays";
import { getCoinPrices } from "../functions/getCoinPrices";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/convertObject";
import Loader from "../components/Common/Loader";
import List from "../components/Common/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { settingChartData } from "../functions/settingChartData";
import LineChart from "../components/Coin/CoinChart";
import TogglePriceType from "../components/Coin/PriceType";
import Footer from "../components/Common/Footer";

const Compare = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState();

  const handleDaysChange = async (e) => {
    setIsLoading(true);
    setDays(e.target.value);
    const prices1 = await getCoinPrices(crypto1, e.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, e.target.value, priceType);
    if (prices1.length > 0 && prices2.length > 0) {
      settingChartData(setChartData, prices1, prices2);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [crypto1, crypto2, days, priceType]); // Add dependencies here   

  async function getData() {
    setIsLoading(true); 
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);
    if (data1) {
      coinObject(setCrypto1Data, data1);
    }
    if (data2) {
      coinObject(setCrypto2Data, data2);
    }
    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      if (prices1.length > 0 && prices2.length > 0) {
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
      }
    }
  }

  const handleCoinChange = async (e, isCoin2) => {
    setIsLoading(true);
    const newValue = e.target.value;
    
    if (isCoin2) {
      setCrypto2(newValue);
      const data2 = await getCoinData(newValue);
      if (data2) {
        coinObject(setCrypto2Data, data2);
      }
    } else {
      setCrypto1(newValue);
      const data1 = await getCoinData(newValue);
      if (data1) {
        coinObject(setCrypto1Data, data1);
      }
    }
  
    const prices1 = await getCoinPrices(crypto1, days, priceType);
    const prices2 = await getCoinPrices(crypto2, days, priceType);
    
    if (prices1.length > 0 && prices2.length > 0) {
      settingChartData(setChartData, prices1, prices2);
      setIsLoading(false);
    }
  };
  

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1, days, newType);
    const prices2 = await getCoinPrices(crypto2, days, newType);

    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="selection-components">
            <SelectCoins
              crypto1={crypto1}
              handleCoinChange={handleCoinChange}
              crypto2={crypto2}
            />
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <List coin={crypto1Data} />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <List coin={crypto2Data} />
          </div>
          <div style={{"marginLeft":"50px", "marginRight": "50px", "backgroundColor": "var(--darkgrey)", "padding": "2rem"}}>
            <div>
              <TogglePriceType
                priceType={priceType}
                handlePriceTypeChange={handlePriceTypeChange}
              />
            </div>
            <div>
              <LineChart
                chartData={chartData}
                priceType={priceType}
                multiAxis={true}
              />
            </div>
          </div>

          <div className="grey-wrapper">
            <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          </div>
          <div className="grey-wrapper">
            <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Compare;
