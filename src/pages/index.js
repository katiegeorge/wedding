/** @jsx jsx */

import { useState, useEffect } from "react";
import { jsx, Grid, Image, Flex } from "theme-ui";
import Layout from "../components/Layout";
import Details from "../components/Details";
import Landing from "../components/Landing";
import GettingHere from "../components/GettingHere";
import AboutUs from "../components/AboutUs";
import Nav from "../components/Nav";
import HamburgerClose from "../components/HamburgerClose";
import MiniLogo from "../images/mini-logo.png";

const IndexPage = () => {
  const [prevScrollPos, setPrevScrollPos] = useState("");
  const [visible, setVisible] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  const wndw = typeof window !== "undefined" && window;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = wndw.pageYOffset;
      const vsble = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(vsble);
    };

    wndw.addEventListener("scroll", handleScroll);

    return () => {
      wndw.removeEventListener("scroll", handleScroll);
    };
  }, [wndw.pageYOffset]);

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
      label: "Getting Here",
      href: "getting-here",
    },
    {
      label: "About Us",
      href: "about-us",
    },
  ];

  return (
    <Layout>
      <Grid columns={"1fr"} gap={0}>
        <Nav
          items={items}
          setShowSideBar={setShowSideBar}
          sx={{ ml: showSideBar ? 0 : "-101%", transition: "0.2s ease-in-out" }}
        />
        <div>
          <Flex
            sx={{
              width: "100%",
              height: "75px",
              position: "fixed",
              top: visible ? "0" : "-100px",
              zIndex: 1,
              bg: "blue-dark",
              boxShadow: "0px 3px 4px 0px #09283a",
              display: ["flex", "none"],
              transition: "0.2s ease",
              justifyContent: "space-between",
              px: 4,
            }}
          >
            <Image src={MiniLogo} sx={{ height: "37px", mt: "18px" }} />
            <HamburgerClose
              handleClick={() => setShowSideBar(!showSideBar)}
              setActive={setShowSideBar}
              active={showSideBar}
            />
          </Flex>
          <HamburgerClose
            handleClick={() => setShowSideBar(!showSideBar)}
            setActive={setShowSideBar}
            active={showSideBar}
            sx={{ display: ["none", "block"], position: "fixed", top: "1rem" }}
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
