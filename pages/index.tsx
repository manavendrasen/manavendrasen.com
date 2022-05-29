import type { NextPage } from "next";

import Link from "next/link";

import Footer from "../components/Layout/Footer/Footer";
import Container from "../components/Layout/Container/Container";
import Navbar from "../components/Layout/Navbar/Navbar";
import { Head } from "../components/Head/Head";
import MobileNav from "../components/Layout/MobileNav/MobileNav";

interface IHomeProps {}

const Home: NextPage<IHomeProps> = () => {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      {/* <MobileNav /> */}
      <Head
        title="Portfolio - Manavendra Sen | Home"
        description="A blog about software development, programming, and more."
      />

      <main>
        <Container>
          <div className="py-16 flex-1 flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl font-extrabold uppercase">
              Manavendra Sen
            </h1>
            <h2 className="text-md font-medium text-gray-600 xl:leading-normal text-center">
              Dell SDE Intern&apos;22 • 5x Hackathon Winner (3x International){" "}
              <br />
              Software Developer • UI/UX Designer
            </h2>
          </div>
        </Container>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
