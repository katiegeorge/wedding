/** @jsx jsx */

import { jsx } from "theme-ui";
import Layout from "../components/Layout";
import Details from "../components/Details";
import Landing from "../components/Landing";
import GettingHere from "../components/GettingHere";

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <Details />
      <GettingHere />
    </Layout>
  );
};

export default IndexPage;
