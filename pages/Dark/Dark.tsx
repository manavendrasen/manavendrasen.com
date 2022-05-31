import React from "react";
import Container from "../../components/Layout/Container/Container";
import { Links } from "../../constants/Links";
import { Link } from "./Link/Link";

interface DarkProps {}

export const Dark: React.FC<DarkProps> = ({}) => {
  return (
    <main className="bg-[#0C1229] min-h-screen flex justify-center items-center">
      <Container>
        <div className="flex flex-col gap-12 justify-center items-center">
          <div className="flex-1 flex flex-col justify-center items-center gap-2">
            <h1 className="text-4xl font-extrabold uppercase text-gray-50">
              Manavendra Sen
            </h1>
            <h2 className="text-lg font-medium text-[#AFBBE8] xl:leading-normal text-center">
              Dell SDE Intern&apos;22 • 5x Hackathon Winner (3x International){" "}
              <br />
              Software Developer • UI/UX Designer
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8 justify-center items-center w-1/3">
            {Links.map(link => (
              <Link
                key={link.href}
                name={link.name}
                href={link.href}
                icon={link.icon}
                primaryColor={link.primaryColor}
                color={link.color}
              />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};
