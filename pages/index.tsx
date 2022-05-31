import type { NextPage } from "next";

import Link from "next/link";

import Footer from "../components/Layout/Footer/Footer";
import Container from "../components/Layout/Container/Container";
import Navbar from "../components/Layout/Navbar/Navbar";
import { Head } from "../components/Head/Head";
import MobileNav from "../components/Layout/MobileNav/MobileNav";
import { THEME, useTheme } from "../context/ThemeContext";

// pages
import { Light } from "./Light/Light";
import { Dark } from "./Dark/Dark";
import { Gruvbox } from "./Gruvbox/Gruvbox";

interface IHomeProps {}

const Home: NextPage<IHomeProps> = () => {
  const [theme, setTheme] = useTheme();

  let page;

  switch (theme) {
    case THEME.LIGHT:
      page = <Gruvbox />;
      break;
    default:
      page = <Light />;
      break;
  }
  return (
    <div className="relative">
      <Head
        title="Portfolio - Manavendra Sen | Home"
        description="A blog about software development, programming, and more."
      />
      <Navbar />
      <div>{page}</div>
    </div>
  );
};

export default Home;
