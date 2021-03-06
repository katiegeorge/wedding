/** @jsx jsx */

import { jsx, Heading, Flex, Grid, Box, Image } from "theme-ui";
import ReactTooltip from "react-tooltip";
import Drinks from "../images/drinks.png";
import Cake from "../images/wedding-cake.png";
import Coffee from "../images/coffee.png";
import Section from "./Section";

const Details = ({ className }) => {
  return (
    <Section heading="Details" id="details" light className={className}>
      <ReactTooltip multiline backgroundColor="#0D2D5E" />
      <Flex
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid columns={[1, 3]} gap="5" sx={{ mt: 5 }}>
          <Box sx={{ textAlign: "center" }}>
            <Image sx={{ height: "100px" }} src={Drinks} />
            <Heading sx={{ fontSize: "24px", my: 3 }} as="h3">
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
          <Box sx={{ mt: [5, 0], textAlign: "center" }}>
            <Image sx={{ height: "100px" }} src={Cake} />
            <Heading sx={{ fontSize: "24px", my: 3 }} as="h3">
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
              Attire: Dressy Casual{" "}
              <span data-tip="What the heck is Dressy Casual??? <br /><br /><br />Dressy casual is somewhere between jeans and formal.<br /> Think, a long summer dress or chinos and a button down.">
                [?]
              </span>
            </em>
          </Box>
          <Box sx={{ mt: [5, 0], textAlign: "center" }}>
            <Image sx={{ height: "100px" }} src={Coffee} />
            <Heading sx={{ fontSize: "24px", my: 3 }} as="h3">
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
