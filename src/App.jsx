import './App.css'
import NavBar from "./NavBar";
import VoliInPartenza from "./VoliInPartenza";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import MainComponent from './MainComponent';
import Compagnie from "./Compagnie"
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />  {/* Mostra la barra di navigazione */}
      <Routes>
        <Route path="/" element={<MainComponent />} /> {/* Pagina principale */}
        <Route path="/voliInPartenza" element={<VoliInPartenza />} />  {/* Pagine specifiche */}
        <Route path="/compagnie" element={<Compagnie/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
    
  );
}

export default App;
