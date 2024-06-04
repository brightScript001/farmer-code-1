import React from "react";
import SignUpForm from "../shared/SignUpForm/SignUpForm";

const SellerSignUp = () => {
  return (
    <div className="seller-signup">
      <SignUpForm selectedRole="Seller" />
    </div>
  );
};

export default SellerSignUp;
