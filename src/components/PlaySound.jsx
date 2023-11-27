import { useState } from 'react'
import ReactHowler from 'react-howler'
import driftveil from '../assets/driftveil.mp3'
import soundOff from '../assets/soundOff.png'
import soundOn from '../assets/soundOn.png'

function PlaySound() {
  const [playing, setPlaying] = useState(true)

  const imgName = playing ? soundOn : soundOff

  return (
    <>
      <ReactHowler src={driftveil} volume={0.4} loop playing={playing} />
      <img
        onClick={() => {
          const play = !playing
          setPlaying(play)
        }}
        src={imgName}
        className='absolute bottom-4 left-4 h-auto w-16 cursor-pointer rounded-xl bg-white bg-opacity-40 p-2'
      ></img>
    </>
  )
}

export default PlaySound
