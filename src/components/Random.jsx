export function shuffle(arr) {
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
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function idGen() {
  const arr = [];

  while (arr.length < 10) {
    let newID = getRandomInt(1, 500);
    if (!arr.includes(newID)) {
      arr.push(newID);
    }
  }

  return arr;
}
