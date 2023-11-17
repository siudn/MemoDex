import { useEffect, useState } from "react";
import Card from "./Card";

function Display({ clickHandle, IDs }) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {IDs.map((x) => (
        <Card key={x} name={x} handleClick={clickHandle}></Card>
      ))}
    </div>
  );
}

export default Display;
