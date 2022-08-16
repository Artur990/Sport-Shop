import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Products from "./Pages/Products/Products";
import DlaczegoWartoUprawiacSport from "./Pages/DoingSport/DoingSport";
import Gym from "./Pages/DoingSport/Gym/Gym";
import Run from "./Pages/DoingSport/Run/Run";
import Diet from "./Pages/DoingSport/Diets/Diet";
import Form from "./Pages/Form/Form";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dlaczegoWartoUprawiacSport"
          element={<DlaczegoWartoUprawiacSport />}
        />
        <Route path="/sklep" element={<Products />} />
        <Route path="plantreningowy/bieganie" element={<Run />} />
        <Route path="plantreningowy/silownia" element={<Gym />} />
        <Route path="plantreningowy/dieta" element={<Diet />} />
        <Route path="koszyk" element={<Cart />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
