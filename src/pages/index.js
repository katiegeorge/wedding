/** @jsx jsx */

import { jsx } from "theme-ui";
import Layout from "../components/Layout";
import Details from "../components/Details";
import Landing from "../components/Landing";
import GettingHere from "../components/GettingHere";
import Nav from "../components/Nav";

const IndexPage = () => {
  const items = [
    {
      label: "Home",
      href: "home",
    },
    {
      label: "Details",
      href: "details",
    },
    {
      label: "Getting here",
      href: "getting-here",
    },
  ];
  return (
    <Layout>
      <Nav items={items} />
      <Landing />
      <Details />
      <GettingHere />
    </Layout>
  );
};

export default IndexPage;
