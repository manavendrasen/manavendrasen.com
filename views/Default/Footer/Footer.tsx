import { Container } from "@mui/material";
import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer>
      <Container className="flex justify-center items-center py-8 text-white text-center">
        <p>Designed & Developed by Manavendra Sen using Open Source.</p>
      </Container>
    </footer>
  );
};
