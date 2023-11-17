import { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/Display";
import { shuffle, idGen } from "./components/Random";
import Scoreboard from "./components/Scoreboard";
import { Instruction } from "./components/Scoreboard";
import PlaySound from "./components/PlaySound";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokeArr, setPokeArr] = useState(idGen());
  const [clickedCards, setClickedCards] = useState([]);

  const handleIncreaseScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const reset = () => {
    setBestScore(score);
    setScore(0);
    setPokeArr(idGen());
  };

  const clickHandler = (e) => {
    if (!clickedCards.includes(e.target)) {
      clickedCards.push(e.target);
      handleIncreaseScore();
      const shuffledIDs = [...pokeArr];
      const newArr = shuffle(shuffledIDs);
      setPokeArr(newArr);
    } else {
      reset();
    }
  };

  useEffect(() => {
    if (score == 10) {
      reset();
      alert("You Win!");
    }
  }, [score]);

  return (
    <div className="flex flex-col gap-8">
      <PlaySound></PlaySound>
      <Instruction></Instruction>
      <Display IDs={pokeArr} clickHandle={clickHandler}></Display>
      <Scoreboard score={score} bestScore={bestScore}></Scoreboard>
    </div>
  );
}

export default App;
