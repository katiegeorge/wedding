/** @jsx jsx */

import { jsx, Heading, Flex } from "theme-ui";
import Section from "./Section";

const Details = ({ className, showSideBar }) => {
  return (
    <Section
      heading="Details"
      id="details"
      light
      className={className}
      showSideBar={showSideBar}
    >
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: "80vh",
        }}
      >
        <Heading sx={{ mb: 5 }}>Stay tuned!</Heading>
      </Flex>
    </Section>
  );
};

export default Details;
