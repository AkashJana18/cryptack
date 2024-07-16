import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Tabs from "../components/Common/Dashboard/Tabs";
import Search from "../components/Common/Dashboard/Search";
import Pagination from "../components/Common/Dashboard/Pagination";
import Loader from "../components/Common/Loader";

import BackToTop from "../components/Common/BackToTop";
import { get100Coins } from "../functions/get100Coins";
import Footer from "../components/Common/Footer";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (e, p) => {
    setPage(p);
    var index = (p - 1) * 10;
    setPaginatedCoins(coins.slice(index, index + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  };
  return (
    <>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <Tabs coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <Pagination page={page} handlePageChange={handlePageChange} />
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default DashboardPage;
