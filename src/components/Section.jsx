/** @jsx jsx */

import { Box, jsx, Heading } from "theme-ui";
import Separator from "./Separator";

const Section = ({ bg, id, heading, children, neg }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bg,
        p: 4,
        pt: neg ? 6 : 5,
        position: "relative",
      }}
      id={id}
    >
      <Separator neg={neg} />
      <Heading as="h1">{heading}</Heading>
      {children}
    </Box>
  );
};

export default Section;
