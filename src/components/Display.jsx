import PropTypes from 'prop-types'
import Card from './Card'

function Display({ clickHandle, IDs }) {
  return (
    <div className='grid grid-cols-5 gap-4'>
      {IDs.map((x) => (
        <Card key={x} id={x} handleClick={clickHandle}></Card>
      ))}
    </div>
  )
}

Display.propTypes = {
  clickHandle: PropTypes.func.isRequired,
  IDs: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default Display
