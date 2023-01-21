import './App.css';
import Navbar from './components/Header/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './components/SingleCoin/Coin';
import Page404 from './components/NotFound/Page404';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dashboard/singleCoin/:id" element={<Coin />} />
          <Route exact path="/*" element={<Page404 />} />
          <Route exact path="/dashboard/*" element={<Page404 />} />
          <Route exact path="/dashboard/singleCoin/:id/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
