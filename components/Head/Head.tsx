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
    </NextHead>
  );
};
