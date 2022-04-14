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
        <main className="min-h-screen flex-1 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Hello to my portfolio</h1>
          <ul>
            {posts.map(post => (
              <li key={post.slug}>
                <Link href="/project/[slug]" as={`/project/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
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
