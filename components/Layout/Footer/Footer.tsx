import React from "react";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <Container>
      <footer className="flex flex-1 py-4 border-2 border-gray-100 justify-center items-center">
        <a
          className="flex justify-center items-center flex-1"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ using Open Source
        </a>
      </footer>
    </Container>
  );
};

export default Footer;
