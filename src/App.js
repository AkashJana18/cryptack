
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';
import Compare from './pages/Compare';
import WatchlistPage from './pages/Watchlist';
import CoinPage from './pages/Coin';
import { useTheme } from './context/ThemeContext';

function App() {
  const {darkMode, _} = useTheme();
  const background = darkMode ? 'App theme-dark' : 'App theme-light';
  return (
    <div className={background}>
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
