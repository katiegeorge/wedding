/** @jsx jsx */

import { Box, jsx, Heading } from "theme-ui";
import Separator from "./Separator";

const Details = ({ className }) => {
  return (
    <Box
      className={className}
      sx={{
        minHeight: "100vh",
        bg: "blue-dark",
        p: 4,
        pt: 6,
        position: "relative",
      }}
      id="details"
    >
      <Separator neg />
      <Heading as="h1">Details</Heading>
      <Heading>Coming soon!</Heading>
    </Box>
  );
};

export default Details;
