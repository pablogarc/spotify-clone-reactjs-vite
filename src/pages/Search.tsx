import { playlists } from "../lib/data";
import SearchItemCard from "../components/Search/SearchItemCard";

const Search = () => {
  return (
    <>
      <div className="relative transition-all duration-1000 bg-green-600">
        <div className="flex flex-1 fixed px-6 pt-2 pb-2 z-20">
          {/* TODO */}
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 bg-zinc-900 rounded-md text-white"
          />
        </div>
        <div className="relative z-10 px-6 pt-[65px]">
          <h1 className="text-4xl font-bold">Browse all</h1>

          <div className="flex flex-wrap mt-6 gap-4">
            {playlists.map((playlist) => (
              <SearchItemCard key={playlist?.id} playlist={playlist} />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80" />
      </div>
    </>
  );
};

export default Search;
