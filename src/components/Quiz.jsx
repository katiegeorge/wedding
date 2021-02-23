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
        {questionNumber !== 0 && questionNumber !== 11 && (
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
            firstQ="Who is a Hufflepuff?"
            secondQ="Who is a Ravenclaw?"
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
          <QuizQuestion
            num={3}
            onClick={() => setQuestionNumber(4)}
            firstQ="Who owns more hats?"
            secondQ="Who owns more socks?"
            answer="meg-1"
            myAnswers={myAnswers}
            setMyAnswers={setMyAnswers}
          />
        )}
        {questionNumber === 4 && (
          <QuizQuestion
            num={4}
            onClick={() => setQuestionNumber(5)}
            firstQ="Who is in charge of cooking a steak?"
            secondQ="Who is in charge of using the power tools?"
            answer="katie-1"
            myAnswers={myAnswers}
            setMyAnswers={setMyAnswers}
          />
        )}
        {questionNumber === 5 && (
          <QuizQuestion
            num={5}
            onClick={() => setQuestionNumber(6)}
            firstQ="Who likes turkey on their sandwiches?"
            secondQ="Who likes salami on their sandwiches?"
            answer="meg-1"
            myAnswers={myAnswers}
            setMyAnswers={setMyAnswers}
          />
        )}
        {questionNumber === 6 && (
          <QuizQuestion
            num={6}
            onClick={() => setQuestionNumber(7)}
            firstQ="Who chooses Kirby as their fighter when playing Super Smash Bros?"
            secondQ="Who chooses Zelda as their fighter when playing Super Smash Bros?"
            answer="katie-1"
            myAnswers={myAnswers}
            setMyAnswers={setMyAnswers}
          />
        )}
        {questionNumber === 7 && (
          <QuizQuestion
            num={7}
            onClick={() => setQuestionNumber(8)}
            firstQ="Who wants to go skydiving?"
            secondQ="Who wants to run a half marathon?"
            answer="meg-1"
            myAnswers={myAnswers}
            setMyAnswers={setMyAnswers}
          />
        )}
        {questionNumber === 8 && (
          <QuizQuestion
            num={8}
            onClick={() => setQuestionNumber(9)}
            firstQ="Who takes up more than their fair share of the bed?"
            secondQ="Who takes longer to get out of bed in the morning?"
            answer="katie-1"
            myAnswers={myAnswers}
            setMyAnswers={setMyAnswers}
          />
        )}
        {questionNumber === 9 && (
          <QuizQuestion
            num={9}
            onClick={() => setQuestionNumber(10)}
            firstQ="Who is the reason we started binge watching true crime shows?"
            secondQ="Who is the reason we started binge watching Survivor?"
            answer="meg-1"
            myAnswers={myAnswers}
            setMyAnswers={setMyAnswers}
          />
        )}
        {questionNumber === 10 && (
          <QuizQuestion
            num={10}
            onClick={() => setQuestionNumber(11)}
            firstQ="Who initiated the first kiss?"
            secondQ="Who thinks the first kiss was mutually initiated?"
            answer="katie-1"
            myAnswers={myAnswers}
            setMyAnswers={setMyAnswers}
          />
        )}
        {questionNumber === 11 && (
          <Flex
            sx={{ flexDirection: "column", justifyContent: "center", mt: 4 }}
          >
            <p sx={{ fontSize: 5 }}>
              You got{" "}
              <span sx={{ color: "green-light", fontWeight: 600 }}>
                {myAnswers.reduce((a, b) => a + b, 0)} out of 10
              </span>{" "}
              correct!
            </p>
            <Button variant="primary" sx={{ mt: 5 }} onClick={handlePlayAgain}>
              Play again
            </Button>
          </Flex>
        )}
      </Flex>
    </Section>
  );
};

export default Quiz;
