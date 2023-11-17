import { useEffect, useState } from "react";
import Card from "./Card";

function Display({ cards, setPokeArr, setCards }) {
  const [IDs, setIDs] = useState([]);

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

  while (IDs.length < 10) {
    let newID = getRandomInt(1, 500);
    if (!IDs.includes(newID)) {
      IDs.push(newID);
    }
  }

  const clickHandler = (e) => {
    console.log("clicked!");
    const shuffledIDs = [...IDs];
    const newArr = shuffle(shuffledIDs);
    setIDs(newArr);
    console.log(IDs);
    console.log("ID array shuffled.");
  };

  useEffect(() => {
    const newCards = IDs.map((x) => (
      <Card key={x} name={x} handleClick={clickHandler}></Card>
    ));
    setCards(newCards);
    console.log("Ran successfully!");
  }, [IDs]);

  return (
    <>
      {IDs.map((x) => (
        <Card key={x} name={x} handleClick={clickHandler}></Card>
      ))}
      {console.log("Rendered.")}
    </>
  );
}

export default Display;
