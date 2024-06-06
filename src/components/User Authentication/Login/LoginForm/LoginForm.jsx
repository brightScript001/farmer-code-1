import React, { useState } from "react";
import "./LoginForm.css";
import Input from "../Input/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../../../assets/Onefarm-Tech-Logo 2.png";
import SellerBg from "../../../../assets/Seller BG.png";
import BuyerBg from "../../../../assets/Buyer BG.png";

const LoginForm = () => {
  const [formObj, setFormObj] = useState({
    email: "",
    password: "",
    showPassword: false,
    role: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formObj.role === "") {
      alert("Please select a role.");
      return;
    }
  };

  const handleInputChange = (event, fieldName) => {
    setFormObj({ ...formObj, [fieldName]: event.target.value });
  };

  const toggleShowPassword = () => {
    setFormObj({ ...formObj, showPassword: !formObj.showPassword });
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <div className="login-image">
          <img
            src={formObj.role === "Buyer" ? BuyerBg : SellerBg}
            alt="Background"
          />
        </div>
        <div className="login-form">
          <img src={logo} alt="Logo" className="logo" />
          <h2>Login to your account</h2>
          <p>
            Don’t have an account? <a href="/role-selection">SignUp here</a>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="role-input">
              <label htmlFor="role">Role:</label>
              <select
                id="role"
                value={formObj.role}
                onChange={(e) => handleInputChange(e, "role")}
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
              value={formObj.email}
              onChange={(e) => handleInputChange(e, "email")}
              required
            />
            <Input
              type={formObj.showPassword ? "text" : "password"}
              label="Password"
              value={formObj.password}
              onChange={(e) => handleInputChange(e, "password")}
              required
              icon={
                formObj.showPassword ? (
                  <FaEyeSlash onClick={toggleShowPassword} />
                ) : (
                  <FaEye onClick={toggleShowPassword} />
                )
              }
            />
            <p className="forgot-password">
              Forgot password?
              <a href="/forgot-password"> Click here</a>
            </p>
            <button
              type="submit"
              className="login-button"
              disabled={!formObj.role}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
