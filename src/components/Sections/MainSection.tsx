import { playlists } from "../../lib/data";
import PlayListItemCard from "../PlayListItemCard";

const MainSection = () => {
  return (
    <>
      <div
        id="playlist-container"
        className="relative transition-all duration-1000 bg-green-600"
      >
        {/* Page Header */}

        <div className="relative z-10 px-6 pt-10">

          {/* Greetings */}
          <h1 className="font-bold text-4xl">Good Morning</h1>

          <div className="flex flex-wrap mt-6 gap-4">
            {playlists.map((playlist) => (
              <PlayListItemCard playlist={playlist} />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80" />
      </div>
    </>
  );
};

export default MainSection;
