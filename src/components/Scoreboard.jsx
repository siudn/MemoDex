function Scoreboard({ score, bestScore }) {
  return (
    <div className="font-bold text-3xl bg-black bg-opacity-40 p-4 rounded-lg">
      <p>Current Score: {score}</p>
      <p>High Score: {bestScore}</p>
    </div>
  );
}

export default Scoreboard;
