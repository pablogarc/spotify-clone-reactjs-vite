import { Play, Pause } from "./Sections/Player";
import { usePlayerStore } from "../store/playerStore";
import { allPlaylists, songs as allSongs } from "../lib/data";

interface CardPlayButtonProps {
  id?: string;
  size?: string;
}

const CardPlayButton = ({ id, size = "small" }: CardPlayButtonProps) => {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id;

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    const playlist = allPlaylists.find((playlist) => playlist?.id === id);
    const songs = allSongs.filter((song) => song?.albumId === playlist?.albumId);

    setIsPlaying(true);
    setCurrentMusic({ songs, playlist, song: songs[0] });
  };

  const iconClassName = size === "small" ? "w-4 h-4" : "w-5 h-5";

  return (
    <>
      <button
        onClick={handleClick}
        className="card-play-button rounded-full bg-green-500 p-4 mb-10 hover:scale-105 transition hover:bg-green-400"
      >
        {isPlayingPlaylist ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
      </button>
    </>
  );
};

export default CardPlayButton;
