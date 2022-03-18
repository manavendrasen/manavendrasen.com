import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { getPost } from "../../api/postRequests";

import styles from "../../styles/Page/Project.module.scss";

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
      <Link href='/'>
        <a>Home</a>
      </Link>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
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
