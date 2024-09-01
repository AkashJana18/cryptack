import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import { useTheme } from "../context/ThemeContext";
const WatchlistPage = () => {
  const {darkMode} = useTheme();
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "60vh",
          color: darkMode ? "var(--white)" : "var(--black)",
        }}
      >
        <h1>Watchlist page is coming soon</h1>
      <h3>Stay tuned!</h3>
      </div>

      <Footer />
    </div>
  );
};

export default WatchlistPage;
