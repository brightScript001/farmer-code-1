import React from "react";
import SignUpForm from "../shared/SignUpForm/SignUpForm";

const BuyerSignUp = () => {
  return (
    <div className="buyer-signup">
      <SignUpForm selectedRole="Buyer" />
    </div>
  );
};

export default BuyerSignUp;
