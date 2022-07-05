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
      <meta property="fb:app_id" content="manavendrasen" />
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:description"
        content="Developer & UI/UX Designer from India"
      />
      <meta
        property="og:image"
        content="https://media-exp2.licdn.com/dms/image/C4D03AQF3PnGkO1MahQ/profile-displayphoto-shrink_800_800/0/1655922372943?e=1662595200&v=beta&t=Iv9VUB5DGVoRPIkd0AjP-32w0OeilymAAic3XzvmSFI"
      />
      <meta property="og:title" content="Manavendra Sen | Portfolio" />
      <meta property="og:site_name" content="Manavendra Sen | Portfolio" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Manavendra Sen | Portfolio" />
      <meta
        name="twitter:description"
        content="Developer & UI/UX Designer from India"
      />
      <meta name="twitter:creator" content="@manavendrasen" />
      <meta
        name="twitter:image"
        content="https://media-exp2.licdn.com/dms/image/C4D03AQF3PnGkO1MahQ/profile-displayphoto-shrink_800_800/0/1655922372943?e=1662595200&v=beta&t=Iv9VUB5DGVoRPIkd0AjP-32w0OeilymAAic3XzvmSFI"
      />
    </NextHead>
  );
};
