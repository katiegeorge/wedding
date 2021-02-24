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
  blurb,
}) => {
  const [active, setActive] = useState("");
  const [activeAlt, setActiveAlt] = useState("");

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
        return (
          <p sx={{ textAlign: "center" }}>
            <span
              sx={{
                color: "green-light",
                fontWeight: 600,
                display: "block",
              }}
            >
              Correct!
            </span>{" "}
            {blurb}
          </p>
        );
      }
      return (
        <p sx={{ textAlign: "center" }}>
          <span
            sx={{
              color: "pink",
              fontWeight: 600,
              display: "block",
            }}
          >
            Nope.
          </span>{" "}
          {blurb}
        </p>
      );
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
        columns={[1, 2]}
        gap={6}
        sx={{ mt: 4, textAlign: "center", gridRowGap: 4, mb: 4 }}
      >
        <p sx={{ fontSize: 4 }}>{firstQ}</p>
        <p sx={{ fontSize: 4, display: ["none", "block"] }}>{secondQ}</p>

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
                          theme.colors[
                            answer === "meg-1" ? "green-light" : "pink"
                          ]
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
                  height: ["100px", "200px"],
                  objectFit: "cover",
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
                    height: ["40px", "50px"],
                    right: ["-20%", "-10%"],
                    top: ["-20%", "-10%"],
                    bg: "blue-dark",
                    p: answer === "meg-1" ? "8px 5px" : 2,
                    borderRadius: "50%",
                    border: (theme) =>
                      `5px solid ${
                        theme.colors[
                          answer === "meg-1" ? "green-light" : "pink"
                        ]
                      }`,
                  }}
                />
              ) : null}
            </Button>
            <Heading as="h3" sx={{ mt: 2 }}>
              Meg
            </Heading>
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
                          theme.colors[
                            answer === "meg-1" ? "pink" : "green-light"
                          ]
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
                  height: ["100px", "200px"],
                  objectFit: "cover",
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
                    height: ["40px", "50px"],
                    right: ["-20%", "-10%"],
                    top: ["-20%", "-10%"],
                    bg: "blue-dark",
                    p: answer === "meg-1" ? 2 : "8px 5px",
                    borderRadius: "50%",
                    border: (theme) =>
                      `5px solid ${
                        theme.colors[
                          answer === "meg-1" ? "pink" : "green-light"
                        ]
                      }`,
                  }}
                />
              ) : null}
            </Button>
            <Heading as="h3" sx={{ mt: 2 }}>
              Katie
            </Heading>
          </div>
        </Flex>

        <p sx={{ fontSize: 4, display: ["block", "none"] }}>{secondQ}</p>
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
                          theme.colors[
                            answer === "meg-1" ? "pink" : "green-light"
                          ]
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
                  height: ["100px", "200px"],
                  objectFit: "cover",
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
                    height: ["40px", "50px"],
                    right: ["-20%", "-10%"],
                    top: ["-20%", "-10%"],
                    bg: "blue-dark",
                    p: answer === "meg-1" ? 2 : "8px 5px",
                    borderRadius: "50%",
                    border: (theme) =>
                      `5px solid ${
                        theme.colors[
                          answer === "meg-1" ? "pink" : "green-light"
                        ]
                      }`,
                  }}
                />
              ) : null}
            </Button>
            <Heading as="h3" sx={{ mt: 2 }}>
              Meg
            </Heading>
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
                          theme.colors[
                            answer === "meg-1" ? "green-light" : "pink"
                          ]
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
                  height: ["100px", "200px"],
                  objectFit: "cover",
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
                    height: ["40px", "50px"],
                    right: ["-20%", "-10%"],
                    top: ["-20%", "-10%"],
                    bg: "blue-dark",
                    p: answer === "meg-1" ? "8px 5px" : 2,
                    borderRadius: "50%",
                    border: (theme) =>
                      `5px solid ${
                        theme.colors[
                          answer === "meg-1" ? "green-light" : "pink"
                        ]
                      }`,
                  }}
                />
              ) : null}
            </Button>
            <Heading as="h3" sx={{ mt: 2 }}>
              Katie
            </Heading>
          </div>
        </Flex>
      </Grid>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          height: ["auto", "150px"],
        }}
      >
        {getResponse()}
        {active !== "" && (
          <Button
            variant="primary"
            sx={{ mt: 4, width: "fit-content" }}
            onClick={handleClick}
          >
            Next
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default QuizQuestion;
