import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ListRow from './components/List/ListRow';

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
      <Navbar links={navLinks} brand="Watflix" />
      <ListRow category="Les meilleurs films" movies={movies}/>
    </div>

  );
}

export default App;
