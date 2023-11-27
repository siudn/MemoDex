import { useContext } from 'react'
import { Context } from '../context/ContextProvider'

function Scoreboard() {
  const { score, bestScore } = useContext(Context)

  return (
    <div className='rounded-lg bg-black bg-opacity-50 p-4 text-3xl font-bold'>
      <p>Current Score: {score}</p>
      <p>High Score: {bestScore}</p>
    </div>
  )
}

export function Instruction() {
  return (
    <div className='rounded-lg bg-black bg-opacity-50 p-4 text-3xl font-bold'>
      <p>Don&apos;t click the same Pokémon twice!</p>
    </div>
  )
}

export default Scoreboard
