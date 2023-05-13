import {
  BrowserRouter, Outlet, Routes, Route,
} from 'react-router-dom';
import './styles/style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <BrowserRouter basename="/countries-navigator">
          <Navbar />
          <Outlet />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries/:countryCode" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
