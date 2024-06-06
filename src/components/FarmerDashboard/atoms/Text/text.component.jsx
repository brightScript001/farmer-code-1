import React from "react";
import {
  LargeText,
  LargeMediumText,
  MediumText,
  SmallText,
  SmallText2,
  ButtonText,
} from "./text.styles";

const Text = ({ variant, children }) => {
  let TextComponent;

  switch (variant) {
    case "large":
      TextComponent = LargeText;
      break;
    case "largeMedium":
      TextComponent = LargeMediumText;
      break;
    case "medium":
      TextComponent = MediumText;
      break;
    case "small":
      TextComponent = SmallText;
      break;
    case "small2":
      TextComponent = SmallText2;
      break;
    case "button":
      TextComponent = ButtonText;
      break;
    default:
      TextComponent = LargeText;
  }

  return <TextComponent>{children}</TextComponent>;
};

export default Text;
