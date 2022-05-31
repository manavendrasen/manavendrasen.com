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
  console.log(name, href, icon, primaryColor, color);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div
          style={{
            backgroundColor: primaryColor,
            color: color,
            fontSize: 30,
          }}
          className="p-4 rounded-xl w-20 h-20 flex justify-center items-center shadow-md hover:brightness-125  transition-all"
        >
          {icon}
        </div>
        <p className="text-gray-900">{name}</p>
      </div>
    </a>
  );
};
