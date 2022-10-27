import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import Filmes from "./components/pages/Filmes";
import Personagens from "./components/pages/Personagens";
import Planetas from "./components/pages/Planetas";
import Naves from "./components/pages/Naves";
import Veiculos from "./components/pages/Veiculos";
import Especies from "./components/pages/Especies";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planetas" element={<Planetas />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/personagens" element={<Personagens />} />
          <Route path="/naves" element={<Naves />} />
          <Route path="/veiculos" element={<Veiculos/>} />
          <Route path="/especies" element={<Especies/>} />
        </Routes>
      </Container>
    </Router>
  );
}
  