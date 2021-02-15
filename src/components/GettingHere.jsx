/** @jsx jsx */

import { Box, jsx, Heading } from "theme-ui";

const Details = ({ className }) => {
  return (
    <Box
      className={className}
      sx={{ minHeight: "100vh", bg: "purple-light", p: 4 }}
    >
      <Heading as="h1">Getting here</Heading>
      <Heading>Coming soon!</Heading>
    </Box>
  );
};

export default Details;
