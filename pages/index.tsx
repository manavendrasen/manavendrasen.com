import type { NextPage } from "next";

import Link from "next/link";

import Footer from "../components/Layout/Footer/Footer";
import { getPostTitle } from "../api/postRequests";
import Container from "../components/Layout/Container/Container";
import Navbar from "../components/Layout/Navbar/Navbar";
import { Head } from "../components/Head/Head";
import MobileNav from "../components/Layout/MobileNav/MobileNav";

interface IHomeProps {
  posts: Post[];
}

type Post = {
  id: string;
  title: string;
  slug: string;
  custom_excerpt: string;
  feature_image: string;
};

const Home: NextPage<IHomeProps> = ({ posts }) => {
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
        {/* <section
          className="bg-slate-50 flex flex-col gap-4 w-full py-16"
          id="work-experience"
        >
          <Container>
            <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
            <div className="flex flex-col gap-16">
              {experience.map(ex => (
                <Experience
                  id={ex.id}
                  key={ex.id}
                  company={ex.company}
                  description={ex.description}
                  endDate={ex.endDate}
                  startDate={ex.startDate}
                  location={ex.location}
                  logo={ex.logo}
                  title={ex.title}
                />
              ))}
            </div>
          </Container>
        </section> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
};

// export const getStaticProps = async () => {
//   const posts = await getPostTitle();
//   return {
//     props: { posts },
//   };
// };

export default Home;
{
  /* <ul>
            {posts.map(post => (
              <li key={post.slug}>
                <Link href="/project/[slug]" as={`/project/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul> */
}
