import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { getPost } from "../../api/postRequests";

import styles from "../../styles/Page/Project.module.scss";
import Head from "next/head";

interface IProps {
  post: any;
}

const Project: React.FC<IProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={`${post.custom_excerpt}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getPost(context.params?.slug as string);
  return {
    props: {
      post,
      revalidate: 1 * 60 * 60 * 1000, // 1 hour
    },
  };
};

export default Project;
