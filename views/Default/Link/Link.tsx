import React from "react";

interface LinkProps {
  name: string;
  href: string;
  icon: React.ReactNode;
  primaryColor: string;
  color: string;
}

export const Link: React.FC<LinkProps> = ({
  name,
  href,
  icon,
  primaryColor,
  color,
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div
          style={{
            backgroundColor: primaryColor,
            color: color,
            fontSize: 20,
          }}
          className="rounded-full w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center shadow-md hover:brightness-125  transition-all"
        >
          {icon}
        </div>
        {/* <p className="text-[#d4d5d7]">{name}</p> */}
      </div>
    </a>
  );
};
