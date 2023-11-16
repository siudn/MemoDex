import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Display from "./components/Display";

function App() {
  const [score, setScore] = useState(0);
  let pokeArr = [];
  let cards = [];
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
  };

  const clickHandler = (e) => {
    console.log("clicked!");
    clickedCards.push(e.target);
    shuffle(cards);
    console.log(cards);
  };

  return (
    <>
      <Display IDs={pokeArr} cards={cards} clickHandle={clickHandler}></Display>
      {console.log(cards)}
    </>
  );
}

export default App;
