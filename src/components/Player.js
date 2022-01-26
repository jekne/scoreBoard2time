export default function Player(props) {
  // the event listener callback
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
  };

  const resetButton = () => {
    // the name (resetScore) needs to be the same of the scoreBoard
    //where do you map, not in the function, go to map and look how did you type
    props.resetScore(props.id);
  };

  const randomScoreButton = () => {
    props.randonScore(props.id);
  };

  return (
    <li className="Player">
      <p>
        {props.name} (score: {props.score}){" "}
        <button onClick={onClickIncrement}>increment</button>
        <button onClick={resetButton}>RESET</button>
        <button onClick={randomScoreButton}>RANDOMIZE SCORE</button>
      </p>
    </li>
  );
}
