import { useEffect, useState } from "react";
import Card from "./Card";

function Display({ clickHandle, IDs }) {
  return (
    <>
      {IDs.map((x) => (
        <Card key={x} name={x} handleClick={clickHandle}></Card>
      ))}
    </>
  );
}

export default Display;
