/** @jsx jsx */

import { jsx, Heading, Image, Flex } from "theme-ui";
import Section from "./Section";
import Ferry from "../images/ferry.svg";
import { keyframes } from "@emotion/core";

const GettingHere = ({ className }) => {
  const rockBoat = keyframes`
        50% { transform:rotate(-5deg) translateY(-5px) }
  `;

  return (
    <Section heading="Getting Here" id="getting-here" className={className}>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: "80vh",
        }}
      >
        <Heading sx={{ mb: 5 }}>Coming soon!</Heading>
        <Image
          src={Ferry}
          sx={{ animation: `${rockBoat} 2s ease-in-out infinite` }}
        />
      </Flex>
    </Section>
  );
};

export default GettingHere;
