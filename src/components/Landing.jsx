/** @jsx jsx */

import * as React from 'react';
import { jsx, Flex, Heading, Box, Button } from "theme-ui";
import BackgroundImage from "../images/engagement-photo.png";
import VaccineBanner from "./VaccineBanner";
import Anchor from './Anchor';

const IndexPage = ({ className }) => {
  return (
    <>
      <VaccineBanner />
      <Box
        sx={{
          background: `url(${BackgroundImage}) no-repeat center center fixed`,
          backgroundPosition: ["45% center", "center center"],
          backgroundSize: "cover",
          p: 5,
          minHeight: "100vh",
          boxShadow: "inset 0 0 0 1000px #0d2d5e99",
          transition: ".2s ease",
          width: "100vw",
        }}
        id="home"
        className={className}
      >
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            pt: 6,
          }}
        >
          <Heading
            as="h1"
            sx={{
              color: "green-light",
              fontSize: ["96px", "128px"],
              lineHeight: "0.8",
            }}
          >
            Katie
            <br />{" "}
            <span
              sx={{
                fontSize: ["75px", "105px"],
                color: "yellow-light",
                verticalAlign: "top",
                display: "inline-block",
                pt: "5px",
              }}
            >
              &#38;
            </span>
            Meg
          </Heading>
          <Flex
            sx={{
              alignItems: ["center", "flex-end"],
              flexDirection: "column",
              alignSelf: "flex-end",
              mt: 6,
              mb: 4,
              fontWeight: 200,
              fontSize: 4,
              letterSpacing: "3px",
            }}
          >
            <p
              sx={{
                mb: [3, 0],
                textAlign: ["center", "right"],
                display: ["none", "block"],
              }}
            >
              Saturday June 25, 2022
            </p>
            <p
              sx={{
                mb: [3, 0],
                textAlign: ["center", "right"],
                display: ["block", "none"],
              }}
            >
              Saturday <br />
              June 25, 2022
            </p>
            <p sx={{ mb: [3, 0], textAlign: ["center", "right"] }}>
              Saltwater Farm @ Friday Harbor
            </p>
            <p sx={{ mb: [3, 4], textAlign: ["center", "right"] }}>
              San Juan Island, Washington
            </p>
            <Anchor isButton href="https://withjoy.com/katie-and-meg/rsvp" target="_blank" rel="noreferrer">RSVP</Anchor>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default IndexPage;
