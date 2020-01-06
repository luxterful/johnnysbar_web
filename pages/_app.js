import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Navbar from "../components/navbar";
import "../css/styles.css";

const mdComponents = {
  h1: props => <h1 {...props} />
};

export default ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <Navbar />
    <div className="content">
      <Component {...pageProps} />
    </div>
  </MDXProvider>
);
