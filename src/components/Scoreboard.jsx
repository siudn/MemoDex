function Scoreboard({ score, bestScore }) {
  return (
    <div className="font-bold text-3xl bg-black bg-opacity-50 p-4 rounded-lg">
      <p>Current Score: {score}</p>
      <p>High Score: {bestScore}</p>
    </div>
  );
}

export function Instruction() {
  return (
    <div className="font-bold text-3xl bg-black bg-opacity-50 p-4 rounded-lg">
      <p>Don't click the same Pokémon twice!</p>
    </div>
  );
}

export default Scoreboard;
