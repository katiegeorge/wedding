/** @jsx jsx */

import { jsx, Heading, Image, Flex, Grid } from "theme-ui";
import FHH from "../images/friday-harbor-house.jpeg";
import FHS from "../images/FHS.jpeg";
import Earthbox from "../images/earthbox.jpeg";
import IslandInn from "../images/island-inn.jpeg";
import Juniper from "../images/juniper-lane.jpeg";
import Lakedale from "../images/lakedale-resort.jpeg";
import TuckerHouse from "../images/tucker-house.jpeg";
import SpringTree from "../images/springtree-suite.jpeg";
import Discovery from "../images/discovery-inn.jpeg";
import Section from "./Section";
import Anchor from "./Anchor";

const Lodging = ({ className }) => {
  const lodgingOptions = [
    {
      label: "Friday Harbor House",
      description:
        "Located in the heart of Friday Harbor right next to the ferry terminal, Friday Harbor House is perched atop a bluff overlooking the scenic harbor. Walking distance to all of the amenities of downtown.",
      href: "https://www.fridayharborhouse.com/",
      phone: "360.378.8455",
      src: FHH,
    },
    {
      label: "Earthbox Inn & Spa",
      description:
        "Just four blocks away from the ferry landing and the only hotel on San Juan Island with an indoor pool. All rooms have simple designs and calming colors, inspired by the earth, sea, sun and sky.",
      href: "https://www.earthboxinn.com/",
      phone: "360.378.4000",
      src: Earthbox,
    },
    {
      label: "Friday Harbor Suites",
      description:
        "An affordable option at the edge of town (15 min walk to ferry landing). Rooms range in size from cozy studio suites to large multi-room accommodations. Hot breakfast included.",
      href: "https://www.fridayharborsuites.com/en/",
      phone: "360.378.3031",
      src: FHS,
    },
    {
      label: "Island Inn at 123 West",
      description:
        "Contemporary boutique hotel directly above the ferry landing with amazing water views. Everything from Euro rooms with a shared living space to several spacious penthouse suites.",
      href: "https://123west.com/",
      phone: "360.378.4400",
      src: IslandInn,
    },
    {
      label: "Juniper Lane Guest House",
      description:
        "A unique boutique Inn nestled on the edge of Friday Harbor with a rural feel yet it is still close to town. Custom-crafted bold mosaic of exotic woods, tile, art, and color. Can accommodate up to 20.",
      href: "http://juniperlaneguesthouse.com/",
      phone: "360.378.7761",
      src: Juniper,
    },
    {
      label: "Lakedale Resort",
      description:
        "Stay in the newly remodeled lodge rooms, log cabins, yurts, glamping tents, or bring your own tent/RV. Forests to explore, 40-acres of lakes to canoe/paddle/swim, and an activity tent for kids.",
      href: "https://www.lakedale.com/",
      phone: "360.378.2350",
      src: Lakedale,
    },
    {
      label: "Tucker House Inn",
      description:
        "Steps from the ferry landing with private, beautifully appointed guest rooms, suites, and cottages. Personalized services and sumptuous breakfasts with local ingredients. Pet-friendly.",
      href: "https://www.tuckerharrisoninn.com/",
      phone: "360.378.3587",
      src: TuckerHouse,
    },
    {
      label: "Springtree Suite",
      description:
        "Two bedroom condo located in one of Friday Harbor’s historic buildings. Master suite with California King, fully equipped gourmet kitchen, off-street parking and a washer/dryer. Free Wi-Fi.",
      href: "http://springtreesuite.com/",
      phone: "206.240.6142",
      src: SpringTree,
    },
    {
      label: "Discovery Inn",
      description:
        "Recently renovated spacious and clean queen-bed rooms in a relaxing atmosphere. Lovely property with yard games, sitting areas, barbecues and a seasonal outdoor Jacuzzi.",
      href: "https://www.discoveryinn.com/index.html",
      phone: "360.378.2000",
      src: Discovery,
    },
  ];

  function LodgingTile(props) {
    return (
      <Flex sx={{ flexDirection: "column" }}>
        <Image sx={{ my: 3 }} src={props.src} alt={props.label} />
        <Heading as="h3" sx={{ fontFamily: "body", fontSize: "18pt" }}>
          {props.label}
        </Heading>
        <p sx={{ my: 3, fontSize: "14pt" }}>{props.description}</p>
        <Anchor href={props.href}>{props.href}</Anchor>
        <p>{props.phone}</p>
      </Flex>
    );
  }

  return (
    <Section light heading="Lodging" id="lodging" className={className}>
      <p sx={{ mt: 3 }}>
        Here are some options of places to stay nearby. We HIGHLY recommended
        booking as early as possible - the island will be very busy in June and
        accomodations can book up months in advance.
      </p>
      <p sx={{ mt: 3 }}>
        Stay tuned for some potential discount codes from us in the coming
        months!
      </p>
      <Grid columns={[1, 3]} gap={4} sx={{ mt: 4 }}>
        {lodgingOptions.map((option) => (
          <LodgingTile
            src={option.src}
            label={option.label}
            description={option.description}
            href={option.href}
            phone={option.phone}
          />
        ))}
      </Grid>
    </Section>
  );
};

export default Lodging;
