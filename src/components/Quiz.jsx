/** @jsx jsx */

import { useState } from "react";
import { jsx, Button, Flex } from "theme-ui";
import Section from "./Section";
import QuizQuestion from "./QuizQuestion";
import QuizProgressBar from "./QuizProgressBar";

const Quiz = ({ className }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [myAnswers, setMyAnswers] = useState([]);

  console.log(myAnswers);

  const handlePlayAgain = () => {
    setMyAnswers([]);
    setQuestionNumber(1);
  };

  return (
    <Section heading="Guess Who?" id="quiz" className={className}>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {questionNumber !== 0 && (
          <QuizProgressBar questionNumber={questionNumber} />
        )}
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
            answer="meg-1"
            myAnswers={myAnswers}
            setMyAnswers={setMyAnswers}
          />
        )}
        {questionNumber === 2 && (
          <QuizQuestion
            num={2}
            onClick={() => setQuestionNumber(3)}
            firstQ="Who puts triple the parmesan on everything?"
            secondQ="Who puts triple the vanilla extract in everything?"
            answer="katie-1"
            myAnswers={myAnswers}
            setMyAnswers={setMyAnswers}
          />
        )}
        {questionNumber === 3 && (
          <div>
            <p>
              You got {myAnswers.reduce((a, b) => a + b, 0)} out of 10 correct!
            </p>
            <Button variant="primary" sx={{ mt: 5 }} onClick={handlePlayAgain}>
              Play again
            </Button>
          </div>
        )}
      </Flex>
    </Section>
  );
};

export default Quiz;
