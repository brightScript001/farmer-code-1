import React from "react";
import "./Badge.css";

const Badge = ({ children, color }) => {
  return (
    <span
      style={{
        backgroundColor: color,
        padding: "5px 10px",
        borderRadius: "10px",
      }}
    >
      {children}
    </span>
  );
};

export default Badge;
