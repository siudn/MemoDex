import PropTypes from 'prop-types'
import { createContext, useEffect, useRef, useState } from 'react'
import { idGen, shuffle } from '../lib/utils'

export const Context = createContext(null)

export function ContextProvider({ children }) {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [pokeArr, setPokeArr] = useState(idGen())
  const clickedCards = useRef([])

  const handleIncreaseScore = () => {
    setScore((prevScore) => prevScore + 1)
  }

  const reset = () => {
    setBestScore(score)
    setScore(0)
    setPokeArr(idGen())
  }

  const clickHandler = (e) => {
    if (!clickedCards.current.includes(e.target)) {
      clickedCards.current.push(e.target)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score])

  return (
    <Context.Provider value={{ pokeArr, clickHandler, score, bestScore }}>
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.element
}
