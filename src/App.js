import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Products from "./Pages/Products/Products";
import DlaczegoWartoUprawiacSport from "./Pages/dlaczegoWartoUprawiacSport/DlaczegoWartoUprawiacSport";
import Plany from "./Pages/Plany/Plany";
import Silownia from "./Pages/Plany/Silownia";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dlaczegoWartoUprawiacSport"
          element={<DlaczegoWartoUprawiacSport />}
        />
        <Route path="/about" element={<Products />} />

        <Route path="plantreningowy" element={<Plany />} />
        <Route path="plantreningowy/silownia" element={<Silownia />} />

        <Route path="profile" element={<Cart />}>
          <Route path="profile/Form" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
