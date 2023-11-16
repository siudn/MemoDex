import Card from "./Card";

function Display() {
  const IDs = [];

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

  const cards = IDs.map((x) => <Card name={x}></Card>);

  return <>{cards}</>;
}

export default Display;
