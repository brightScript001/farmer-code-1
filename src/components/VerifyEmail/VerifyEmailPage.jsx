import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./VerifyEmailPage.css";
import logo from "../../assets/Onefarm-Tech-Logo 2.png";
import emailImage from "../../assets/VerifyEmail.png";

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userName } = location.state || { userName: "User" };

  const handleVerificationSuccess = () => {
    navigate("/verify-email-success", { state: { userName } });
  };

  return (
    <div className="verify-email-container">
      <div className="verify-email-image">
        <img src={emailImage} alt="Email Verification" />
      </div>
      <div className="verify-email-content">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Verify your email</h2>
        <p>
          Hi <span>{userName}</span>,
        </p>
        <p>
          We're thrilled to welcome you to the Onefarm Tech community! To access
          all the amazing features waiting for you, simply verify your email
          address. We just sent a verification link straight to your inbox.
          (check your spam folder just in case).
        </p>
        <p className="bold">Having trouble finding the email?</p>
        <p>
          No worries! Simply click the button below to request a new
          verification link.
        </p>
        <button className="resend-button" onClick={handleVerificationSuccess}>
          Request New Verification Link
        </button>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
