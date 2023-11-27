import { useEffect, useState } from 'react'
import Display from './components/Display'
import PlaySound from './components/PlaySound'
import Scoreboard, { Instruction } from './components/Scoreboard'
import { idGen, shuffle } from './lib/utils'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [pokeArr, setPokeArr] = useState(idGen())
  const [clickedCards] = useState([])

  const handleIncreaseScore = () => {
    setScore((prevScore) => prevScore + 1)
  }

  const reset = () => {
    setBestScore(score)
    setScore(0)
    setPokeArr(idGen())
  }

  const clickHandler = (e) => {
    if (!clickedCards.includes(e.target)) {
      clickedCards.push(e.target)
      handleIncreaseScore()
      const shuffledIDs = [...pokeArr]
      const newArr = shuffle(shuffledIDs)
      setPokeArr(newArr)
    } else {
      reset()
    }
  }

  useEffect(() => {
    if (score == 10) {
      reset()
      alert('You Win!')
    }
  }, [score])

  return (
    <div /*className="h-full flex flex-col justify-center align-middle"*/>
      <PlaySound />
      <div className='flex flex-col gap-8'>
        <Instruction></Instruction>
        <Display IDs={pokeArr} clickHandle={clickHandler}></Display>
        <Scoreboard score={score} bestScore={bestScore}></Scoreboard>
      </div>
    </div>
  )
}

export default App
