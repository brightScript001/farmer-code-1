import React from "react";
import { useNavigate } from "react-router-dom";
import "./RoleSelection.css";
import Buyer from "../../assets/signup_buyer.png";
import Seller from "../../assets/signup_seller.png";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    navigate(`/${role.toLowerCase()}signup`);
  };

  return (
    <div className="role-selection">
      <h2>Select your role</h2>
      <hr className="green-line" />
      <p>Create a new profile by selecting one of the profile types</p>
      <div className="role-options">
        <div
          className="role-option"
          onClick={() => handleRoleSelection("Buyer")}
        >
          <img src={Buyer} alt="Buyer" />
          <p>Buyer</p>
        </div>
        <div
          className="role-option"
          onClick={() => handleRoleSelection("Seller")}
        >
          <img src={Seller} alt="Seller" />
          <p>Seller</p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
