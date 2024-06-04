import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./VerifyEmailSuccessPage.css";
import logo from "../../../assets/Onefarm-Tech-Logo 2.png";
import emailImage from "../../../assets/VerifyEmail.png";

const VerifyEmailSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userName } = location.state || { userName: "User" };
  const [countdown, setCountdown] = useState(40);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/login");
    }, 40000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="verify-email-success-container">
      <div className="verify-email-success-image">
        <img src={emailImage} alt="Email Verification Success" />
      </div>
      <div className="verify-email-success-content">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Email verification successful</h2>
        <p>
          Hi <span>{userName}</span> ,
        </p>
        <p>
          Your email has been verified successfully, We will be redirecting you
          to login to your dashboard and start buying fresh farm products.
        </p>
        <p>Redirecting in {countdown}s</p>
        <p className="bold">You have not been redirected yet?</p>
        <p>
          No worries! Simply click the button below to login to your account.
        </p>
        <button className="login-button" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default VerifyEmailSuccessPage;
