import React from "react";
import { THEME } from "../../../constants/Theme";
import Default from "../../../views/Default";

interface ThemeHandlerProps {
  theme: THEME;
}

export const ThemeHandler: React.FC<ThemeHandlerProps> = ({ theme }) => {
  let page;
  switch (theme) {
    case THEME.DARK:
      page = <Default />;
      break;
    default:
      page = <Default />;
      break;
  }
  return <div>{page}</div>;
};
