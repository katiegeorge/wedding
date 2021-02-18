/** @jsx jsx */

import { Box, jsx, Heading } from "theme-ui";
import Separator from "./Separator";

const Section = ({ light, showSideBar, id, heading, children, className }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        p: 4,
        pt: light ? 6 : [6, "100px"],
        position: "relative",
        color: light ? "blue-dark" : "yellow-light",
        bg: light ? "yellow-light" : "blue-dark",
        transition: "0.2s ease-in-out",
        pl: showSideBar ? [4, "calc(20% + 85px)"] : [4, "85px"],
        pb: 6,
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
