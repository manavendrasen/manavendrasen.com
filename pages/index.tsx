import Link from "next/link";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer/Footer";
import Container from "../components/Layout/Container/Container";
import Navbar from "../components/Layout/Navbar/Navbar";
import { Head } from "../components/Head/Head";
import MobileNav from "../components/Layout/MobileNav/MobileNav";
import Select from "react-select";
import { THEME } from "../constants/Theme";

import { ThemeHandler } from "../components/Layout/ThemeHandler/ThemeHandler";

interface IHomeProps {}

const Home: NextPage<IHomeProps> = () => {
  const themeValues = Object.values(THEME);
  const [theme, setTheme] = useState<number>(
    Number(themeValues[Math.floor(Math.random() * themeValues.length)])
  );

  console.log(themeValues);

  return (
    <div className="relative">
      <Head
        title="Portfolio - Manavendra Sen | Home"
        description="A blog about software development, programming, and more."
      />
      <ThemeHandler theme={theme} />
    </div>
  );
};

export default Home;
