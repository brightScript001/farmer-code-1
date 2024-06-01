import React, { useState } from "react";
import "./SignUpForm.css";
import Input from "../Input/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../../assets/Onefarm-Tech-Logo 2.png";
import SellerBg from "../../../assets/Seller BG.png";
import BuyerBg from "../../../assets/Buyer BG.png";

const SignUpForm = ({ selectedRole }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCriteria, setShowCriteria] = useState(false);

  const passwordCriteria = [
    { regex: /.{8,}/, message: "Password must be at least 8 characters long" },
    {
      regex: /[A-Z]/,
      message: "Password must contain at least one uppercase letter",
    },
    {
      regex: /[a-z]/,
      message: "Password must contain at least one lowercase letter",
    },
    { regex: /\d/, message: "Password must contain at least one digit" },
    {
      regex: /[!@#$%^&*(),.?":{}|<>]/,
      message: "Password must contain at least one special character",
    },
  ];

  const validatePassword = (password) => {
    return passwordCriteria.map((criteria) => ({
      ...criteria,
      isValid: criteria.regex.test(password),
    }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!showCriteria) setShowCriteria(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !validatePassword(password).every((criteria) => criteria.isValid) ||
      password !== confirmPassword
    )
      return;
    console.log("Form submitted:", {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      selectedRole,
    });
  };

  // Choose background image based on the selected role
  const backgroundImage = selectedRole === "Seller" ? BuyerBg : SellerBg;

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="signup-form">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Create a {selectedRole} account</h2>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            type="text"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            type="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type={showPassword ? "text" : "password"}
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            icon={
              showPassword ? (
                <FaEyeSlash onClick={() => setShowPassword(false)} />
              ) : (
                <FaEye onClick={() => setShowPassword(true)} />
              )
            }
          />
          {showCriteria && (
            <div className="password-criteria">
              {validatePassword(password).map((criteria, index) => (
                <p
                  key={index}
                  className={`criteria-message ${
                    criteria.isValid ? "valid" : "invalid"
                  }`}
                >
                  {criteria.message}
                </p>
              ))}
            </div>
          )}
          <Input
            type={showConfirmPassword ? "text" : "password"}
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            icon={
              showConfirmPassword ? (
                <FaEyeSlash onClick={() => setShowConfirmPassword(false)} />
              ) : (
                <FaEye onClick={() => setShowConfirmPassword(true)} />
              )
            }
          />
          <p className={password === confirmPassword ? "valid" : "invalid"}>
            {password !== confirmPassword && "Passwords do not match"}
          </p>
          <button type="submit" className="create-account-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
