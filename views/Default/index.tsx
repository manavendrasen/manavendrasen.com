import React from "react";
import { Box, Container } from "@mui/material";
import { Button } from "./Button/Button";
import { Link } from "./Link/Link";
import { Navbar } from "./Navbar/Navbar";
import { Links } from "../../constants/Links";
import Image from "next/image";
import HeroImage from "../../assets/images/bg-hero-default.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./motionVariants";

interface DarkProps {}

const Dark: React.FC<DarkProps> = ({}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#161622",
        position: "relative",
        backgroundImage: `url(https://user-images.githubusercontent.com/26283488/177179992-b9157c1b-6b7f-4a81-a20c-49282ccc6035.jpg)`,
        backgroundSize: "cover",
      }}
    >
      {/* <div className="w-20 h-11 " /> */}
      <Box
        sx={{
          backdropFilter: "blur(70px) brightness(80%)",
          // mixBlendMode: "overlay",
        }}
      >
        {/* <Navbar> */}
        <main className="text-white min-h-screen flex justify-center items-center text-center lg:text-left">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col gap-5"
            >
              <motion.span variants={fadeIn()}>
                <p className="font-medium">Hello 👋, my name is</p>
              </motion.span>

              <motion.span variants={fadeIn()}>
                <h1 className="lg:text-6xl text-4xl font-bold">
                  Manavendra Sen
                </h1>
              </motion.span>

              <motion.span variants={fadeIn()}>
                <h1 className="lg:text-6xl text-4xl font-bold leading-tight text-indigo-200 opacity-40 bg-brightness-200">
                  Developer & UI/UX Designer from India
                </h1>
              </motion.span>

              <motion.span variants={fadeIn()}>
                <p className="text-slate-200">
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
              </motion.span>

              <motion.span variants={fadeIn()}>
                <div className="py-4 flex justify-between items-center flex-col lg:flex-row gap-8">
                  <a
                    href="mailto:manavendra4288@gmail.com?subject=Let's Connect"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button onClick={() => {}} text="Let's Connect 🙌" />
                  </a>

                  <div>
                    <div className="flex gap-4 wrap justify-center items-center">
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
              </motion.span>
            </motion.div>
          </Container>
        </main>
        {/* </Navbar> */}
      </Box>
      {/* <div className="absolute top-0 left-0 w-full pointer-events-none z- h-screen">
        <Image
          // className="blur-2xl opacity-100"
          src={HeroImage}
          objectFit="fill"
          objectPosition="center"
          layout="fill"
          alt=""
        />
      </div> */}
    </Box>
  );
};

export default Dark;
