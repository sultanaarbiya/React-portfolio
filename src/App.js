import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import MyServices from './Components/MyServices';
import MyPortfolio from './Components/MyPortfolio';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
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
