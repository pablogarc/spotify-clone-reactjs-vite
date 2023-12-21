import { Play, Pause } from "./Sections/Player";
import { usePlayerStore } from "../store/playerStore";
import { allPlaylists, songs as allSongs } from "../lib/data";

interface CardPlayButtonProps {
  id: string;
}

const CardPlayButton = ({ id }: CardPlayButtonProps) => {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    const playlist = allPlaylists.find((playlist) => playlist.id === id);
    const songs = allSongs.filter((song) => song.albumId === playlist?.albumId);

    setIsPlaying(true);
    setCurrentMusic({ songs, playlist, song: songs[0] });
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="card-play-button rounded-full bg-green-500 p-4 mb-10"
      >
        {isPlayingPlaylist ? <Pause /> : <Play />}
      </button>
    </>
  );
};

export default CardPlayButton;
