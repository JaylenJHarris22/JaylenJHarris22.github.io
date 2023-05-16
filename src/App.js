import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero-Section";
import AboutMeSection from "./Components/About-Me-Section";
import Projects from "./Components/Projects";

function App() {
  return (
    <div>
      <Navbar/>
      <section><HeroSection/></section>
      <section><AboutMeSection/></section>
      <section><Projects/></section>
    </div>
  );
}

export default App;
