import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PasswordResetSuccessPage.css";
import logo from "../../../assets/Onefarm-Tech-Logo 2.png";
import SentEmailImage from "../../../assets/Buyer BG.png";

const PasswordResetSuccessPage = () => {
  const navigate = useNavigate();
  const [redirectTimer, setRedirectTimer] = useState(30);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (redirectTimer > 0) {
        setRedirectTimer(redirectTimer - 1);
      } else {
        navigate("/login");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [redirectTimer, navigate]);

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="password-reset-success-container">
      <div className="password-reset-success-image">
        <img src={SentEmailImage} alt="Background" />
      </div>
      <div className="password-reset-success-content">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Password Reset Successful</h2>
        <p>
          Your password has been reset successfully. We will redirect you to
          login to your account.
        </p>
        <p>Redirecting in {redirectTimer}s</p>
        <p>
          If redirection does not work, click the button below to login to your
          account.
        </p>
        <button className="button" onClick={handleLoginRedirect}>
          Login
        </button>
      </div>
    </div>
  );
};

export default PasswordResetSuccessPage;
