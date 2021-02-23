/** @jsx jsx */

import { jsx, Flex } from "theme-ui";

const QuizProgressBar = ({ questionNumber }) => {
  return (
    <Flex
      sx={{
        height: "20px",
        width: "80vw",
        bg: "white",
        borderRadius: "30px",
        position: "relative",
        mt: 4,
        overflow: "hidden",
      }}
    >
      <Flex
        sx={{
          height: "20px",
          bg: "yellow",
          borderRadius: "30px",
          transform: `scaleX(calc(${questionNumber} * 0.1))`,
          transformOrigin: "top left",
          width: "100%",
          transition: "2s ease in",
          transitionProperty: "transform",
          height: "100%",
          position: "absolute",
        }}
      >
        <Flex
          sx={{
            height: "100%",
            bg: "yellow",
            borderRadius: "50%",
            transform: `scaleX(2)`,
            width: "100px",
            right: "-40px",
            transition: "2s ease in",
            transitionProperty: "transform",
            height: "100%",
            position: "absolute",
          }}
        ></Flex>
      </Flex>
    </Flex>
  );
};

export default QuizProgressBar;
