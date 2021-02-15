/** @jsx jsx */

import { Box, jsx, Heading } from "theme-ui";

const Details = ({ className }) => {
  return (
    <Box
      className={className}
      sx={{ minHeight: "100vh", bg: "blue-dark", p: 4 }}
    >
      <Heading as="h1">Details</Heading>
      <Heading>Coming soon!</Heading>
    </Box>
  );
};

export default Details;
