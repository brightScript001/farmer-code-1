// src/components/LoginForm/LoginForm.js
import React, { useState } from "react";
import "./LoginForm.css";
import Input from "../Input/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../../assets/Onefarm-Tech-Logo 2.png";
import SellerBg from "../../../assets/Seller BG.png";
import BuyerBg from "../../../assets/Buyer BG.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (role === "") {
      alert("Please select a role.");
      return;
    }
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <div className="login-image">
          <img src={role === "Buyer" ? BuyerBg : SellerBg} alt="Background" />
        </div>
        <div className="login-form">
          <img src={logo} alt="Logo" className="logo" />
          <h2>Login to your account</h2>
          <p>
            Don’t have an account? <a href="//role-selection">SignUp here</a>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="role-selection">
              <label htmlFor="role">Role:</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
            </div>
            <Input
              type="email"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type={showPassword ? "text" : "password"}
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              icon={
                showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(false)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(true)} />
                )
              }
            />
            <p className="forgot-password">
              Forgot password?
              <a href="/forgot-password"> Click here</a>
            </p>
            <button type="submit" className="login-button" disabled={!role}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
