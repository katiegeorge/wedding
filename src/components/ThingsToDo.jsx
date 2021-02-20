/** @jsx jsx */

import { jsx, Image, Flex } from "theme-ui";
import Section from "./Section";
import Boat from "../images/boat.png";

const ThingsToDo = ({ className }) => {
  return (
    <Section
      heading="Things To Do"
      id="things-to-do"
      light
      className={className}
    >
      <Flex sx={{ display: ["block", "flex"] }}>
        <div sx={{ flex: 2, mr: [0, 5] }}>
          <p sx={{ mt: 4 }}>
            <strong>Seattle</strong>
            <br />
            For a true Meg and Katie experience, you would probably hit a
            brewery or two after walking around a park or going on a hike with
            Archie. A few of our favorite Seattle breweries are Fremont Brewing,
            Stoup, and Peddler. We love walks around Green Lake and through the
            Arboretum. If you’re looking for more classic Seattle experiences,
            Pike Place Market and the Space Needle are must sees. Some great
            hikes in the area are Twin Falls (3 miles), Rattlesnake Ledge (4
            miles), and Snow Lake (7 miles).
          </p>
          <p sx={{ mt: 4 }}>
            <strong>San Juan Island</strong>
            <br />
            The San Juan Islands are choc full of nature-y activities. Whale
            watching is a must, and kayaking, boating, and hiking are all very
            popular on the islands. Friday Harbor is a picturesque small harbor
            town with dozens of shops and restaurants. Some favorites are San
            Juan Island Brewery and San Juan Bistro.
          </p>
        </div>

        <div sx={{ flex: 1 }} />
      </Flex>
    </Section>
  );
};

export default ThingsToDo;
