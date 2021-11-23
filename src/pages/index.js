/** @jsx jsx */

import { useState, useEffect } from "react";
import { jsx, Grid, Image, Flex } from "theme-ui";

import Layout from "../components/Layout";
import Details from "../components/Details";
import Landing from "../components/Landing";
import GettingHere from "../components/GettingHere";
import Lodging from "../components/Lodging";
import AboutUs from "../components/AboutUs";
import Nav from "../components/Nav";
import Welcome from "../components/Welcome";
import ThingsToDo from "../components/ThingsToDo";
import WeddingParty from "../components/WeddingParty";
import Quiz from "../components/Quiz";
import HamburgerClose from "../components/HamburgerClose";

import MiniLogo from "../images/mini-logo.png";
import HomeIcon from "../images/home_24px.png";
import GettingHereIcon from "../images/explore_24px.png";
import AboutUsIcon from "../images/favorite_border_24px.png";
import DetailsIcon from "../images/details-icon.png";
import WelcomeIcon from "../images/welcome-icon.png";
import ThingsToDoIcon from "../images/things-to-do-icon.png";
import BridalPartyIcon from "../images/bridal-party-icon.png";
import QuizIcon from "../images/quiz-icon.png";

function Footer() {
  return (
    <Flex
      sx={{ p: 4, bg: "blue-dark", color: "yellow-light", fontSize: "10pt" }}
    >
      © 2021 Katie George and Meg Delaney <br />
      Handcrafted during late nights over several glasses of wine
    </Flex>
  );
}

const IndexPage = () => {
  const [prevScrollPos, setPrevScrollPos] = useState("");
  const [visible, setVisible] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);

  const wndw = typeof window !== "undefined" && window;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = wndw.pageYOffset;
  //     const vsble =
  //       prevScrollPos > currentScrollPos ||
  //       currentScrollPos < 50 ||
  //       showSideBar;

  //     setPrevScrollPos(currentScrollPos);
  //     setVisible(vsble);
  //   };

  //   wndw.addEventListener("scroll", handleScroll);

  //   return () => {
  //     wndw.removeEventListener("scroll", handleScroll);
  //   };
  // }, [wndw.pageYOffset]);

  const items = [
    {
      label: "Home",
      href: "home",
      icon: MiniLogo,
    },
    {
      label: "Welcome",
      href: "welcome",
      icon: WelcomeIcon,
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
      label: "Lodging",
      href: "lodging",
      icon: HomeIcon,
    },
    {
      label: "Things To Do",
      href: "things-to-do",
      icon: ThingsToDoIcon,
    },
    {
      label: "About Us",
      href: "about-us",
      icon: AboutUsIcon,
    },
    {
      label: "Wedding Party",
      href: "wedding-party",
      icon: BridalPartyIcon,
    },
    {
      label: "Guess Who?",
      href: "quiz",
      icon: QuizIcon,
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
              height: "60px",
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
              <Image src={MiniLogo} sx={{ height: "30px", mt: "15px" }} />
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
          <div sx={{ filter: showSideBar ? "brightness(50%)" : "none" }}>
            <Landing />
            <Welcome />
            <Details />
            <GettingHere />
            <Lodging />
            <ThingsToDo />
            <AboutUs />
            <WeddingParty />
            <Quiz />
            <Footer />
          </div>
        </div>
      </Grid>
    </Layout>
  );
};

export default IndexPage;
