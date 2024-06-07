
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import AnimatedRoutes from './components/AnimatedRoutes';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <BrowserRouter>
      <ParticleBackground>
        <NavBar/>
        <AnimatedRoutes/>
      </ParticleBackground>
    </BrowserRouter>
  );
}

export default App;
