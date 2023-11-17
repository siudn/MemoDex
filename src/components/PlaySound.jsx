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
      <img
        onClick={() => {
          const play = !playing;
          setPlaying(play);
        }}
        src={imgName}
        className="h-auto w-16 bg-white bg-opacity-40 rounded-xl p-2 cursor-pointer absolute bottom-4 left-4"
      ></img>
    </>
  );
}

export default PlaySound;
