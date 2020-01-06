import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Navbar from "../components/navbar";

const mdComponents = {
  h1: props => <h1 style={{ color: "tomato" }} {...props} />
};

export default ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <Navbar />
    <Component {...pageProps} />
  </MDXProvider>
);
