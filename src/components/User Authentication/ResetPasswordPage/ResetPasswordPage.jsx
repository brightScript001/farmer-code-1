import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons from react-icons library
import logo from "../../../assets/Onefarm-Tech-Logo 2.png";
import SentEmailImage from "../../../assets/VerifyEmail.png";
import "./ResetPasswordPage.css";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [formObj, setFormObj] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObj({ ...formObj, [name]: value });
  };

  const toggleShowPassword = () => {
    setFormObj({ ...formObj, showPassword: !formObj.showPassword });
  };

  const toggleShowConfirmPassword = () => {
    setFormObj({
      ...formObj,
      showConfirmPassword: !formObj.showConfirmPassword,
    });
  };

  const handleResetPassword = () => {
    // Implement password reset logic here
    console.log("Reset password logic goes here");
    navigate("/password-reset-success");
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-image">
        <img src={SentEmailImage} alt="Background" />
      </div>
      <div className="reset-password-content">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Reset Password</h2>
        <p>Create a strong password to keep your account secure.</p>
        <div className="input-container">
          <input
            type={formObj.showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={formObj.password}
            onChange={handleInputChange}
          />
          <span onClick={toggleShowPassword}>
            {formObj.showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
        <div className="input-container">
          <input
            type={formObj.showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formObj.confirmPassword}
            onChange={handleInputChange}
          />
          <span onClick={toggleShowConfirmPassword}>
            {formObj.showConfirmPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
        <button className="button" onClick={handleResetPassword}>
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
