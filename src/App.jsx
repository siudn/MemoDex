import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import { shuffle, idGen } from "./components/Random";

function App() {
  const [score, setScore] = useState(0);
  const [pokeArr, setPokeArr] = useState(idGen());
  const [clickedCards, setClickedCards] = useState([]);

  const clickHandler = (e) => {
    if (!clickedCards.includes(e.target)) {
      clickedCards.push(e.target);
      const shuffledIDs = [...pokeArr];
      const newArr = shuffle(shuffledIDs);
      setPokeArr(newArr);
    } else {
      setPokeArr(idGen());
    }

    console.log(pokeArr);
    console.log(clickedCards);
  };

  return (
    <>
      <Display IDs={pokeArr} clickHandle={clickHandler}></Display>
    </>
  );
}

export default App;
