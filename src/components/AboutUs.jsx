/** @jsx jsx */

import { jsx, Image, Flex } from "theme-ui";
import Section from "./Section";
import Boat from "../images/boat.png";

const AboutUs = ({ className, showSideBar }) => {
  return (
    <Section
      heading="About Us"
      id="about-us"
      light
      className={className}
      showSideBar={showSideBar}
    >
      <Flex sx={{ display: ["block", "flex"] }}>
        <div sx={{ flex: 2, mr: [0, 5] }}>
          <p sx={{ mt: 4 }}>
            Like all of the most storied and epic romances of the 21st century,
            we met on a dating app. After the initial small talk messages about
            Seattle weather, mutual friends from Northwestern, and the 2018
            Winter Olympics (we really bonded over the excitement of the US
            curling team), Katie made the bold movie to ask Meg out on a date.
            And Meg asked for a raincheck. Despite Katie’s fear that she was
            being ghosted, Meg was actually on a ski vacation in Utah with her
            family. As soon as Meg was back in Seattle, we met for a beer at
            Outlander Brewing. Our second date, a concert and drinks, happened
            just a few days later and lasted for 12 hours, as we just never ran
            out of things to talk about. Over 3 years later, we still haven’t
            run out of things to talk about.
          </p>
          <p sx={{ mt: 4 }}>
            In October of 2020, after a whirlwind of a year that included 8
            months of quarantine, buying a house, and bringing home our puppy
            Archie, we took a trip to Leavenworth, WA for a cabin weekend away
            in the mountains. In an impressive feat of secrecy and collusion
            with Archie, Katie had snuck a ring and a bottle of champagne in her
            suitcase. Katie proposed to Meg before a homemade dinner with
            candles, champagne, and a very confused puppy looking on. Not to be
            outdone, Meg was also ready with a ring, and proposed to Katie at
            sunset on the dock of the lake just a few days later. The Double
            Proposal was complete!
          </p>
        </div>

        <Image src={Boat} sx={{ flex: 1, objectFit: "contain", mt: [4, 0] }} />
      </Flex>
    </Section>
  );
};

export default AboutUs;
