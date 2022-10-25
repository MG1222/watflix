import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import Home from "./components/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import Search from './components/search';
import Oeuvres from './components/oeuvres';
import Details from './components/details';
import Favoris from './components/favoris';

function App() {

  const navlinks = [
    {to:"/search", name: "Rechercher"},
    {to:"/oeuvres", name: "Oeuvres"},
    {to:"/details", name: "Détails"},
    {to:"/favoris", name: "Favoris"},
  ];


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar brand="Watflix" links={navlinks}/>}>
            <Route index element={<Home/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="oeuvres" element={<Oeuvres/>}/>
            <Route path="details" element={<Details/>}/>
            <Route path="favoris" element={<Favoris/>}/>
          </Route>
        </Routes>
      </Router>
      
    </div>


  );
}

export default App;
