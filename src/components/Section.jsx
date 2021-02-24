/** @jsx jsx */

import { Box, jsx, Heading } from "theme-ui";
import Separator from "./Separator";
import FadeInSection from "./FadeInSection";

const Section = ({ light, id, heading, children, className }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        pt: light ? 6 : [6, "100px"],
        position: "relative",
        color: light ? "blue-dark" : "yellow-light",
        bg: light ? "yellow-light" : "blue-dark",
        transition: "0.2s ease-in-out",
        pb: 6,
        px: [4, 6],
      }}
      id={id}
      className={className}
    >
      <Separator neg={light} />
      <FadeInSection>
        <Heading as="h1" sx={{ fontSize: [6, 7] }}>
          {heading}
        </Heading>
      </FadeInSection>
      <FadeInSection delay>{children}</FadeInSection>
    </Box>
  );
};

export default Section;
