/** @jsx jsx */

import { Box, jsx, Heading } from "theme-ui";
import Separator from "./Separator";

const Section = ({ light, id, heading, children, className }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
        pt: light ? 6 : 5,
        position: "relative",
        color: light ? "blue-dark" : "yellow-light",
        bg: light ? "yellow-light" : "blue-dark",
      }}
      id={id}
      className={className}
    >
      <Separator neg={light} />
      <Heading as="h1">{heading}</Heading>
      {children}
    </Box>
  );
};

export default Section;
