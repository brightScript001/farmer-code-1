import React from "react";
import "./input.css";

const Input = ({ type, label, value, onChange, icon }) => {
  return (
    <div className="input-container">
      <label htmlFor={label}>{label}</label>
      <div className="input-with-icon">
        <input
          type={type}
          id={label}
          value={value}
          onChange={onChange}
          className="input-field"
        />
        {icon && <span className="input-icon">{icon}</span>}
      </div>
    </div>
  );
};

export default Input;
