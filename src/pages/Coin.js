import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import { coinObject } from "../functions/convertObject";
import List from "../components/Common/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/CoinChart";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import TogglePriceType from "../components/Coin/PriceType";
import Footer from "../components/Common/Footer";
import { useTheme } from "../context/ThemeContext";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState();
  const [priceType, setPriceType] = useState("prices");
  const {darkMode} = useTheme();
  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id, days, newType);
    if(prices.length > 0){
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
    
  };

  const handleDaysChange = async (e)=>{
    setIsLoading(true);
    setDays(e.target.value);
    const prices = await getCoinPrices(id, e.target.value, priceType);
    if(prices.length > 0){
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);

    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices.length > 0) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  }

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div style={{"display": "flex", "justifyContent": "center"}}>
            <List coin={coinData} />
          </div>
          <div style={{ 
            margin: "1rem 3rem", 
            backgroundColor: darkMode ? "var(--darkgrey)" : "var(--lightgrey)", 
            borderRadius: "20px",
            padding: "1rem",
          }}>
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <LineChart chartData={chartData} />
          </div>

          <div className="wrapper">
            <CoinInfo heading={coinData.name} desc={coinData.desc} />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default CoinPage;
