import { useContext } from 'react'
import { Context } from '../context/ContextProvider'
import Card from './Card'

function Display() {
  const { pokeArr, clickHandler } = useContext(Context)

  return (
    <div className='grid grid-cols-5 gap-4'>
      {pokeArr.map((x) => (
        <Card key={x} id={x} handleClick={clickHandler}></Card>
      ))}
    </div>
  )
}

export default Display
