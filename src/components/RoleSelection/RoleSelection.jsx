import React from "react";
import "./RoleSelection.css";
import Buyer from "../../assets/signup_buyer.png";
import Seller from "../../assets/signup_seller.png";

const RoleSelection = () => {
  return (
    <div className="role-selection">
      <h2>Select your role</h2>
      <hr className="green-line" />
      <p>Create a new profile by selecting one of the profile types</p>
      <div className="role-options">
        <div className="role-option">
          <img src={Buyer} alt="Buyer" />
          <p>Buyer</p>
        </div>
        <div className="role-option">
          <img src={Seller} alt="Seller" />
          <p>Seller</p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
