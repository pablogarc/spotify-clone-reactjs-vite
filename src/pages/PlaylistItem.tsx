import CardPlayButton from "../components/CardPlayButton";
import MusicsTable from "../components/MusicsTable";
import { allPlaylists, songs } from "../lib/data";
import { useParams } from "react-router-dom";

const PlaylistItem = () => {
  const { id } = useParams();
  const playlist = allPlaylists.find((playlist) => playlist.id === id);
  const playlistSongs = songs.filter(
    (song) => song.albumId === playlist?.albumId
  );

  return (
    <>
      <div
        id="playlist-container"
        className="relative flex flex-col h-full bg-zinc-900 overflow-x-hidden"
      >
        {/* Page Header */}

        <header className="flex flex-row gap-8 px-6 mt-12">
          <picture className="aspect-square w-52 h-52 flex-none">
            <img
              src={playlist?.cover}
              alt={`Cover of ${playlist?.title}`}
              className="object-cover w-full h-full shadow-lg"
            />
          </picture>

          <div className="flex flex-col justify-between">
            <h2 className="flex flex-1 items-end">Playlist</h2>
            <div>
              <h1 className="text-5xl font-bold block text-white">
                {playlist?.title}
                <span></span>
              </h1>
            </div>

            <div className="flex-1 flex items-end">
              <div className="text-sm text-gray-300 font-normal">
                <div>
                  <span>{playlist?.artists.join(", ")}</span>
                </div>
                <p className="mt-1">
                  <span className="text-white">
                    {playlistSongs.length} songs
                  </span>
                  , 3 hr 50 min
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="pl-6 pt-6">
          <CardPlayButton id={`${id}`} size="large" />
        </div>

        <div className="relative z-10 px-6 pt-10"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-[1]"></div>

        <section className="p-6">
          <MusicsTable songs={playlistSongs} />
        </section>
      </div>
    </>
  );
};

export default PlaylistItem;
