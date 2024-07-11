
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';
import Compare from './pages/Compare';
import WatchlistPage from './pages/Watchlist';
import CoinPage from './pages/Coin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
