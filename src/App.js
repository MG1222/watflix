import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import Home from "./components/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import Search from './components/search';
import Oeuvres from './components/oeuvres';
import Details_movie from './components/details_movie';
import Details_serie from './components/details_serie';
import Favoris from './components/Favoris/Favoris';

function App() {

  const navlinks = [
    {to:"/search", name: "Rechercher"},
    {to:"/oeuvres", name: "Oeuvres"},
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
            <Route path="/details/movie/:id" element={<Details_movie/>}/>
            <Route path="/details/tv/:id" element={<Details_serie/>}/>
            <Route path="favoris" element={<Favoris/>}/>
          </Route>
        </Routes>
      </Router>
      
    </div>


  );
}

export default App;
