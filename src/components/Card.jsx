import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function Card({ id, handleClick }) {
  const [pokemon, setPokemon] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  async function getData(pokeID) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeID}`,
        { mode: 'cors' }
      )
      const pokeData = await response.json()

      setPokemon(pokeData)
    } catch (error) {
      console.error('Error fetching Pokemon data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData(id)
  }, [id])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div
      onClick={handleClick}
      className='flex max-w-[160px] cursor-pointer flex-col content-center justify-items-center rounded-2xl bg-black bg-opacity-60 p-3'
    >
      <p className='text-2xl font-semibold capitalize'>{pokemon.name}</p>
      {pokemon.sprites.front_default && (
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className='flex items-center justify-center'
        />
      )}
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Card
