import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero-Section";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section><HeroSection/></section>
      <section></section>
      <section></section>
    </div>
  );
}

export default App;
