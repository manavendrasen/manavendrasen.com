import React, { createContext } from "react";
import { atom, useRecoilState } from "recoil";

export const LIGHT = "LIGHT";
export const DARK = "DARK";
export const GRUVBOX = "GRUVBOX";
export const SPOTIFY = "SPOTIFY";
export const YOUTUBE = "YOUTUBE";

export enum THEME {
  LIGHT,
  DARK,
  GRUVBOX,
  SPOTIFY,
  YOUTUBE,
}

export const themeState = atom({
  key: "themeState",
  default: THEME.LIGHT,
});

export const useTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  return [theme, setTheme];
};
