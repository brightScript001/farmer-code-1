import React from "react";
import "./Badge.css";

const Badge = ({ children, count, color = "red" }) => {
  return (
    <div className="badge-container">
      {children}
      {count > 0 && (
        <span className="badge-count" style={{ backgroundColor: color }}>
          {count}
        </span>
      )}
    </div>
  );
};

export default Badge;
