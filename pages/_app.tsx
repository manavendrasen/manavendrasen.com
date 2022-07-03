import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    "50": "#7975ff",
    "100": "#6f6bff",
    "200": "#6561ff",
    "300": "#5b57ff",
    "400": "#514dff",
    "500": "#4743fe",
    "600": "#3d39f4",
    "700": "#332fea",
    "800": "#2925e0",
    "900": "#1f1bd6",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({ colors });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
