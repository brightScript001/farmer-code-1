import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoleSelection from "./components/RoleSelection/RoleSelection";
import BuyerSignUp from "./components/BuyerSignUp/BuyerSignUp";
import SellerSignUp from "./components/SellerSignUp/SellerSignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/buyersignup" element={<BuyerSignUp />} />
        <Route path="/sellersignup" element={<SellerSignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
