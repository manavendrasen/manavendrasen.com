import Link from "next/link";
import React from "react";
import navLinks from "../../../constants/navLinks";

interface MobileNavProps {}

const MobileNav: React.FC<MobileNavProps> = () => {
  return (
    <div className="fixed bottom-16 bg-slate-50 rounded-3xl py-2 pl-8 shadow-md left-1/2 -translate-x-1/2 block xl:hidden">
      <div className="flex justify-center items-center gap-5 w-max">
        {navLinks.map(link => (
          <div key={link.name}>
            <Link href={link.href}>
              <a>{link.name}</a>
            </Link>
          </div>
        ))}
        <div>
          <Link href="/">
            <a className="bg-blue-600 hover:bg-blue-700 transition-all px-3 py-2 text-white font-medium rounded-3xl">
              <span>Resume</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;