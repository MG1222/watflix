import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Home from './components/home';
import Search from './components/search';
import Oeuvres from './components/oeuvres';
import Details from './components/details';
import Favoris from './components/favoris';

function App() {
const navLinks = [
  { to: "", name: "Lien 1" },
  { to: "", name: "Lien 2" },
  { to: "", name: "Lien 3" },
]

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/oeuvres" element={<Oeuvres/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/favoris" element={<Favoris/>}/>
        </Routes>
      </Router>

      <Navbar links={navLinks} brand="Watflix" />

    </div>

    
  );
}

export default App;
