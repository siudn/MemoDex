import PropTypes from 'prop-types'

function Scoreboard({ score, bestScore }) {
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

Scoreboard.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired
}

export default Scoreboard
