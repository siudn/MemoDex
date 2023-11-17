import { useState } from "react";
import ecruteak from "../assets/ecruteak.mp3";
import ReactHowler from "react-howler";
import soundOn from "../assets/soundOn.png";
import soundOff from "../assets/soundOff.png";

function PlaySound() {
  const [playing, setPlaying] = useState(true);

  const imgName = playing ? soundOn : soundOff;

  return (
    <>
      <ReactHowler src={ecruteak} volume={0.5} loop playing={playing} />
      <button
        onClick={() => {
          const play = !playing;
          setPlaying(play);
        }}
      >
        <img src={imgName}></img>
      </button>
    </>
  );
}

export default PlaySound;
