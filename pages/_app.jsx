import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Navbar from "../components/navbar";
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";

const mdComponents = {
  h1: props => <h1 {...props} />
};

export default ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <Navbar />
    <Container>
      <Component {...pageProps} />
    </Container>
  </MDXProvider>
);
