import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';          // Import the page components
import Safety from './Pages/Safety';
import Amenities from './Pages/Amenities';
import Educational from './Pages/Educational';
import DiveSite from './Pages/DiveShop';
import Navbar from './Components/Navbar'; 

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/educational" element={<Educational />} />
          <Route path="/diveshop" element={<DiveSite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
