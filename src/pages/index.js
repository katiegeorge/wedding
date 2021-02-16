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
import HomeIcon from "../images/home_24px.png";
import GettingHereIcon from "../images/explore_24px.png";
import AboutUsIcon from "../images/favorite_border_24px.png";
import DetailsIcon from "../images/toc_24px.png";

const IndexPage = () => {
  const [prevScrollPos, setPrevScrollPos] = useState("");
  const [visible, setVisible] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);

  const wndw = typeof window !== "undefined" && window;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = wndw.pageYOffset;
      const vsble =
        prevScrollPos > currentScrollPos ||
        currentScrollPos === 0 ||
        showSideBar;

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
      icon: HomeIcon,
    },
    {
      label: "Details",
      href: "details",
      icon: DetailsIcon,
    },
    {
      label: "Getting Here",
      href: "getting-here",
      icon: GettingHereIcon,
    },
    {
      label: "About Us",
      href: "about-us",
      icon: AboutUsIcon,
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
            <a href="#home">
              <Image src={MiniLogo} sx={{ height: "37px", mt: "18px" }} />
            </a>
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
              pl: showSideBar ? [4, "20%"] : ["auto"],
              transition: "0.2s ease-in-out",
            }}
          />
          <Details
            sx={{
              pl: showSideBar ? [4, "calc(20% + 85px)"] : [4, "85px"],
              transition: "0.2s ease-in-out",
            }}
          />
          <GettingHere
            sx={{
              pl: showSideBar ? [4, "calc(20% + 85px)"] : [4, "85px"],
              transition: "0.2s ease-in-out",
            }}
          />
          <AboutUs
            sx={{
              pl: showSideBar ? [4, "calc(20% + 85px)"] : [4, "85px"],
              transition: "0.2s ease-in-out",
            }}
          />
        </div>
      </Grid>
    </Layout>
  );
};

export default IndexPage;
