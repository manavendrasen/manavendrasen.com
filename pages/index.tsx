import type { NextPage } from "next";

import Link from "next/link";

import Footer from "../components/Layout/Footer/Footer";
import { getPostTitle } from "../api/postRequests";
import Container from "../components/Layout/Container/Container";
import Navbar from "../components/Layout/Navbar/Navbar";
import { Head } from "../components/Head/Head";

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
    <>
      <Navbar />
      <Head
        title="Portfolio - Manavendra Sen | Home"
        description="A blog about software development, programming, and more."
      />
      <Container>
        <main className="py-16 flex-1 flex flex-col justify-center items-start gap-4">
          <h2 className="text-xl font-semibold dark:text-slate-50">
            Hi, I&apos;m Manavendra Sen 👋
          </h2>
          <h1 className="text-3xl font-bold leading-snug dark:text-slate-50">
            Developer + UI/UX Designer from India <br /> I build beautiful and
            interactive experiences.
          </h1>
          <p className="font-base text-slate-500 dark:text-slate-400">
            I&apos;m a software engineer and UI/UX designer based in India.
            <br />
            I&apos;m passionate about building beautiful and interactive
            experiences.
          </p>
          {/* <ul>
            {posts.map(post => (
              <li key={post.slug}>
                <Link href="/project/[slug]" as={`/project/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul> */}
        </main>
      </Container>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await getPostTitle();
  return {
    props: { posts },
  };
};

export default Home;
