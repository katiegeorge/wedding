/** @jsx jsx */

import { jsx, Heading, Flex, Grid, Box } from "theme-ui";
import Section from "./Section";

const Details = ({ className }) => {
  return (
    <Section heading="Details" id="details" light className={className}>
      <Flex
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid columns={[1, 3]} sx={{ mt: 5 }}>
          <Box>
            <Heading sx={{ fontSize: "24px", mb: 3 }} as="h3">
              Friday, June 24, 2022
            </Heading>
            <strong sx={{ display: "block" }}>Welcome Drinks</strong>
            <em sx={{ fontSize: "19px", mb: 3, display: "block" }}>
              @ Saltwater Farm
            </em>
            <p>
              Join us on Friday evening to say hello before the big day! We'll
              have drinks, snacks, yard games and more!
            </p>
            <em sx={{ fontSize: "19px", mt: 3, display: "block" }}>
              Attire: Casual
            </em>
          </Box>
          <Box>
            <Heading sx={{ fontSize: "24px", mb: 3 }} as="h3">
              Saturday, June 25, 2022
            </Heading>
            <strong sx={{ display: "block" }}>Ceremony &#38; Reception </strong>
            <em sx={{ fontSize: "19px", mb: 3, display: "block" }}>
              @ Saltwater Farm
            </em>
            <p>
              We'll say "I Do" on Saturday in front of incredible PNW views, and
              then move to the barn for dinner, drinks, and dancing.
            </p>
            <em sx={{ fontSize: "19px", mt: 3, display: "block" }}>
              Attire: Dressy Casual
            </em>
          </Box>
          <Box>
            <Heading sx={{ fontSize: "24px", mb: 3 }} as="h3">
              Sunday, June 26, 2022
            </Heading>
            <strong sx={{ display: "block" }}>Brunch</strong>
            <em sx={{ fontSize: "19px", mb: 3, display: "block" }}>
              @ Saltwater Farm
            </em>
            <p>
              Join us on Sunday for a buffet brunch in the barn before everyone
              goes their own way.
            </p>
            <em sx={{ fontSize: "19px", mt: 3, display: "block" }}>
              Attire: Casual
            </em>
          </Box>
        </Grid>
      </Flex>
    </Section>
  );
};

export default Details;
