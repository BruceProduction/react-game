// import { useEffect } from "react";

const ScoreContainer = (props) => {
  return (
    <div>
      <p>user: {props.userNum}</p>
      <p>ai:{props.aiNum} </p>
    </div>
  );
};

export default ScoreContainer;
