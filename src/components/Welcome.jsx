/** @jsx jsx */

import { jsx, Image, Flex, Text } from "theme-ui";
import Section from "./Section";
import Smiley from "../images/smiley-bw.png";
import SpotifyPlayer from "react-spotify-player";

const Welcome = ({ className }) => {
  // size may also be a plain string using the presets 'large' or 'compact'
  const size = {
    width: "100%",
    height: 400,
  };
  const view = "list"; // or 'coverart'
  const theme = "black"; // or 'white'
  return (
    <Section heading="Welcome!" id="welcome" className={className}>
      <Flex sx={{ display: ["block", "flex"] }}>
        <div sx={{ flex: 2, mr: [0, 5] }}>
          <p sx={{ mt: 4 }}>It’s finally happening!</p>
          <p sx={{ mt: 4 }}>
            Welcome to our wedding website. We’ve created this website (from
            scratch!) as a convenient and interactive way to share all of the
            important details with you in the lead up to our wedding. And to
            have some fun.
          </p>
          <p sx={{ mt: 4 }}>
            You can also read more about our journey, get to know our amazing
            bridal party, and check out our registry information.
          </p>
          <p sx={{ mt: 4 }}>
            So have fun, take a look around and don’t forget to RSVP!
          </p>
          <p sx={{ mt: 4 }}>
            Finally, thank you for your ongoing love and support. We are so
            excited to share this day with you and look forward to dancing the
            night away with all of our favorite people!
          </p>
        </div>
        <div sx={{ flex: 1, mb: [0, "340px"] }}>
          <Flex sx={{ alignItems: "flex-end" }}>
            <Text sx={{ fontSize: 2, mb: 1, mt: [3, 0] }}>
              Listen to our favorite jams while you browse!
            </Text>
            <Image
              src="https://media1.giphy.com/media/5th7gvNFk2gfQc5fmo/200.gif?cid=ecf05e47mk6uvsl6rhsnt5l1fxze3mihbzxe5e1aitv6jybi&rid=200.gif"
              sx={{ height: "40px" }}
            />
          </Flex>
          <SpotifyPlayer
            uri="spotify:playlist:5tfjm66pxcqF2g2Z0ySqSr"
            size={size}
            view={view}
            theme={theme}
          />
          <Image
            src={Smiley}
            sx={{
              objectFit: "contain",
              mt: [4, 0],
              position: ["static", "absolute"],
              left: "200px",
              height: "200px",
              bottom: "0px",
              mb: ["-132px", 0],
            }}
          />
        </div>
      </Flex>
    </Section>
  );
};

export default Welcome;
