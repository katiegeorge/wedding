/** @jsx jsx */

import { useState } from "react";
import { jsx, Grid } from "theme-ui";
import Layout from "../components/Layout";
import Details from "../components/Details";
import Landing from "../components/Landing";
import GettingHere from "../components/GettingHere";
import AboutUs from "../components/AboutUs";
import Nav from "../components/Nav";
import HamburgerClose from "../components/HamburgerClose";

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
    {
      label: "About Us",
      href: "about-us",
    },
  ];
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <Layout>
      <Grid columns={"1fr"} gap={0}>
        <Nav
          items={items}
          setShowSideBar={setShowSideBar}
          sx={{ ml: showSideBar ? 0 : "-100%", transition: "0.2s ease-in-out" }}
        />
        <div>
          <HamburgerClose
            handleClick={() => setShowSideBar(!showSideBar)}
            setActive={setShowSideBar}
            active={showSideBar}
          />
          <Landing
            sx={{
              pl: showSideBar ? [4, "22%"] : ["auto"],
              transition: "0.2s ease-in-out",
            }}
          />
          <Details
            sx={{
              pl: showSideBar ? [4, "22%"] : [4, "85px"],
              transition: "0.2s ease-in-out",
            }}
          />
          <GettingHere
            sx={{
              pl: showSideBar ? [4, "22%"] : [4, "85px"],
              transition: "0.2s ease-in-out",
            }}
          />
          <AboutUs
            sx={{
              pl: showSideBar ? [4, "22%"] : [4, "85px"],
              transition: "0.2s ease-in-out",
            }}
          />
        </div>
      </Grid>
    </Layout>
  );
};

export default IndexPage;
