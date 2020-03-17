import React from "react";
import Head from "next/head";

import { MDXProvider } from "@mdx-js/react";
import Navbar from "../components/navbar";
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";

const mdComponents = {
  h1: props => <h1 {...props} />
};

export default ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Johnnys Bar</title>
    </Head>
    <Navbar />
    <MDXProvider components={mdComponents}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </MDXProvider>
  </>
);
