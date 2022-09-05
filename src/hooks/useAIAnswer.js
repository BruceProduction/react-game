import { useState } from "react";

const useAIAnswer = () => {
  const [answer, setAnswer] = useState("");

  const generateNewAnswer = () => {
    let AIAnswer = Math.floor(Math.random() * 3) + 1;
    setAnswer(AIAnswer);
    return AIAnswer;
  };

  return [answer, generateNewAnswer];
};

// const useAIAnswer = () => {
//   const answer = Math.floor(Math.random() * 3) + 1;
//   return [answer];
// };

export default useAIAnswer;
