import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Components/NavBar.js";
import { Banner } from "./Components/Banner.js";
import { Skills } from "./Components/Skills.js";
import { Projects } from "./Components/Projects.js";
import { Contact } from "./Components/Contact.js";
import { Footer } from "./Components/Footer.js";
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="personal-portfolio">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App; 