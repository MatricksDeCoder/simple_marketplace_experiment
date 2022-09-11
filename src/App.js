import './App.css';
import Marketplace from './components/Marketplace';
import Profile from './components/Profile';
import SellNFT from './components/SellNFT';
import NFTPage from './components/NFTpage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Marketplace />}/>
            <Route path="/nftPage" element={<NFTPage />}/>        
            <Route path="/profile" element={<Profile />}/>
            <Route path="/sellNFT" element={<SellNFT />}/>             
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
