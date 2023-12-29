import React, { useEffect } from "react";
import { NextPage } from "next";

import { Head } from "../components/Head/Head";
import { THEME } from "../constants/Theme";

import Default from "../views/Default";

interface IHomeProps {}

const Home: NextPage<IHomeProps> = () => {
  return (
    <div className="relative">
      <Head
        title="Portfolio - Manavendra Sen | Home"
        description="Software Engineer @ J.P. Morgan Chase & Co | Full Stack MERN Developer | Devops "
      />
      <Default />
    </div>
  );
};

export default Home;
