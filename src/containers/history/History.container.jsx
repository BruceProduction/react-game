const HistoryContainer = (props) => {
  return (
    <div>
      <p>history</p>
      {/* {JSON.stringify(props.results)} */}
      {props.results.map((e) => (
        <div style={{ border: "1px solid red" }}>
          <p>user: {e.user} </p>
          <p>ai: {e.ai} </p>
          <p>winner: {e.winner} </p>
        </div>
      ))}

      {/* {console.log(props.results.map((e) => e.user))} */}
      {/* <p>user: paper</p>
      <p>ai: stone</p>
      <p>winner: </p> */}
    </div>
  );
};

export default HistoryContainer;
