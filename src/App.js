<<<<<<< HEAD

import React from 'react';
=======
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
>>>>>>> dev

function App() {
const navLinks = [
  { to: "", name: "Lien 1" },
  { to: "", name: "Lien 2" },
  { to: "", name: "Lien 3" },
]

  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
          <p>Hello world</p>
      </header>



=======
      <Navbar links={navLinks} brand="Watflix" />
>>>>>>> dev
    </div>

  );
}

export default App;
