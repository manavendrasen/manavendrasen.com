import React from "react";
import { Container } from "@mui/material";
import { Button } from "./Button/Button";
import { Link } from "./Link/Link";
import Navbar from "./Navbar/Navbar";
import { Links } from "../../constants/Links";

interface DarkProps {}

const Dark: React.FC<DarkProps> = ({}) => {
  return (
    <>
      <Navbar />
      <main className="bg-[#161622] text-white min-h-screen flex justify-center items-center">
        <Container>
          <div className="flex flex-col gap-3">
            <p className="font-medium">hi 👋, my name is</p>
            <h1 className="lg:text-6xl text-4xl font-bold">Manavendra Sen</h1>
            <h1 className="lg:text-6xl text-4xl font-bold leading-tight mix-blend-overlay brightness-120">
              Developer & UI/UX Designer from India
            </h1>
            <p className="text-slate-400">
              I&apos;m a software engineer specializing in building and
              designing exceptional digital experiences. <br /> Currently
              I&apos;m building DevOps solutions at{" "}
              <a
                className="text-yellow-400"
                href="https://www.dell.com/en-in"
                target="_blank"
                rel="noreferrer"
              >
                Dell Technologies
              </a>
            </p>
            <div className="py-4 flex justify-between items-center">
              <Button onClick={() => {}} text="Let's Connect" />
              <div>
                <div className="flex gap-4 justify-center items-center">
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
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Dark;
