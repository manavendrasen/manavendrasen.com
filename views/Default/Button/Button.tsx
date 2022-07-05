import React from "react";
import { Button as MuiBtn } from "@mui/material";

interface ButtonProps {
  text: String;
  onClick: any;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-[#4743FE] hover:bg-[#6561ff] w-max font-semibold rounded-xl shadow-sm py-3 px-4 capitalize text-base"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
