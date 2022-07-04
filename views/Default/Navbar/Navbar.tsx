import Link from "next/link";
import React from "react";
import { Container } from "@mui/material";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="text-white absolute left-0 top-0 w-full">
      <Container className="py-8">
        <div className="flex justify-end items-center gap-12">
          <a href="#about-me">about me</a>
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
