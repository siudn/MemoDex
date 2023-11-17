import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Display from "./components/Display";

function App() {
  const [score, setScore] = useState(0);
  const [pokeArr, setPokeArr] = useState([]);
  const [cards, setCards] = useState([]);
  let clickedCards = [];

  const shuffle = (arr) => {
    let currentIndex = arr.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }

    return arr;
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  while (pokeArr.length < 10) {
    let newID = getRandomInt(1, 500);
    if (!pokeArr.includes(newID)) {
      pokeArr.push(newID);
    }
  }

  const clickHandler = (e) => {
    console.log("clicked!");
    clickedCards.push(e.target);
    const shuffledIDs = [...pokeArr];
    const newArr = shuffle(shuffledIDs);
    setPokeArr(newArr);
  };

  return (
    <>
      <Display
        IDs={pokeArr}
        clickHandle={clickHandler}
        setCards={setCards}
      ></Display>
      {console.log(cards)}
    </>
  );
}

export default App;
