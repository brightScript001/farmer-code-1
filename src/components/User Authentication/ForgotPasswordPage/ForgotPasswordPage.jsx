import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordPage.css";
import logo from "../../../assets/Onefarm-Tech-Logo 2.png";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send password reset email logic here
    console.log("Password reset email sent to:", email);
    navigate("/sent-email-page", { state: { email } });
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-content">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Forgot your password?</h2>
        <p>Enter your email address below to receive a password reset link.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address"
          />
          <button type="submit" className="send-button">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
