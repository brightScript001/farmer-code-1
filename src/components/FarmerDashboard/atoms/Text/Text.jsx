import React from "react";
import "./Text.css";

const Text = ({ children, className }) => {
  return <span className={className}>{children}</span>;
};

export default Text;
