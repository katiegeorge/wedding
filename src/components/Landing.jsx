/** @jsx jsx */

import { jsx, Flex, Heading, Box } from "theme-ui";
import BackgroundImage from "../images/engagement-photo.png";

const IndexPage = () => {
  return (
    <Box
      sx={{
        background: `url(${BackgroundImage}) no-repeat center center fixed`,
        backgroundSize: "cover",
        p: 5,
        minHeight: "100vh",
        boxShadow: "inset 0 0 0 1000px #0041677a",
      }}
    >
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          pt: 6,
        }}
      >
        <Heading
          as="h1"
          sx={{ color: "green-light", fontSize: "128px", lineHeight: "0.8" }}
        >
          Katie
          <br />{" "}
          <span
            sx={{
              fontSize: "105px",
              color: "yellow-light",
              verticalAlign: "top",
              display: "inline-block",
              pt: "5px",
            }}
          >
            &#38;
          </span>
          Meg
        </Heading>
        <Flex
          sx={{
            alignItems: "flex-end",
            flexDirection: "column",
            alignSelf: "flex-end",
            mt: 6,
            fontWeight: 200,
            fontSize: 4,
            letterSpacing: "3px",
          }}
        >
          <p>Saturday June 25, 2022</p>
          <p>Saltwater Farm</p>
          <p>San Juan Island, Washington</p>
        </Flex>
      </Flex>
    </Box>
  );
};

export default IndexPage;
