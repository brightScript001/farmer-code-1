import React from "react";
import { BackButton, ActionButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  back: "back",
  action: "action",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.action) =>
  ({
    [BUTTON_TYPE_CLASSES.back]: BackButton,
    [BUTTON_TYPE_CLASSES.action]: ActionButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
