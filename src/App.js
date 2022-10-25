import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ListRow from './components/List/ListRow';
import MovieList from './components/MovieList/MovieList';
import Home from "./components/Home/Home";

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

const movies = [
  {title:"Harry Potter", img:"https://resize-parismatch.lanmedia.fr/var/pm/public/media/image/2022/02/28/18/Harry-Potter-ne-depose-pas-les-charmes.jpg?VersionId=WlNYB2ROPwFGXk20V3fFwDVl4Z3m8.T9", descriptionShort:"Les aventures d'un sorcier"},
  {title:"Avatar", img:"https://www.onefm.ch/wp-content/uploads/2022/07/718285-avatar-2-a-enfin-sa-date-de-sortie-en-france.jpg", descriptionShort:"Rencontre avec les Na'vi de Pandora"},
  {title:"Amelie Poulain", img:"https://img.culturebase.org/0/e/c/6/e/pic_1501241738_0ec6e19b58691880fc286016382e8d6c.jpeg", descriptionShort:"Le fabuleux destin d'Amélie Poulain"},
  {title:"Star Wars", img:"https://img-31.ccm2.net/shnC3qG52lm2pn9k7df9AXgCYAs=/1240x/smart/f416beeeb47e44cfb5c446ce22ac0875/ccmcms-hugo/10557653.jpg", descriptionShort:"Les aventures des utilisateurs de la force"}
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
      <ListRow category="Les meilleurs films" movies={movies}/>
    </div>


  );
}

export default App;
