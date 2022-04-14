import Link from "next/link";
import React from "react";
import navLinks from "../../../constants/navLinks";
import Container from "../Container/Container";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  console.log(navLinks.map(link => link.name));

  return (
    <nav className="hidden xl:block">
      <Container>
        <div className="flex justify-between items-center py-8">
          <div className="flex items-center gap-6">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href}>
                <a className="text-base font-normal">
                  <span className="text-gray-900 hover:text-blue-600 transition-all">
                    {link.name}
                  </span>
                </a>
              </Link>
            ))}
          </div>
          <div>
            <Link href="/">
              <a className="bg-blue-600 hover:bg-blue-700 transition-all px-3 py-2 text-white font-medium rounded-3xl">
                <span>Resume</span>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
