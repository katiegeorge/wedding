/** @jsx jsx */

import { jsx, Flex, Image } from "theme-ui";
import Brewery from "../images/brewery.jpg";
import Hiking from "../images/hiking.jpg";
import Hiking2 from "../images/hiking-2.jpg";
import Kayaking from "../images/kayaking.jpg";
import Section from "./Section";
import Anchor from "./Anchor";

const ThingsToDo = ({ className }) => {
  return (
    <Section heading="Things To Do" id="things-to-do" className={className}>
      <Flex sx={{ display: ["block", "block", "flex"] }}>
        <div sx={{ flex: 2, mr: [0, 5] }}>
          <p sx={{ mt: 4 }}>
            <strong>Seattle</strong>
            <br />
            For a true Meg and Katie experience, you would probably hit a
            brewery or two after walking around a park or going on a hike with
            Archie. A few of our favorite Seattle breweries are Fremont Brewing,
            Stoup, and Bale Breaker. We love walks around Green Lake and through
            the Arboretum. If you’re looking for more classic Seattle
            experiences, Pike Place Market and the Space Needle are must sees.
            Grab some oysters and champagne at Taylor Shellfish after exploring
            the Chihuly Glass Museum and walking around the Seattle Center. Some
            great hikes in the area are Twin Falls (3 miles), Rattlesnake Ledge
            (4 miles), and Snow Lake (7 miles).
          </p>
          <p sx={{ mt: 4 }}>
            <strong>San Juan Island</strong>
            <br />
            The San Juan Islands are choc full of nature-y activities. Whale
            watching is a must, and kayaking, boating, and hiking are all very
            popular on the islands. Friday Harbor is a picturesque small harbor
            town with dozens of shops and restaurants. Some of our favorites are
            Friday Harbor House Restaurant (if you're feeling fancy, and a great
            brunch), Duck Soup Inn for dinner, Downriggers for a good view and
            big deck, Madrona Bar and Grill (a good spot near Roche Harbor to
            see that part of the island), and of course San Juan Island Brewery
            for the best craft beer on the islands.
          </p>
          <p sx={{ mt: 4 }}>
            For activities, we would highly recommend checking out Lime Kiln
            State Park and Deadman's Bay for an approachable and stunning nature
            park with some of the best views of the islands and a lovely
            lighthouse. Hiking trails from 0.5-5ish miles. Rent a boat or kayak
            from{" "}
            <Anchor href="https://www.crystalseas.com/">
              Crystal Seas Kayak Rentals
            </Anchor>{" "}
            or{" "}
            <Anchor href="http://www.fridayharborboatrental.com/">
              Friday Harbor Boat Rental.
            </Anchor>{" "}
            If you don't have a car and just want to explore the town, there are
            lots of cute artisan shops right along the water.
          </p>
        </div>

        <div
          sx={{
            flex: 1,
            position: "relative",
            display: ["flex", "flex", "block"],
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src={Brewery}
            sx={{
              position: ["static", "static", "absolute"],
              display: "block",
              mt: 3,
              borderRadius: "5px",
              width: ["70%", "70%", "50%", "40%"],
              top: 0,
              left: 0,
            }}
          />
          <Image
            src={Hiking2}
            sx={{
              position: ["static", "static", "absolute"],
              display: "block",
              mt: 3,
              borderRadius: "5px",
              width: ["70%", "70%", "50%", "40%"],
              left: "66%",
              top: "33%",
            }}
          />
          <Image
            src={Kayaking}
            sx={{
              position: ["static", "static", "absolute"],
              display: "block",
              mt: 3,
              borderRadius: "5px",
              width: ["70%", "70%", "55%", "40%"],
              top: "66%",
              left: 0,
            }}
          />
        </div>
      </Flex>
    </Section>
  );
};

export default ThingsToDo;
