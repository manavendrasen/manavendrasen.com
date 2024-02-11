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
        description="Software Engineer at JPMorgan Chase & Co. | ex - SDE Intern @Dell | 7x Hackathon Winner (4x International) | Full Stack Developer | AWS Certified"
      />
      <Default />
    </div>
  );
};

export default Home;
