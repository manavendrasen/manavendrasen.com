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
      <meta property="og:image" content="/public/link.jpeg" />
      <meta property="og:title" content="Manavendra Sen | Portfolio" />
      <meta property="og:site_name" content="Manavendra Sen | Portfolio" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Manavendra Sen | Portfolio" />
      <meta
        name="twitter:description"
        content="Developer & UI/UX Designer from India"
      />
      <meta name="twitter:creator" content="@manavendrasen" />
      <meta name="twitter:image" content="/public/link.jpeg" />

      {/* favicon */}

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/public/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/public/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/public/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/public/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/public/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/public/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/public/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/public/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/public/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/public/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/public/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/public/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/public/favicon-16x16.png"
      />
      <link rel="manifest" href="/public/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/public/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff"></meta>
    </NextHead>
  );
};
