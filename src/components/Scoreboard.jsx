function Scoreboard({ score, bestScore }) {
  return (
    <div>
      <p>Current Score: {score}</p>
      <p>High Score: {bestScore}</p>
    </div>
  );
}

export default Scoreboard;
