import React, { useEffect } from "react";
import { NextPage } from "next";

import { Head } from "../components/Head/Head";
import { THEME } from "../constants/Theme";

import { ThemeHandler } from "../components/Layout/ThemeHandler/ThemeHandler";

interface IHomeProps {}

const Home: NextPage<IHomeProps> = () => {
  return (
    <div className="relative">
      <Head
        title="Portfolio - Manavendra Sen | Home"
        description="Software Engineer @ J.P. Morgan Chase & Co | 7x Hackathon Winner (3x International) | Full Stack MERN Developer | Devops "
      />
      <ThemeHandler theme={THEME.DEFAULT} />
    </div>
  );
};

export default Home;
