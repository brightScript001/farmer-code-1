import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css";
import Input from "../Input/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../../../../assets/Onefarm-Tech-Logo 2.png";
import SellerBg from "../../../../../assets/Seller BG.png";
import BuyerBg from "../../../../../assets/Buyer BG.png";

const SignUpForm = ({ selectedRole }) => {
  const [formObj, setFormObj] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    showCriteria: false,
  });

  const navigate = useNavigate();

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
    setFormObj({ ...formObj, password: e.target.value });
    if (!formObj.showCriteria) setFormObj({ ...formObj, showCriteria: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !validatePassword(formObj.password).every(
        (criteria) => criteria.isValid
      ) ||
      formObj.password !== formObj.confirmPassword
    )
      return;
    console.log("Form submitted:", {
      ...formObj,
      selectedRole,
    });
    navigate("/verify-email", {
      state: { userName: `${formObj.firstName} ${formObj.lastName}` },
    });
  };

  const backgroundImage = selectedRole === "Buyer" ? BuyerBg : SellerBg;

  return (
    <div className="main-container">
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
              value={formObj.firstName}
              onChange={(e) =>
                setFormObj({ ...formObj, firstName: e.target.value })
              }
            />
            <Input
              type="text"
              label="Last Name"
              value={formObj.lastName}
              onChange={(e) =>
                setFormObj({ ...formObj, lastName: e.target.value })
              }
            />
            <Input
              type="email"
              label="Email Address"
              value={formObj.email}
              onChange={(e) =>
                setFormObj({ ...formObj, email: e.target.value })
              }
            />
            <Input
              type={formObj.showPassword ? "text" : "password"}
              label="Password"
              value={formObj.password}
              onChange={handlePasswordChange}
              icon={
                formObj.showPassword ? (
                  <FaEyeSlash
                    onClick={() =>
                      setFormObj({ ...formObj, showPassword: false })
                    }
                  />
                ) : (
                  <FaEye
                    onClick={() =>
                      setFormObj({ ...formObj, showPassword: true })
                    }
                  />
                )
              }
            />
            {formObj.showCriteria && (
              <div className="password-criteria">
                {validatePassword(formObj.password).map((criteria, index) => (
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
              type={formObj.showConfirmPassword ? "text" : "password"}
              label="Confirm Password"
              value={formObj.confirmPassword}
              onChange={(e) =>
                setFormObj({ ...formObj, confirmPassword: e.target.value })
              }
              icon={
                formObj.showConfirmPassword ? (
                  <FaEyeSlash
                    onClick={() =>
                      setFormObj({ ...formObj, showConfirmPassword: false })
                    }
                  />
                ) : (
                  <FaEye
                    onClick={() =>
                      setFormObj({ ...formObj, showConfirmPassword: true })
                    }
                  />
                )
              }
            />
            <p
              className={
                formObj.password === formObj.confirmPassword
                  ? "valid"
                  : "invalid"
              }
            >
              {formObj.password !== formObj.confirmPassword &&
                "Passwords do not match"}
            </p>
            <button type="submit" className="create-account-button">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
