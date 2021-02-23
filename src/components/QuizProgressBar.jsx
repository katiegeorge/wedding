/** @jsx jsx */

import { jsx, Flex } from "theme-ui";

const QuizProgressBar = ({ questionNumber }) => {
  return (
    <Flex
      sx={{
        height: "20px",
        width: "80vw",
        bg: "purple-light",
        borderRadius: "30px",
        position: "relative",
        mt: 4,
        overflow: "hidden",
      }}
    >
      <Flex
        sx={{
          height: "20px",
          bg: "purple",
          borderRadius: "30px",
          transform: `scaleX(calc(${questionNumber} * 0.1))`,
          transformOrigin: "top left",
          width: "100%",
          transition: "2s ease in",
          transitionProperty: "transform",
          height: "100%",
          position: "absolute",
        }}
      ></Flex>
    </Flex>
  );
};

export default QuizProgressBar;
