import { useEffect, useRef } from "react";
import { usePlayerStore } from "../../store/playerStore";
import { Play } from "../Player/Play";
import { Pause } from "../Player/Pause";
import { VolumeControl } from "../Player/Volume";
import { CurrentSong, SongControl } from "../Player/Song";

const Player = () => {
  const { currentMusic, isPlaying, setIsPlaying, volume } = usePlayerStore(
    (state) => state
  );
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const { song, playlist } = currentMusic;

    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  }, [currentMusic]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="flex flex-row justify-between w-full px-1 z-50">
        <div className="w-[200px]">
          {currentMusic?.song && <CurrentSong {...currentMusic.song} />}
        </div>

        <div className="grid place-content-center gap-4 flex-1">
          <div className="flex justify-center flex-col items-center">
            <button
              className={`bg-white rounded-full p-2 ${
                currentMusic.song ? "" : "hidden"
              }`}
              onClick={handleClick}
            >
              {isPlaying ? <Pause /> : <Play />}
            </button>
            <SongControl audio={audioRef} />
            <audio ref={audioRef} />
          </div>
        </div>

        <div className="grid place-content-center">
          <VolumeControl />
        </div>
      </div>
    </>
  );
};

export default Player;
