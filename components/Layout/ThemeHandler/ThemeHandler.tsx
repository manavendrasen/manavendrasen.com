import React from "react";
import { THEME } from "../../../constants/Theme";
import { Dark } from "../../../pages/Dark/Dark";
import { Gruvbox } from "../../../pages/Gruvbox/Gruvbox";
import { Light } from "../../../pages/Light/Light";

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
