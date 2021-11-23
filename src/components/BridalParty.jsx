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
      description:
        "Meg’s older sister. Katie dubbed herself Meg’s “Best Maid” after a late-night pact" +
        " they made in 1997. They aren’t twins, but have fooled a few people over the years into thinking they were.",
      avatar: katie,
    },
    {
      name: "Jack Delaney",
      title: "Best Man",
      description:
        "Meg’s younger brother. Jack and Meg have moved beyond their childhood status of" +
        " frenemies, but still lovingly refer to one another as “Buttface” and “Stupid Idiot”.",
      avatar: jack,
    },
    {
      name: "Sandra Bamford",
      title: "Bridesmaid",
      description:
        "Meg’s friend from childhood. Meg actually has no recollection of meeting Sandra for" +
        " the first time in Kindergarten; it’s as if she’s always been there.",
      avatar: sandra,
    },
    {
      name: "Leah Ellert",
      title: "Bridesmaid",
      description:
        "Meg’s friend from childhood. In first grade, Leah and Meg had matching outfits for" +
        " each day of the week. Leah cemented her place in the Delaney family after infamously" +
        " answering their home phone pretending to be the “The Butler”. ",
      mostLikely:
        "embezzle glasses of champagne by pretending to get an extra “for the bride”, and then" +
        " blame it on her “drunk alter ego”.",
      avatar: leah,
    },
    {
      name: "Brianna Culp",
      title: "Bridesmaid",
      description:
        "Meg’s friend from childhood. Brianna burst into Meg’s life in middle school, and has"
        + " been chatting up the Delaney family ever since.",
      avatar: brianna,
    },
    {
      name: "Ellen McGrath",
      title: "Bridesmaid",
      description:
        "Meg’s friend and roommate from college. Ellen is probably the person to have" +
        " made Meg cry with laughter the most amount of times.",
      mostLikely:
        "bribe the band to switch Katie and Meg’s first dance song to “Bridge of Khazad Dum”" +
        " from LOTR, but then go to the bathroom at the wrong time and miss the whole thing.",
      avatar: ellen,
    },
    {
      name: "Lauren Miceli",
      title: "Bridesmaid",
      description:
        "Meg’s friend from college. They became friends after discovering their shared love" +
        " of sarcasm and wine. Trusted source of restaurant reviews and recipe recommendations.",
      avatar: micelli,
    },
  ];

  const katiePeople = [
    {
      name: "Abigail George",
      title: "Maid of Honor",
      description:
        "Katie’s sister and only other person who knows that Katie" +
        " once had a collection of over 10 unicorn stuffed animals.",
      mostLikely:
        "make everyone do the '20 steps of tasting wine' to each wedding wine.",
      avatar: abigail,
    },
    {
      name: "Sophia Falmagne",
      title: "Matron of Honor",
      description:
        "Katie’s oldest friend- they met in the one-year-old room, and then went" +
        " to college together (go ‘cats) and still text about why they decided to leave Orange County.",
      mostLikely: "try to Irish exit unsuccessfully, and be forced to stay up late.",
      avatar: sophia,
    },
    {
      name: "Marija Nadjsombati",
      title: "Bridesmaid",
      description:
        "Katie’s friend from high school, AP study buddy, gossip friend" +
        " and who convinced Katie to move to Seattle.",
      mostLikely: "have a mini existential crisis about how we’re all getting so old.",
      avatar: marija,
    },
    {
      name: "Anna Lovelace",
      title: "Bridesmaid",
      description:
        "Katie’s friend from high school who definitely has racked up the most" +
        " minutes of phone calls and facebook messages in Katie’s life.",
      mostLikely:
        "have long conversations with various parties about the meaning of life," +
        " the patriarchy, and the gender spectrum.",
      avatar: anna,
    },
    {
      name: "Kerry Driscoll",
      title: "Bridesmaid",
      description: "Katie’s friend and two-year college roommate - also recently moved to Seattle!",
      mostLikely: "remember extremely specific events of the weekend so we can reminisce in five years.",
      avatar: kerry,
    },
    {
      name: "Sasa Schwartz",
      title: "Bridesmaid",
      description:
        "Katie’s friend from college; they were in the same sorority and on the same" +
        " frisbee team but only overlapped in each for a single year (but it was enough!).",
      mostLikely:
        "spend most of the night talking to people she’s never met and leave with 5 new phone numbers.",
      avatar: sasa,
    },
  ];

  const [showDescription, setShowDescription] = useState([]);


  const handleClick = (id) => {
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

  const getWeddingCard = (person, index, fontColor) => {
    return (
      <div
        sx={{
          p: 4,
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
            src={person ? person.avatar : ""}
            sx={{
              pb: 2,
              pr: 2,
              mr: 3,
              height: showDescription.includes(index) ? "100px" : "150px",
              transition: '1s ease',
            }}
          />
          <div>
            <Heading sx={{ color: fontColor, fontSize: showDescription.includes(index) ? 4 : 5, transition: '1s ease', }}>{person && person.name}</Heading>
            <p>{person && person.title}</p>
          </div>
        </Flex>
        <div
          sx={{
            transform: showDescription.includes(index) ? "translateY(5px)" : "translateY(0px)",
            transition: '2s ease',
            display: showDescription.includes(index) ? 'block' : 'none'
          }}
        >
          <p>{person && person.description}</p>
          <p sx={{ mt: 3, fontSize: 2 }}><em>At the wedding, most likely to...</em> {person && person.mostLikely}</p>
        </div>
      </div>
    );
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
              {megPeople.map((person, index) => (
                getWeddingCard(person, index, 'green-light')
              ))}
            </p>
          </div>
          <div sx={{ flex: "1" }}>
            <p sx={{ mt: 4 }}>
              <Heading sx={{ mb: 1 }}>Katie</Heading>
              {katiePeople.map((person, index) => (
                getWeddingCard(person, index + 7, "blue-light")
              ))}
            </p>
          </div>
        </Flex>
      </Fragment>
    </Section>
  );
};

export default BridalParty;
