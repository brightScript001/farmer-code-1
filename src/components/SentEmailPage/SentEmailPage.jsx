import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SentEmailPage.css";
import logo from "../../assets/Onefarm-Tech-Logo 2.png";
import SentEmailImage from "../../assets/Buyer BG.png";

const SentEmailPage = () => {
  const navigate = useNavigate("/reset-password");

  //useEffect(() => {
  // Any side effects can be managed here
  //  return () => {
  // Clean up if necessary
  //};
  // }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const handleSentEmail = () => {
    navigate("/reset-password");
  };

  return (
    <div className="sent-email-container">
      <div className="sent-email-image">
        <img src={SentEmailImage} alt="Background" />
      </div>
      <div className="sent-email-content">
        <img src={logo} alt="Logo" className="logo" />
        <h2>We sent you an email</h2>
        <p>
          We've sent a secure link to your email address. Just click the link in
          the email to create a new, strong password.
        </p>
        <p className="bold">Didn't see the email?</p>
        <p>
          No worries, it happens! Check your Spam or refresh your email account.
          If that doesn’t work, click the button below to request a new
          verification link and we will send it again.
        </p>
        <button className="button" onClick={handleSentEmail}>
          Password Reset Link
        </button>
      </div>
    </div>
  );
};

export default SentEmailPage;
