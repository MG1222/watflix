import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';

function App() {
const navLinks = [
  { to: "", name: "Lien 1" },
  { to: "", name: "Lien 2" },
  { to: "", name: "Lien 3" },
]

  return (
    <div className="App">
      <Navbar links={navLinks} brand="Watflix" />
    </div>
  );
}

export default App;
