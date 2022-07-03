import React from "react";
import { THEME } from "../../../constants/Theme";
import Dark from "../../Dark/Dark";
import Light from "../../Light/Light";

interface ThemeHandlerProps {
  theme: number;
}

export const ThemeHandler: React.FC<ThemeHandlerProps> = ({ theme }) => {
  let page;
  console.log(theme);

  switch (theme) {
    case THEME.LIGHT:
      page = <Light />;
      break;
    case THEME.DARK:
      page = <Dark />;
      break;
    default:
      page = <Dark />;
      break;
  }
  return <div>{page}</div>;
};
