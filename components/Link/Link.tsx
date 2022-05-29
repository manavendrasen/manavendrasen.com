import React from "react";

interface LinkProps {
  href: string;
  name: string;
  icon: string;
  primaryColor: string;
  iconColor: string;
}

export const Link: React.FC<LinkProps> = ({}) => {
  return <div>hello</div>;
};
