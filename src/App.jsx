import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar";
import RoleSelection from "./components/User Authentication/RoleSelection/RoleSelection";
import BuyerSignUp from "./components/User Authentication/SignUp/BuyerSignUp/BuyerSignUp";
import SellerSignUp from "./components/User Authentication/SignUp/SellerSignUp/SellerSignUp";
import VerifyEmailPage from "./components/User Authentication/VerifyEmail/VerifyEmailPage";
import VerifyEmailSuccessPage from "./components/User Authentication/Verified/VerifyEmailSuccessPage";
import Login from "./components/User Authentication/Login/Login";
import ForgotPasswordPage from "./components/User Authentication/ForgotPasswordPage/ForgotPasswordPage";
import SentEmailPage from "./components/User Authentication/SentEmailPage/SentEmailPage";
import ResetPasswordPage from "./components/User Authentication/ResetPasswordPage/ResetPasswordPage";
import PasswordResetSuccessPage from "./components/User Authentication/PasswordResetSuccessPage/PasswordResetSuccessPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Navbar/> */}
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/role-selection" element={<RoleSelection />} />
            <Route path="/buyersignup" element={<BuyerSignUp />} />
            <Route path="/sellersignup" element={<SellerSignUp />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />
            <Route
              path="/verify-email-success"
              element={<VerifyEmailSuccessPage />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/sent-email-page" element={<SentEmailPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route
              path="/password-reset-success"
              element={<PasswordResetSuccessPage />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
