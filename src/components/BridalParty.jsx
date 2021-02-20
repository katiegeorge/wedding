/** @jsx jsx */

import { Fragment } from "react";
import { jsx, Flex, Heading, Image } from "theme-ui";
import Avatar from "../images/avatar.png";
import Section from "./Section";

const BridalParty = ({ className }) => {
  const megPeople = [
    {
      name: "TBD",
      title: "Maid of Honor",
      description: "",
      avatar: Avatar,
    },
    {
      name: "TBD",
      title: "Bridesmaids",
      description: "",
      avatar: Avatar,
    },
  ];

  const katiePeople = [
    {
      name: "TBD",
      title: "Maid of Honor",
      description: "",
      avatar: Avatar,
    },
    {
      name: "TBD",
      title: "Bridesmaids",
      description: "",
      avatar: Avatar,
    },
  ];

  return (
    <Section
      heading="Bridal Party"
      id="bridal-party"
      light
      className={className}
    >
      <Fragment>
        <p sx={{ mt: 4 }}>
          Meet the people we can't imagine our wedding without!
        </p>
        <Flex sx={{ display: ["block", "flex"] }}>
          <div sx={{ flex: "1", mr: [0, 5] }}>
            <p sx={{ mt: 4 }}>
              <Heading>Meg</Heading>
              {megPeople.map((person) => (
                <div>
                  <Flex sx={{ mt: 5, alignItems: "center" }}>
                    <Image
                      src={person.avatar}
                      sx={{
                        bg: "blue-dark",
                        p: 3,
                        mr: 3,
                        borderRadius: "50%",
                        height: "100px",
                        width: "100px",
                      }}
                    />
                    <div>
                      <Heading>{person.name}</Heading>
                      <p>{person.title}</p>
                    </div>
                  </Flex>
                  <p>{person.description}</p>
                </div>
              ))}
            </p>
          </div>
          <div sx={{ flex: "1" }}>
            <p sx={{ mt: 4 }}>
              <Heading>Katie</Heading>
              {katiePeople.map((person) => (
                <div>
                  <Flex sx={{ mt: 5, alignItems: "center" }}>
                    <Image
                      src={person.avatar}
                      sx={{
                        bg: "blue-dark",
                        p: 3,
                        mr: 3,
                        borderRadius: "50%",
                        height: "100px",
                        width: "100px",
                      }}
                    />
                    <div>
                      <Heading>{person.name}</Heading>
                      <p>{person.title}</p>
                    </div>
                  </Flex>
                  <p>{person.description}</p>
                </div>
              ))}
            </p>
          </div>
        </Flex>
      </Fragment>
    </Section>
  );
};

export default BridalParty;
