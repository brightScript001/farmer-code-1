import React from "react";
import "./Avatar.css";

const Avatar = ({ src, size }) => {
  return (
    <img
      src={src}
      alt="Avatar"
      style={{ width: size, height: size, borderRadius: "50%" }}
    />
  );
};

export default Avatar;
