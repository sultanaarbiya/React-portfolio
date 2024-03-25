import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import MyServices from './Components/MyServices/MyServices';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';
import Contact from './Components/Contact/Contact';
import Navbar from './Header/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Routes>
        
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/myservices" element={<MyServices/>} />
          <Route path="/myportfolio" element={<MyPortfolio/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
