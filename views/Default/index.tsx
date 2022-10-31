import React, { useEffect } from "react";
import NextLink from "next/link";
import { Box, Container } from "@mui/material";
import { Button, SecButton } from "./Button/Button";
import { Link } from "./Link/Link";
import { Navbar } from "./Navbar/Navbar";
import { Links } from "../../constants/Links";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./motionVariants";
import { ComingSoon } from "./ComingSoon/ComingSoon";
import { Footer } from "./Footer/Footer";
import { useRouter } from "next/router";
import Cal, { getCalApi } from "@calcom/embed-react";

interface DarkProps {}

const Dark: React.FC<DarkProps> = ({}) => {
  const router = useRouter();
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      if (cal) {
        cal("ui", {
          theme: "dark",
          styles: { branding: { brandColor: "#000000" } },
        });
      } else {
        router.push("mailto:manavendra4288@gmail.com");
      }
    })();
  }, []);
  return (
    <div className="bg-[#161622] flex flex-col">
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(https://user-images.githubusercontent.com/26283488/177179992-b9157c1b-6b7f-4a81-a20c-49282ccc6035.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            backdropFilter: "blur(70px) brightness(80%)",
          }}
        >
          {/* <Navbar> */}
          <main className="text-white h-screen flex justify-center items-center text-center lg:text-left">
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
                    designing exceptional digital experiences.
                    <br />
                    {/* <br /> */}
                    {/* <span className="text-green-200 font-medium">
                      • Currently looking for Opportunities.
                    </span> */}
                  </p>
                </motion.span>

                <motion.span variants={fadeIn()}>
                  <div className="py-4 flex justify-between items-center flex-col lg:flex-row gap-8">
                    <div className="flex gap-4">
                      <button
                        className="bg-[#4743FE] hover:bg-[#4844b5] w-max font-semibold rounded-full shadow-sm py-3 px-6 capitalize text-base transition-all"
                        data-cal-link="manavendrasen/30min"
                      >
                        Let&apos;s Connect 🙌
                      </button>
                      {/* </a> */}
                      <NextLink href="/resume">
                        <SecButton onClick={() => {}} text="Resume 👨‍💻" />
                      </NextLink>
                    </div>

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
      </Box>
      {/* <ComingSoon /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Dark;
