const GameButton = (props) => {
  return (
    <button
      onClick={props.action}
      value={props.value}
      style={{ backgroundColor: props.color }}>
      {props.text}
    </button>
  );
};

export default GameButton;
