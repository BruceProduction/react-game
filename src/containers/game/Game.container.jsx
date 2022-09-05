// import components
import GameButton from "./GameButton";

// import hooks
import { useEffect, useState } from "react";
import useAIAnswer from "../../hooks/useAIAnswer.js";

const GameContainer = (props) => {
  let [aiAnswer, generateNewAnswer] = useAIAnswer();
  let [userAnswer, setUserAnswer] = useState();
  let [winner, setWinner] = useState();

  let userChoices = ["paper", "scissors", "stone"];

  // bookmark vincent is here
  // const letMeKnow = () => console.log("diuuu");
  const score = (w) => {
    if (w === "user") {
      return props.setUserNum((prev) => prev + 1);
    }
    if (w === "ai") {
      return props.setAiNum((prev) => prev + 1);
    }
    if (w === "draw") {
      return;
    }
  };
  // useEffect(score, [winner]);

  const compare = (a, b) => {
    // if (!userAnswer) {
    //   return;
    // }
    console.log(a, b);
    if (a === b) {
      setWinner("draw");
      return "draw";
    }

    if ((a === 1 && b === 3) || (a === 2 && b === 1) || (a === 3 && b === 2)) {
      setWinner("user");
      return "user";
    } else {
      setWinner("ai");
      return "ai";
    }
  };

  // useEffect(letMeKnow, [userAnswer, aiAnswer]);

  // useEffect(() => {
  //   score();
  // }, []);

  const pushResult = (a, b, w) => {
    props.setResults((e) => [
      ...e,
      {
        user: userChoices[a - 1],
        ai: userChoices[b - 1],
        winner: w,
      },
    ]);
  };
  // useEffect(generateNewAnswer, []);
  return (
    <div>
      {userChoices.map((choice, index) => (
        <GameButton
          key={index}
          text={choice}
          value={index + 1}
          action={(e) => {
            setUserAnswer(index + 1);
            let a = parseInt(e.target.value);
            let b = generateNewAnswer();
            let w = compare(a, b);
            score(w);
            pushResult(a, b, w);
          }}
        />
      ))}
      <p>user selected: {userChoices[userAnswer - 1]}</p>
      <p>ai selected: {userChoices[aiAnswer - 1]}</p>
      <p>winner: {winner}</p>
      <button onClick={generateNewAnswer}>change ai answer</button>
    </div>
  );
};

export default GameContainer;
