/** @jsx jsx */

import { Box, jsx, Heading } from "theme-ui";
import Separator from "./Separator";

const Details = ({ className }) => {
  return (
    <Box
      className={className}
      sx={{
        minHeight: "100vh",
        bg: "purple-light",
        p: 4,
        pt: 6,
        position: "relative",
      }}
      id="getting-here"
    >
      <Separator />
      <Heading as="h1">Getting here</Heading>
      <Heading>Coming soon!</Heading>
    </Box>
  );
};

export default Details;
