/** @jsx jsx */

import { jsx, Heading, Image, Flex } from "theme-ui";
import Section from "./Section";
import Anchor from "./Anchor";
import Ferry from "../images/ferry.png";
import Water from "../images/water-line.png";
import Car from "../images/carbody.png";
import Wheel from "../images/wheel.png";
import Road from "../images/road.png";
import Seaplane from "../images/seaplane.png";
import Airplane from "../images/plane.png";
import Clouds from "../images/clouds.png";
import { keyframes } from "@emotion/core";

const GettingHere = ({ className }) => {
  const rockBoat = keyframes`
        50% { transform:rotate(-5deg) translateY(-5px) }
  `;

  const upAndDown = keyframes`
        50% { transform: translateY(-8px) }
  `;

  const rumble = keyframes`
    0% {transform: rotate(0deg);}
    25% {transform: translate(1px, 0px) rotate(-1deg);}
    50% {transform: translate(0px, -1px) rotate(0deg);}
    75% {transform: translate(-1px, 0px) rotate(1deg);}
    100% {transform: translate(0px, 1px) rotate(0deg);}
  `;

  const spin = keyframes`
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
  `;

  return (
    <Section heading="Getting Here" id="getting-here" className={className}>
      <Flex>
        <div sx={{ flex: 3 }}>
          <p sx={{ my: 5 }}>
            If you are traveling to the San Juan Islands from outside the
            Seattle area, you’ll want to fly into the SeaTac (SEA) or Everett
            (PAE) airports. Paine Field in Everett is a smaller airport that
            allows you to skip Seattle traffic but has a limited number of
            incoming flights.
          </p>
        </div>
        <Flex
          sx={{ justifyContent: "center", flex: "1", position: "relative" }}
        >
          <Image
            src={Airplane}
            sx={{
              animation: `${upAndDown} 1s ease-in-out infinite`,
              mt: 4,
              width: "180px",
              objectFit: "contain",
            }}
          />
          <Image
            src={Clouds}
            sx={{
              mt: 4,
              width: "180px",
              objectFit: "contain",
              position: "absolute",
            }}
          />
        </Flex>
      </Flex>
      <Flex sx={{ alignItems: "flex-start" }}>
        <div sx={{ flex: 3 }}>
          <Heading sx={{ mb: 3 }}>Washington State Ferries</Heading>
          <p sx={{ mb: 3 }}>
            This is the most affordable way to travel to the islands. Ferries to
            the San Juan Islands depart from Anacortes, which is a 2-2.5 hour
            drive north of SeaTac airport. When you fly into the Seattle area,
            you can rent a car (from either airport) or take a shuttle north to
            Anacortes (from SeaTac airport only). Shuttle options include the{" "}
            <Anchor href="https://airporter.com/">
              Bellair Airporter Shuttle
            </Anchor>{" "}
            and the{" "}
            <Anchor href="https://islandairporter.com/index.html">
              Island Airporter
            </Anchor>
            .
          </p>
          <p sx={{ mb: 3 }}>
            If you rent a car, you can drive onto the ferry or park at the
            Anacortes Ferry Terminal and walk on. If you plan on driving your
            car onto the ferry, reservations are HIGHLY recommended! You will
            need to make reservations for both your arrival and departure trips.
          </p>
          <p sx={{ mb: 3 }}>
            Ferry reservations are released on the{" "}
            <Anchor href="https://secureapps.wsdot.wa.gov/Ferries/Reservations/Vehicle/default.aspx">
              WSF website
            </Anchor>{" "}
            in three different waves: 30% when the schedule first opens, 30% two
            months prior to the departure date, and 30% two days prior to the
            departure date. The remaining 10% are saved for cars that haven’t
            made reservations but these go quickly and it’s best not to depend
            on them.
          </p>
          <p sx={{ mb: 5 }}>
            There is no charge when booking a ferry reservation but you will be
            charged a “no show” fee of $19 if you book a reservation and then
            don’t use it. You can cancel your reservation up until 5pm the day
            before your travel date without being charged the no show fee. More
            information on ferry schedules, reservations, and the cost of ferry
            tickets can be found{" "}
            <Anchor href="https://www.wsdot.com/ferries/">here.</Anchor>
          </p>
        </div>
        <Flex
          sx={{ justifyContent: "center", flex: "1", position: "relative" }}
        >
          <Image
            src={Ferry}
            sx={{
              animation: `${rockBoat} 2s ease-in-out infinite`,
              mt: 5,
              width: "200px",
              objectFit: "contain",
            }}
          />
          <Image
            src={Water}
            sx={{
              width: "200px",
              objectFit: "contain",
              position: "absolute",
              top: "125px",
            }}
          />
        </Flex>
      </Flex>

      <Flex sx={{ alignItems: "flex-start" }}>
        <div sx={{ flex: 3 }}>
          <Heading sx={{ mb: 3 }}>Land or Sea Planes</Heading>
          <p sx={{ mb: 5 }}>
            There are several regional airlines that fly from the Seattle area
            to the San Juan Islands. This is the fastest option for travel to
            the islands and the views are breathtaking! If you fly into SeaTac
            airport, you will be shuttled to Boeing Field for a land plane
            flight or Lake Union/Washington for a sea plane flight. Check out{" "}
            <Anchor href="https://www.kenmoreair.com/">Kenmore Air</Anchor>,{" "}
            <Anchor href="https://fridayharborseaplanes.rezdy.com/catalog/291515/2019-scheduled-flights">
              Friday Harbor Seaplanes
            </Anchor>
            ,{" "}
            <Anchor href="http://sanjuanairlines.com/">
              San Juan Airlines
            </Anchor>{" "}
            (the only option from Paine Field airport in Everett),{" "}
            <Anchor href="Point to Point Air">Point to Point Air</Anchor>, or{" "}
            <Anchor href="http://www.westwindav.com/">Westwind Aviation</Anchor>{" "}
            to book your flights.
          </p>
        </div>
        <Flex
          sx={{ justifyContent: "center", flex: "1", position: "relative" }}
        >
          <Image
            src={Seaplane}
            sx={{
              animation: `${rockBoat} 2s ease-in-out infinite`,
              mt: 5,
              width: "200px",
              objectFit: "contain",
            }}
          />
          <Image
            src={Water}
            sx={{
              width: "200px",
              objectFit: "contain",
              position: "absolute",
              top: "138px",
              left: "60px",
            }}
          />
        </Flex>
      </Flex>

      <Flex sx={{ alignItems: "flex-start" }}>
        <div sx={{ flex: 3 }}>
          <Heading sx={{ mb: 3 }}>On-Island Transportation</Heading>
          <p sx={{ mb: 3 }}>
            If you fly to the islands or choose to park your car at the
            Anacortes Ferry Terminal, there are several ways to get around the
            island. Check out the links below for more information:
          </p>
          <Flex sx={{ flexDirection: "column" }}>
            <Anchor href="https://www.fridayharborjollytrolley.com/">
              Friday Harbor Trolley
            </Anchor>
            <Anchor href="https://www.sanjuantransit.com/">
              San Juan Transit
            </Anchor>
            <Anchor href="http://susiesmopeds.com/">
              Susie’s Moped and Car Rentals
            </Anchor>
            <Anchor href="https://www.sanjuanauto.com/">
              M&W Auto (Car Rentals)
            </Anchor>
            <Anchor href="https://www.facebook.com/pages/category/Taxi-Service/Salish-Sea-Island-Cabs-LLC-106171100901946/">
              Salish Sea Island Cabs
            </Anchor>
            <Anchor href="http://www.fridayharbortaxi.com/">
              Friday Harbor Taxi
            </Anchor>
            <Anchor href="https://www.sanjuantaxitours.com/">
              San Juan Taxi and Tours
            </Anchor>
            <Anchor href="https://www.meatmachinebicycles.com/rentals/">
              Meat Machine Cycles
            </Anchor>
            <Anchor href="https://discoveryadventuretours.com/">
              Discovery Adventure Bike Rentals
            </Anchor>
          </Flex>
        </div>
        <Flex
          sx={{ justifyContent: "center", flex: "1", position: "relative" }}
        >
          <Image
            src={Car}
            sx={{ animation: `${rumble} 1s ease-in-out infinite`, mt: 4 }}
          />
          <Image
            src={Wheel}
            sx={{
              animation: `${spin} 1s infinite`,
              animationTimingFunction: "linear",
              width: "42px",
              objectFit: "contain",
              position: "absolute",
              top: "90px",
              left: "80px",
            }}
          />
          <Image
            src={Wheel}
            sx={{
              animation: `${spin} 1s infinite`,
              animationTimingFunction: "linear",
              width: "42px",
              objectFit: "contain",
              position: "absolute",
              top: "90px",
              left: "170px",
            }}
          />
          <Image
            src={Road}
            sx={{
              width: "230px",
              objectFit: "contain",
              position: "absolute",
              top: "125px",
            }}
          />
        </Flex>
      </Flex>
    </Section>
  );
};

export default GettingHere;
