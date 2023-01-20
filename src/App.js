import './App.css';
import Navbar from './components/Header/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './components/SingleCoin/Coin';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dashboard/singleCoin/:id" element={<Coin />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
