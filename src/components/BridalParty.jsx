/** @jsx jsx */

import { Fragment, useState } from "react";
import { jsx, Flex, Heading, Image } from "theme-ui";
import katie from "../images/wedding-party/katie.png";
import jack from "../images/wedding-party/jack.png";
import brianna from "../images/wedding-party/brianna.png";
import leah from "../images/wedding-party/leah.png";
import sandra from "../images/wedding-party/sandra.png";
import ellen from "../images/wedding-party/ellen.png";
import micelli from "../images/wedding-party/micelli.png";
import abigail from "../images/wedding-party/abigail.png";
import sophia from "../images/wedding-party/sophia.png";
import marija from "../images/wedding-party/marija.png";
import anna from "../images/wedding-party/anna.png";
import sasa from "../images/wedding-party/sasa.png";
import kerry from "../images/wedding-party/kerry.png";

import Section from "./Section";

const BridalParty = ({ className }) => {
  const megPeople = [
    {
      name: "Katie Delaney",
      title: "Best Maid",
      description: "",
      avatar: katie,
    },
    {
      name: "Jack Delaney",
      title: "Best Man",
      description: "",
      avatar: jack,
    },
    {
      name: "Sandra Bamford",
      title: "Bridesmaid",
      description: "",
      avatar: sandra,
    },
    {
      name: "Leah Ellert",
      title: "Bridesmaid",
      description: "",
      avatar: leah,
    },
    {
      name: "Brianna Culp",
      title: "Bridesmaid",
      description: "",
      avatar: brianna,
    },
    {
      name: "Ellen McGrath",
      title: "Bridesmaid",
      description: "",
      avatar: ellen,
    },
    {
      name: "Lauren Micelli",
      title: "Bridesmaid",
      description: "",
      avatar: micelli,
    },
  ];

  const katiePeople = [
    {
      name: "Abigail George",
      title: "Maid of Honor",
      description: "",
      avatar: abigail,
    },
    {
      name: "Sophia Falmagne",
      title: "Matron of Honor",
      description: "",
      avatar: sophia,
    },
    {
      name: "Marija Nadjsombati",
      title: "Bridesmaid",
      description:
        "Katie’s friend from high school, AP study buddy, gossip friend" +
        " and who convinced Katie to move to Seattle.",
      mostLikely: "have a mini existential crisis about how we’re all getting so old",
      avatar: marija,
    },
    {
      name: "Anna Lovelace",
      title: "Bridesmaid",
      description: "",
      avatar: anna,
    },
    {
      name: "Kerry Driscoll",
      title: "Bridesmaid",
      description: "",
      avatar: kerry,
    },
    {
      name: "Sasa Schwartz",
      title: "Bridesmaid",
      description: "",
      avatar: sasa,
    },
  ];

  const [showDescription, setShowDescription] = useState([]);


  const handleClick = (id) => {
    console.log(showDescription);

    if (showDescription.includes(id)) {
      if (showDescription.length === 1) {
        setShowDescription([]);
        return;
      }
      setShowDescription(showDescription.filter(item => item !== id));

      return;
    }

    setShowDescription([...showDescription, id]);
  }

  return (
    <Section heading="Bridal Party" id="bridal-party" className={className}>
      <Fragment>
        <p sx={{ mt: 4 }}>
          Meet the people we can't imagine our wedding without!
        </p>
        <Flex sx={{ display: ["block", "flex"] }}>
          <div sx={{ flex: "1", mr: [0, 5] }}>
            <p sx={{ mt: 4 }}>
              <Heading sx={{ mb: 1 }}>Meg</Heading>
              {megPeople.map((person) => (
                <div sx={{
                  p: 2,
                  background: "#1F3E6D",
                  borderRadius: '8px',
                  boxShadow: '3px 3px 2px #071934',
                  mt: 3,
                  transition: '0.2s',
                  ":hover": {
                    backgroundColor: "#3F5E8C",
                    cursor: "pointer",
                    transform: "translateY(2px)"
                  },
                }}>
                  <Flex sx={{ alignItems: "center" }}>
                    <Image
                      src={person.avatar}
                      sx={{
                        p: 3,
                        mr: 3,
                        height: "150px",
                      }}
                    />
                    <div>
                      <Heading sx={{ color: "green-light" }}>{person.name}</Heading>
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
              <Heading sx={{ mb: 1 }}>Katie</Heading>
              {katiePeople.map((person, index) => (
                <div
                  id={`party-member-${index}`}
                  sx={{
                    p: 3,
                    background: "#1F3E6D",
                    borderRadius: '8px',
                    boxShadow: '3px 3px 2px #071934',
                    mt: 3,
                    transition: '0.2s',
                    ":hover": {
                      backgroundColor: "#3F5E8C",
                      cursor: "pointer",
                      transform: "translateY(2px)"
                    },
                  }}
                  onClick={() => handleClick(index)}
                >
                  <Flex sx={{ alignItems: "center" }}>
                    <Image
                      src={person.avatar}
                      sx={{
                        p: 2,
                        mr: 3,
                        height: showDescription.includes(index) ? "100px" : "150px",
                      }}
                    />
                    <div>
                      <Heading sx={{ color: "blue-light", fontSize: showDescription ? 4 : 5 }}>{person.name}</Heading>
                      <p>{person.title}</p>
                    </div>
                  </Flex>
                  {showDescription.includes(index) &&
                    <Fragment>
                      <p>{person.description}</p>
                      <p>Most likely to... {person.mostLikely}</p>
                    </Fragment>
                  }
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
