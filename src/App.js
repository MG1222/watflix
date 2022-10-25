import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Search from './components/search';
import Oeuvres from './components/oeuvres';
import Details from './components/details';
import Favoris from './components/favoris';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/oeuvres" element={<Oeuvres/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/favoris" element={<Favoris/>}/>
      </Routes>
    </Router>
  );
}

export default App;
