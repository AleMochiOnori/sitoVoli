import './App.css'
import React from 'react';
import NavBar from "./NavBar";
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // Crea una root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


function App() {
  
  
  return (
    <>
     <BrowserRouter>
      <NavBar />  {/* Mostra la barra di navigazione */}
      <Routes>
        <Route path="/" element={<Compagnie />} /> 
        <Route path="/voli" element={<Voli />} />  
        <Route path="voliInPartenza" element={<VoliInPartenza />} />  
      </Routes>
    </BrowserRouter>
  );
    </>
  )
}


export default App
