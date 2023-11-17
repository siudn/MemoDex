import { useState } from "react";
import useSound from "use-sound";

function PlaySound() {
  const [playing, setPlaying] = useState(true);

  const soundUrl = "../assets/ecruteak.mp3";

  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 });

  const clickHandler = (play) => {
    if (play) {
      setPlaying(false);
      stop();
    } else {
      setPlaying(true);
      play();
    }
  };

  return (
    <div>
      {() => {
        return playing ? (
          <img src="../assets/soundOn.png" onClick={clickHandler(playing)} />
        ) : (
          <img src="../assets/soundOff.png" onClick={clickHandler(playing)} />
        );
      }}
    </div>
  );
}
