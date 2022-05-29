/** @jsx jsx */

import { jsx, Heading, Flex, Grid, Box, Image } from "theme-ui";
import ReactTooltip from "react-tooltip";
import Drinks from "../images/drinks.png";
import Cake from "../images/wedding-cake.png";
import Coffee from "../images/coffee.png";
import Section from "./Section";
import Map from "../images/shuttle-map.png";

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
              7:30 - 9:30pm @ Ceremony Lawn
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
              4:30pm @ Ceremony Lawn
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
              9-11am @ Event Barn
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
      <Box
        sx={{
          display: ["block", "block", "flex"],
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Heading as="h1" sx={{ mt: 6, mb: 4 }}>
            Shuttle information
          </Heading>

          <strong>Friday</strong>
          <p sx={{ mb: 3 }}>
            Shuttles to Welcome Drinks will begin at <strong>7:15pm</strong>,
            and loop every 15-20 minutes. The last shuttle will leave Saltwater
            Farm at <strong>9:45pm</strong>.
          </p>
          <strong>Saturday</strong>
          <p sx={{ mb: 4 }}>
            Shuttles to the Ceremony will begin at <strong>3:30pm</strong>. The
            last shuttle will arrive at Saltwater Farm at 4:20pm.
          </p>
          <ul sx={{ mb: 4 }}>
            <li>Juniper Lane Guest House - 3:35pm</li>
            <li>Discovery Inn - 3:45pm</li>
            <li>Tucker House Inn / Harrison House - 3:35pm & 4:05pm</li>
            <li>Friday Harbor House - 3:45pm & 4:15pm</li>
            <li>Earthbox Inn - 3:55pm & 4:15pm</li>
          </ul>
          <p sx={{ mb: 4 }}>
            Shuttles will began departing Saltwater Farm at{" "}
            <strong>9:00pm</strong>. The Shuttle will depart Saltwater Farm
            about every half hour. The last shuttle will depart at{" "}
            <strong>12:00 midnight</strong>.
          </p>
          <strong>Sunday</strong>
          <p sx={{ mb: 4 }}>
            Shuttles to Farewell Brunch will begin at <strong>8:45am</strong>,
            and loop every 15-20 minutes. The last shuttle will leave Saltwater
            Farm at <strong>11:15am</strong>.
          </p>
        </div>
        <Image
          src={Map}
          sx={{
            display: "block",
            mt: [3, 3, 6],
            mr: [0, 0, 4],
            ml: [0, 0, 4],
            borderRadius: "5px",
            width: ["100%", "100%", "40%"],
            minWidth: "300px",
            objectFit: "contain",
          }}
        />
      </Box>
    </Section>
  );
};

export default Details;
