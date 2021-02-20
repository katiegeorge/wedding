/** @jsx jsx */

import { jsx, Heading, Flex } from "theme-ui";
import Section from "./Section";

const Details = ({ className }) => {
  return (
    <Section heading="Details" id="details" light className={className}>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Heading sx={{ my: 5 }}>Stay tuned!</Heading>
      </Flex>
    </Section>
  );
};

export default Details;
