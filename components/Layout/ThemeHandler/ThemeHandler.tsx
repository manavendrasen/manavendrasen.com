import React from "react";
import { THEME } from "../../../constants/Theme";
import Dark from "../../Dark/Dark";
import Gruvbox from "../../Gruvbox/Gruvbox";
import Light from "../../Light/Light";

interface ThemeHandlerProps {
  theme: THEME;
}

export const ThemeHandler: React.FC<ThemeHandlerProps> = ({ theme }) => {
  let page;
  switch (theme) {
    case THEME.LIGHT:
      page = <Light />;
      break;
    case THEME.DARK:
      page = <Dark />;
      break;
    case THEME.GRUVBOX:
      page = <Gruvbox />;
      break;
    default:
      page = <Light />;
      break;
  }
  return <div>{page}</div>;
};
