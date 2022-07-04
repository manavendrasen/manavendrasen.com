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
        description="A blog about software development, programming, and more."
      />
      <ThemeHandler theme={THEME.DARK} />
    </div>
  );
};

export default Home;
