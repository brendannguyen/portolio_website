
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import ParticleBackground from './components/ParticleBackground';
import MediaQuery from 'react-responsive'

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import FilmmakingPage from './pages/FilmmakingPage';
import SoftwarePage from './pages/SoftwarePage';
import ContactPage from './pages/ContactPage';
import MobileNavBar from './components/MobileNavBar';

function App() {
  return (
    <BrowserRouter>
      <ParticleBackground>
      <MediaQuery minWidth={1025}><NavBar/></MediaQuery>
      <MediaQuery maxWidth={1024}><MobileNavBar/></MediaQuery>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/software" element={<SoftwarePage/>} />
            <Route path="/filmmaking" element={<FilmmakingPage/>} />
            <Route path="/blog" element={<BlogPage/>} />
        </Routes>
      </ParticleBackground>
    </BrowserRouter>
  );
}

export default App;
