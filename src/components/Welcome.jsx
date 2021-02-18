/** @jsx jsx */

import { jsx, Image, Flex } from "theme-ui";
import Section from "./Section";
import Boat from "../images/boat.png";

const Welcome = ({ className, showSideBar }) => {
  return (
    <Section
      heading="Welcome!"
      id="welcome"
      className={className}
      showSideBar={showSideBar}
    >
      <Flex sx={{ display: ["block", "flex"] }}>
        <div sx={{ flex: 2, mr: [0, 5] }}>
          <p sx={{ mt: 4 }}>It’s finally happening!</p>
          <p sx={{ mt: 4 }}>
            Welcome to our wedding website, we can’t wait to celebrate our
            special day with you.
          </p>
          <p sx={{ mt: 4 }}>
            We’ve created this website as a convenient and interactive way to
            share all of the important details with you in the lead up to our
            wedding. And to have some fun.
          </p>
          <p sx={{ mt: 4 }}>
            You can also read more about our journey, get to know our amazing
            bridal party, and check out our registry information.
          </p>
          <p sx={{ mt: 4 }}>
            So have fun, take a look around and don’t forget to RSVP!
          </p>
          <p sx={{ mt: 4 }}>
            Finally – thank you for your ongoing love and support. We are so
            excited to share this day with you and look forward to dancing the
            night away with all of our favorite people!
          </p>
        </div>
        <Image src={Boat} sx={{ flex: 1, objectFit: "contain", mt: [4, 0] }} />
      </Flex>
    </Section>
  );
};

export default Welcome;
