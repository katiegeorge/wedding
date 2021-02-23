/** @jsx jsx */

import { useState } from "react";
import { jsx, Button, Flex, Image, Grid } from "theme-ui";
import Katie from "../images/katie-headshot.png";
import Meg from "../images/meg-headshot.png";

const QuizQuestion = ({ className, num, onClick, firstQ, secondQ }) => {
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
        sx={{ mt: 4, textAlign: "center", gridRowGap: 4 }}
      >
        <p sx={{ fontSize: 5 }}>{firstQ}</p>
        <p sx={{ fontSize: 5 }}>{secondQ}</p>
        <Flex sx={{ justifyContent: "center" }}>
          <Button variant="secondary" sx={{ mr: 3 }}>
            <Image src={Meg} sx={{ height: "200px", borderRadius: "8px" }} />
            <br />
            MEG
          </Button>
          <Button variant="secondary">
            <Image src={Katie} sx={{ height: "200px", borderRadius: "8px" }} />
            <br />
            KATIE
          </Button>
        </Flex>
        <Flex>
          <Button variant="secondary" sx={{ mr: 3 }}>
            <Image src={Meg} sx={{ height: "200px", borderRadius: "8px" }} />
            <br />
            MEG
          </Button>
          <Button variant="secondary">
            <Image src={Katie} sx={{ height: "200px", borderRadius: "8px" }} />
            <br />
            KATIE
          </Button>
        </Flex>
      </Grid>
      <Button variant="primary" sx={{ mt: 5 }} onClick={onClick}>
        Next
      </Button>
    </Flex>
  );
};

export default QuizQuestion;
