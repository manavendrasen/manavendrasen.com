import React from "react";
import NextHead from "next/head";

interface HeadProps {
  title: string;
  description?: string;
}

export const Head: React.FC<HeadProps> = ({ title, description }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content="https://manavendrasen.com/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:description"
        content="Developer & UI/UX Designer from India"
      />
      <meta property="og:image" content="https://via.placeholder.com/300/" />
      <meta property="og:title" content="Manavendra Sen | Portfolio" />
      <meta property="og:site_name" content="Manavendra Sen | Portfolio" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Manavendra Sen | Portfolio" />
      <meta
        name="twitter:description"
        content="Developer & UI/UX Designer from India"
      />
      <meta name="twitter:creator" content="@manavendrasen" />
      <meta name="twitter:image" content="https://via.placeholder.com/300/" />
    </NextHead>
  );
};
