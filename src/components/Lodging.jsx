/** @jsx jsx */

import { jsx, Heading, Flex, Grid, Image } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import FHH from "../images/lodging/friday-harbor-house.png";
import FHS from "../images/lodging/FHS.png";
import Earthbox from "../images/lodging/earthbox.png";
import IslandInn from "../images/lodging/island-inn.png";
import Juniper from "../images/lodging/juniper-lane.png";
import Lakedale from "../images/lodging/lakedale-resort.png";
import TuckerHouse from "../images/lodging/tucker-house.png";
import SpringTree from "../images/lodging/springtree-suite.png";
import Discovery from "../images/lodging/discovery-inn.png";
import Saltwater from "../images/lodging/saltwater.png";
import Section from "./Section";
import Anchor from "./Anchor";

const Lodging = ({ className }) => {
  const lodgingOptions = [
    {
      label: "Earthbox Inn & Spa",
      description:
        "Just four blocks away from the ferry landing and the only hotel on San Juan Island with an indoor pool. Guests will get a 10% discount once 10 or more rooms are reached by calling the number below (don't book through the website!)",
      href: "https://www.earthboxinn.com/",
      phone: "360.378.4000 ext 1 (not 2)",
      src: Earthbox,
      price: "$$",
    },
    {
      label: "Tucker House Inn",
      description:
        "Steps from the ferry landing with private, beautifully appointed guest rooms, suites, and cottages. Personalized services and sumptuous breakfasts with local ingredients. Pet-friendly. The link is for our room block.",
      href:
        "https://mandrillapp.com/track/click/14107399/reserve1.resnexus.com?p=eyJzIjoiRjFhOW82bTVVdDdVR294bS1WODMxcVlvdlZZIiwidiI6MSwicCI6IntcInVcIjoxNDEwNzM5OSxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL3Jlc2VydmUxLnJlc25leHVzLmNvbVxcXC9yZXNuZXh1c1xcXC9yZXNlcnZhdGlvbnNcXFwvZ3JvdXBcXFwvOTlFNjBEN0YtODE4RS00QjQ4LUE4QkYtNTg0NzNERTI4RDZEP0dJRD1jMmY3MWQ3OC04MWQ3LTQwNGQtOGFkMS05OWZjZjllY2RlNjBcIixcImlkXCI6XCI4NWVkMmNlYWU2ZTY0MzgwODM1NDNkZDY1ZGM2MWQ4N1wiLFwidXJsX2lkc1wiOltcIjk1MzM1NGVkYmY0M2M2ODM0YjNkOTQwYmQ0ZmFmMjljY2M4OTc5Y2VcIl19In0",
      phone: "360.378.3587",
      src: TuckerHouse,
      price: "$$",
    },
    {
      label: "Friday Harbor Suites",
      description:
        "An affordable option at the edge of town (15 min walk to ferry landing). Rooms range in size from cozy studio suites to large multi-room accommodations. Hot breakfast included.",
      href: "https://www.fridayharborsuites.com/en/",
      phone: "360.378.3031",
      src: FHS,
      price: "$",
    },
    {
      label: "Friday Harbor House",
      description:
        "Located in the heart of Friday Harbor right next to the ferry terminal, Friday Harbor House is perched atop a bluff overlooking the scenic harbor. Walking distance to all of the amenities of downtown.",
      href: "https://www.fridayharborhouse.com/",
      phone: "360.378.8455",
      src: FHH,
      price: "$$$",
    },
    {
      label: "Island Inn at 123 West",
      description:
        "Contemporary boutique hotel directly above the ferry landing with amazing water views. Everything from Euro rooms with a shared living space to several spacious penthouse suites.",
      href: "https://123west.com/",
      phone: "360.378.4400",
      src: IslandInn,
      price: "$$",
    },
    {
      label: "Juniper Lane Guest House",
      description:
        "A unique boutique Inn nestled on the edge of Friday Harbor with a rural feel yet it is still close to town. Custom-crafted bold mosaic of exotic woods, tile, art, and color. Can accommodate up to 20.",
      href: "http://juniperlaneguesthouse.com/",
      phone: "360.378.7761",
      src: Juniper,
      price: "$$",
    },
    {
      label: "Lakedale Resort",
      description:
        "Stay in the newly remodeled lodge rooms, log cabins, yurts, glamping tents, or bring your own tent/RV. Forests to explore, 40-acres of lakes to canoe/paddle/swim, and an activity tent for kids.",
      href: "https://www.lakedale.com/",
      phone: "360.378.2350",
      src: Lakedale,
      price: "$$",
    },

    {
      label: "Springtree Suite",
      description:
        "Two bedroom condo located in one of Friday Harbor’s historic buildings. Master suite with California King, fully equipped gourmet kitchen, off-street parking and a washer/dryer. Free Wi-Fi.",
      href: "http://springtreesuite.com/",
      phone: "206.240.6142",
      src: SpringTree,
      price: "$$",
    },
    {
      label: "Discovery Inn",
      description:
        "Recently renovated spacious and clean queen-bed rooms in a relaxing atmosphere. Lovely property with yard games, sitting areas, barbecues and a seasonal outdoor Jacuzzi.",
      href: "https://www.discoveryinn.com/",
      phone: "360.378.2000",
      src: Discovery,
      price: "$$",
    },
    {
      label: "Camping onsite at Saltwater",
      description:
        "There is limited free camping onsite at the wedding venue, steps from the barn. There are bathrooms and showers available as well. If you are interested in this, reach out to Meg and Katie!",
      href: "https://www.saltwaterfarmsji.com/",
      phone: "",
      src: Saltwater,
      price: "Free!",
    },
  ];

  function LodgingTile(props) {
    return (
      <Flex sx={{ flexDirection: "column" }}>
        <Image sx={{ my: 3 }} src={props.src} alt={props.label} />
        <Flex sx={{ justifyContent: "space-between" }}>
          <Heading as="h3" sx={{ fontFamily: "body", fontSize: "18pt" }}>
            {props.label}
          </Heading>
          <p>{props.price}</p>
        </Flex>
        <p sx={{ my: 3, fontSize: "14pt" }}>{props.description}</p>
        <p>{props.phone}</p>
        <Anchor href={props.href}>Website</Anchor>
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
        The first two options (Earthbox and Tucker House Inn) have room blocks
        for our wedding, the instructions for booking each are in the
        description.
      </p>
      <Grid columns={[1, 3]} gap={4} sx={{ mt: 4 }}>
        {lodgingOptions.map((option) => (
          <LodgingTile
            src={option.src}
            label={option.label}
            description={option.description}
            href={option.href}
            phone={option.phone}
            price={option.price}
          />
        ))}
      </Grid>
    </Section>
  );
};

export default Lodging;
