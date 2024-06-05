import React from "react";
import "./Icon.css";

const Icon = ({ name, size, color }) => {
  return <i className={`icon-${name}`} style={{ fontSize: size, color }} />;
};

export default Icon;
