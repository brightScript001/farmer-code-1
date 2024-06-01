import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoleSelection from "./components/RoleSelection/RoleSelection";
import BuyerSignUp from "./components/SignUp/BuyerSignUp/BuyerSignUp";
import SellerSignUp from "./components/SignUp/SellerSignUp/SellerSignUp";
import VerifyEmailPage from "./components/VerifyEmail/VerifyEmailPage";
import VerifyEmailSuccessPage from "./components/Verified/VerifyEmailSuccessPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/buyersignup" element={<BuyerSignUp />} />
        <Route path="/sellersignup" element={<SellerSignUp />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route
          path="/verify-email-success"
          element={<VerifyEmailSuccessPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
