import { useEffect, useState } from "react";
import Card from "./Card";

function Display({ clickHandle, IDs, setCards }) {
  useEffect(() => {
    const newCards = IDs.map((x) => (
      <Card key={x} name={x} handleClick={clickHandle}></Card>
    ));
    setCards(newCards);
    console.log("Ran successfully!");
  }, [IDs]);

  return (
    <>
      {IDs.map((x) => (
        <Card key={x} name={x} handleClick={clickHandle}></Card>
      ))}
      {console.log("Rendered.")}
    </>
  );
}

export default Display;
