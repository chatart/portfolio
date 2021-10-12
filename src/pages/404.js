import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <h2>Page not found</h2>
      <Link to="/">Go home</Link>.
    </Layout>
  );
};

export default NotFoundPage;
