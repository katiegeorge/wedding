/** @jsx jsx */

import { useState } from "react";
import { jsx, Button, Flex } from "theme-ui";
import Section from "./Section";
import QuizQuestion from "./QuizQuestion";

const Quiz = ({ className }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  return (
    <Section heading="Guess Who?" id="quiz" className={className}>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {questionNumber === 0 && (
          <Button
            variant="primary"
            sx={{ mt: 5 }}
            onClick={() => setQuestionNumber(1)}
          >
            Play Now
          </Button>
        )}
        {questionNumber === 1 && (
          <QuizQuestion
            num={1}
            onClick={() => setQuestionNumber(2)}
            firstQ="Who likes turkey sandwiches?"
            secondQ="Who likes salami sandwiches?"
          />
        )}
        {questionNumber === 2 && (
          <QuizQuestion
            num={2}
            onClick={() => setQuestionNumber(3)}
            firstQ="Who puts triple the parmesan on everything?"
            secondQ="Who puts triple the vanilla extract in everything?"
          />
        )}
        {questionNumber === 3 && (
          <div>
            <p>You got x out of 10 correct!</p>
            <Button
              variant="primary"
              sx={{ mt: 5 }}
              onClick={() => setQuestionNumber(1)}
            >
              Play again
            </Button>
          </div>
        )}
      </Flex>
    </Section>
  );
};

export default Quiz;
