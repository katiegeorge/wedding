/** @jsx jsx */

import { useState, Fragment } from "react";
import { jsx, Button, Flex, Image } from "theme-ui";
import Section from "./Section";
import QuizQuestion from "./QuizQuestion";
import QuizProgressBar from "./QuizProgressBar";

const Quiz = ({ className }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [myAnswers, setMyAnswers] = useState([]);

  const handlePlayAgain = () => {
    setMyAnswers([]);
    setQuestionNumber(1);
  };

  const numCorrect = myAnswers.reduce((a, b) => a + b, 0);

  const getMessage = () => {
    if (numCorrect < 3) {
      return "This is just embarrassing for you. Should we rescind that invite...?";
    } else if (numCorrect > 2 && numCorrect < 6) {
      return "You did… okay. You should reach out more.";
    } else if (numCorrect > 5 && numCorrect < 10) {
      return "You know us pretty well! Congrats. Give yourself a high five.";
    }
    return "Wow! You know us better than we know ourselves. Do you want to move in?";
  };

  const getImage = () => {
    if (numCorrect < 3) {
      return (
        <Image src="https://media0.giphy.com/media/26gYERtrrzIEg6oKI/giphy.gif" />
      );
    } else if (numCorrect > 2 && numCorrect < 6) {
      return (
        <Image src="http://media.tumblr.com/a480c6fd7b83fbd75ab0b61789e38981/tumblr_inline_ml0zhxv0ot1qz4rgp.gif" />
      );
    } else if (numCorrect > 5 && numCorrect < 10) {
      return (
        <Image src="https://i.pinimg.com/originals/72/85/a2/7285a2ba6f66907a6bc071aea58fd9bb.gif" />
      );
    }
    return (
      <Image src="https://media3.giphy.com/media/jU8REww6ETon8TjGAS/giphy.gif" />
    );
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
          <Flex sx={{ flexDirection: "column", alignItems: "center", mt: 5 }}>
            <p>
              How well do you know Meg and Katie? Find out by taking our quiz!
            </p>
            <Button
              variant="primary"
              sx={{ my: 5, width: "fit-content" }}
              onClick={() => setQuestionNumber(1)}
            >
              Play Now
            </Button>
            <Image src="https://media2.giphy.com/media/3o6EQv8a96w5GjsaTS/giphy.gif" />
          </Flex>
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
            blurb={
              "Life-long nerd Katie loves reading, podcasts, and the NYT crossword, but" +
              " needs the help of proud Hufflepuff Meg to help find things she leaves around the house."
            }
          />
        )}
        {questionNumber === 2 && (
          <QuizQuestion
            num={2}
            onClick={() => setQuestionNumber(3)}
            firstQ="Who triples the amount of parmesan cheese in a recipe?"
            secondQ="Who triples the amount of vanilla extract in a recipe?"
            answer="katie-1"
            myAnswers={myAnswers}
            setMyAnswers={setMyAnswers}
            blurb={
              "Meg can’t help but tilt a bit more of the bottle into her bakes when Katie isn’t looking." +
              " Katie thinks the (normal) amount of parmesan Meg puts on her spaghetti is a travesty."
            }
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
            blurb={
              "Meg is a baseball hat “collector” (hoarder?), and for some reason Katie" +
              " won’t get rid of all of her socks with holes."
            }
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
            blurb={
              "Katie has recently discovered the power of the meat thermometer to get that" +
              " perfectly medium rare steak, and Meg has inherited her dad’s knack for power" +
              " tools, and uses them whenever she can for random house projects."
            }
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
            blurb={
              "Meg and Katie were worried about their compatibility as a couple when they learned" +
              " that they would always have two lunch meats in the fridge."
            }
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
            blurb={
              "Katie will destroy you with Kirby’s nomming ability, and Meg kicks ass by" +
              " transforming Zelda into Sheik. Game… over."
            }
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
            blurb={
              "Neither Meg nor Katie would be caught dead doing the other activity."
            }
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
            blurb={
              "Katie has no qualms about rolling all over the bed in her sleep, and Meg" +
              " needs at least an hour of “snoozing” before reluctantly getting up."
            }
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
            blurb={
              <Fragment>
                As an aspiring Veronica Mars, Meg loves a good murder mystery (
                <em>The Keepers</em> and <em>The Staircase</em> are highly
                recommended!). Meg thought it was a bit odd when Katie asked her
                to watch <em>Survivor</em> on their third date, but will now
                talk Survivor strategy with Katie for hours.
              </Fragment>
            }
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
            blurb={
              "Welp, turns out this fact will be debated until the end of time (...it was Katie.)"
            }
          />
        )}
        {questionNumber === 11 && (
          <Flex
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mt: 4,
            }}
          >
            <p sx={{ fontSize: 5, mb: 3, textAlign: "center" }}>
              You got{" "}
              <span sx={{ color: "green-light", fontWeight: 600 }}>
                {numCorrect} out of 10
              </span>{" "}
              correct!
            </p>
            <p sx={{ mb: 3, textAlign: "center" }}>{getMessage()}</p>
            {getImage()}
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
