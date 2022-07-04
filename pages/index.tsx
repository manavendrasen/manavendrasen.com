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
  const options = [
    { value: THEME.LIGHT, label: "Light" },
    { value: THEME.DARK, label: "Dark" },
    { value: THEME.GRUVBOX, label: "Gruvbox" },
  ];

  const [theme, setTheme] = useState(options[0]);

  return (
    <div className="relative">
      <Head
        title="Portfolio - Manavendra Sen | Home"
        description="A blog about software development, programming, and more."
      />
      <nav className="absolute left-0 top-0 w-full">
        <Container>
          <div className="flex justify-end items-end py-8">
            <div>
              <Select
                defaultValue={theme}
                onChange={opt => {
                  setTheme(opt!);
                }}
                options={options}
              />
            </div>
          </div>
        </Container>
      </nav>
      <ThemeHandler theme={theme.value} />
    </div>
  );
};

export default Home;
