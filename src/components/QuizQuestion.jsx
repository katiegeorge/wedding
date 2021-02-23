/** @jsx jsx */

import { useState } from "react";
import { jsx, Button, Flex, Image, Grid, Heading } from "theme-ui";
import Katie from "../images/katie-headshot.png";
import Meg from "../images/meg-headshot.png";
import Error from "../images/error.png";
import Checkmark from "../images/checkmark.png";

const QuizQuestion = ({
  className,
  num,
  onClick,
  firstQ,
  secondQ,
  answer,
  myAnswers,
  setMyAnswers,
}) => {
  const [active, setActive] = useState("");
  const [activeAlt, setActiveAlt] = useState("");

  console.log(active, answer);

  const handleClick = () => {
    onClick();
    setActive("");

    if (active === answer || activeAlt === answer) {
      setMyAnswers([...myAnswers, 1]);
      return;
    }
    setMyAnswers([...myAnswers, 0]);
  };

  const handleImageClick = (active, activeAlt) => {
    setActive(active);
    setActiveAlt(activeAlt);
  };

  const getResponse = () => {
    if (active !== "") {
      if (active === answer || activeAlt === answer) {
        return "Correct! You know us well!";
      }
      return "Incorrect. Do you even deserve a spot at our wedding?";
    }
    return;
  };

  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        mt: 4,
      }}
    >
      <p sx={{ fontWeight: 200 }}>QUESTION {num}</p>
      <Grid
        columns={2}
        gap={6}
        sx={{ mt: 4, textAlign: "center", gridRowGap: 4, mb: 4 }}
      >
        <p sx={{ fontSize: 5 }}>{firstQ}</p>
        <p sx={{ fontSize: 5 }}>{secondQ}</p>
        <Flex sx={{ justifyContent: "center" }}>
          <div>
            <Button
              variant="secondary"
              sx={{
                mr: 3,
                border:
                  active === "meg-1" ||
                  (answer === "meg-1" && active !== "") ||
                  (active === "katie-2" && answer === "meg-1")
                    ? (theme) =>
                        `7px solid ${
                          theme.colors[answer === "meg-1" ? "green" : "pink"]
                        }`
                    : "7px solid transparent",
                borderRadius: "15px",
                position: "relative",
              }}
              onClick={() => handleImageClick("meg-1", "katie-2")}
            >
              <Image
                src={Meg}
                sx={{
                  height: "200px",
                  borderRadius: "8px",
                  opacity: answer !== "meg-1" && active !== "" ? 0.5 : 1,
                }}
              />
              {active === "meg-1" ||
              (answer === "meg-1" && active !== "") ||
              (active === "katie-2" && answer === "meg-1") ? (
                <Image
                  src={answer === "meg-1" ? Checkmark : Error}
                  sx={{
                    position: "absolute",
                    height: "50px",
                    right: "-10%",
                    top: "-10%",
                    bg: "blue-dark",
                    p: 2,
                    borderRadius: "50%",
                    border: (theme) =>
                      `5px solid ${
                        theme.colors[answer === "meg-1" ? "green" : "pink"]
                      }`,
                  }}
                />
              ) : null}
            </Button>
            <Heading as="h3">Meg</Heading>
          </div>
          <div>
            <Button
              variant="secondary"
              sx={{
                border:
                  active === "katie-1" ||
                  (answer === "katie-1" && active !== "") ||
                  (active === "meg-2" && answer === "katie-1")
                    ? (theme) =>
                        `7px solid ${
                          theme.colors[answer === "meg-1" ? "pink" : "green"]
                        }`
                    : "7px solid transparent",
                borderRadius: "15px",
                position: "relative",
              }}
              onClick={() => handleImageClick("katie-1", "meg-2")}
            >
              <Image
                src={Katie}
                sx={{
                  height: "200px",
                  borderRadius: "8px",
                  opacity: answer !== "katie-1" && active !== "" ? 0.5 : 1,
                }}
              />
              {active === "katie-1" ||
              (answer === "katie-1" && active !== "") ||
              (active === "meg-2" && answer === "katie-1") ? (
                <Image
                  src={answer === "meg-1" ? Error : Checkmark}
                  sx={{
                    position: "absolute",
                    height: "50px",
                    right: "-10%",
                    top: "-10%",
                    bg: "blue-dark",
                    p: 2,
                    borderRadius: "50%",
                    border: (theme) =>
                      `5px solid ${
                        theme.colors[answer === "meg-1" ? "pink" : "green"]
                      }`,
                  }}
                />
              ) : null}
            </Button>
            <Heading as="h3">Katie</Heading>
          </div>
        </Flex>

        <Flex sx={{ justifyContent: "center" }}>
          <div>
            <Button
              variant="secondary"
              sx={{
                mr: 3,
                border:
                  active === "meg-2" ||
                  (answer === "katie-1" && active !== "") ||
                  (active === "katie-1" && answer === "katie-1")
                    ? (theme) =>
                        `7px solid ${
                          theme.colors[answer === "meg-1" ? "pink" : "green"]
                        }`
                    : "7px solid transparent",
                borderRadius: "15px",
                position: "relative",
              }}
              onClick={() => handleImageClick("meg-2", "katie-1")}
            >
              <Image
                src={Meg}
                sx={{
                  height: "200px",
                  borderRadius: "8px",
                  opacity: answer !== "katie-1" && active !== "" ? 0.5 : 1,
                }}
              />
              {active === "meg-2" ||
              (answer === "katie-1" && active !== "") ||
              (active === "katie-1" && answer === "katie-1") ? (
                <Image
                  src={answer === "meg-1" ? Error : Checkmark}
                  sx={{
                    position: "absolute",
                    height: "50px",
                    right: "-10%",
                    top: "-10%",
                    bg: "blue-dark",
                    p: 2,
                    borderRadius: "50%",
                    border: (theme) =>
                      `5px solid ${
                        theme.colors[answer === "meg-1" ? "pink" : "green"]
                      }`,
                  }}
                />
              ) : null}
            </Button>
            <Heading as="h3">Meg</Heading>
          </div>

          <div>
            <Button
              variant="secondary"
              sx={{
                border:
                  active === "katie-2" ||
                  (answer === "meg-1" && active !== "") ||
                  (active === "meg-1" && answer === "meg-1")
                    ? (theme) =>
                        `7px solid ${
                          theme.colors[answer === "meg-1" ? "green" : "pink"]
                        }`
                    : "7px solid transparent",
                borderRadius: "15px",
                position: "relative",
              }}
              onClick={() => handleImageClick("katie-2", "meg-1")}
            >
              <Image
                src={Katie}
                sx={{
                  height: "200px",
                  borderRadius: "8px",
                  opacity: answer !== "meg-1" && active !== "" ? 0.5 : 1,
                }}
              />
              {active === "katie-2" ||
              (answer === "meg-1" && active !== "") ||
              (active === "meg-1" && answer === "meg-1") ? (
                <Image
                  src={answer === "meg-1" ? Checkmark : Error}
                  sx={{
                    position: "absolute",
                    height: "50px",
                    right: "-10%",
                    top: "-10%",
                    bg: "blue-dark",
                    p: 2,
                    borderRadius: "50%",
                    border: (theme) =>
                      `5px solid ${
                        theme.colors[answer === "meg-1" ? "green" : "pink"]
                      }`,
                  }}
                />
              ) : null}
            </Button>
            <Heading as="h3">Katie</Heading>
          </div>
        </Flex>
      </Grid>
      {getResponse()}
      {active !== "" && (
        <Button variant="primary" sx={{ mt: 5 }} onClick={handleClick}>
          Next
        </Button>
      )}
    </Flex>
  );
};

export default QuizQuestion;