import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';
import Home from "./components/Home/Home";


function App() {
const navLinks = [
  { to: "", name: "Lien 1" },
  { to: "", name: "Lien 2" },
  { to: "", name: "Lien 3" },
]

  return (
    <div className="App">
      <Navbar links={navLinks} brand="Watflix" />
     <Home />

    </div>

  );
}

export default App;
