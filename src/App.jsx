import { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/Display";
import { shuffle, idGen } from "./components/Random";
import Scoreboard from "./components/Scoreboard";

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
      alert("You Win!");
      reset();
    }
  }, [score]);

  return (
    <div className="flex flex-col gap-8">
      <Display IDs={pokeArr} clickHandle={clickHandler}></Display>
      <Scoreboard score={score} bestScore={bestScore}></Scoreboard>
    </div>
  );
}

export default App;
