import React from "react";
import { Button as MuiBtn } from "@mui/material";

interface ButtonProps {
  text: String;
  onClick?: any;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-[#4743FE] hover:bg-[#4844b5] w-max font-semibold rounded-full shadow-sm py-3 px-4 capitalize text-base"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const SecButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="border border-gray-300 focus:z-10 focus:ring-4 focus:ring-gray-700 font-semibold rounded-full shadow-sm py-3 px-6 capitalize text-base text-white transition-all"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
