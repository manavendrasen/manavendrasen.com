import React from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Script from "next/script";

// <script async src=""></script>
// <script>
//
// </script>

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
      />
      <Script strategy="lazyOnload" id="gtag">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', ${process.env.NEXT_PUBLIC_ANALYTICS_ID});`}
      </Script>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
