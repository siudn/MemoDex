import { useState } from "react";
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

  const resetScore = () => {
    setBestScore(score);
    setScore(0);
  };

  const clickHandler = (e) => {
    if (!clickedCards.includes(e.target)) {
      clickedCards.push(e.target);
      const shuffledIDs = [...pokeArr];
      handleIncreaseScore();
      const newArr = shuffle(shuffledIDs);
      setPokeArr(newArr);
    } else {
      resetScore();
      setPokeArr(idGen());
    }

    console.log(pokeArr);
    console.log(clickedCards);
  };

  return (
    <>
      <Display IDs={pokeArr} clickHandle={clickHandler}></Display>
      <Scoreboard score={score} bestScore={bestScore}></Scoreboard>
    </>
  );
}

export default App;
