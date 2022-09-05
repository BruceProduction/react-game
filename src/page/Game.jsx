import GameContainer from "../containers/game/Game.container";
import ScoreContainer from "../containers/score/Score.container";
import HistoryContainer from "../containers/history/History.container";

import { useState } from "react";
const Game = (props) => {
  let [userScore, setUserScore] = useState(0);
  let [aiScore, setAiScore] = useState(0);
  let [results, setResults] = useState([]);
  return (
    <div>
      <ScoreContainer userNum={userScore} aiNum={aiScore} />
      <GameContainer
        setUserNum={setUserScore}
        setAiNum={setAiScore}
        setResults={setResults}
      />
      <HistoryContainer results={results} />
    </div>
  );
};

export default Game;
