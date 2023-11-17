import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import { shuffle, getRandomInt } from "./components/Random";

function App() {
  const [score, setScore] = useState(0);
  const [pokeArr, setPokeArr] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  while (pokeArr.length < 10) {
    let newID = getRandomInt(1, 500);
    if (!pokeArr.includes(newID)) {
      pokeArr.push(newID);
    }
  }

  const clickHandler = (e) => {
    clickedCards.push(e.target);
    const shuffledIDs = [...pokeArr];
    const newArr = shuffle(shuffledIDs);
    setPokeArr(newArr);
  };

  return (
    <>
      <Display IDs={pokeArr} clickHandle={clickHandler}></Display>
    </>
  );
}

export default App;
