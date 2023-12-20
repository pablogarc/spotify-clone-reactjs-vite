import { Playlist } from "../lib/data";

interface SideMenuCardProps {
  playlist: Playlist;
}

const PlayListItemCard: React.FC<SideMenuCardProps> = ({ playlist }) => {
  const { id, cover, title, artists } = playlist;
  const artistsString = artists.join(", ");

  return (
    <>
      <a
        href={`/playlist/${id}`}
        className="playlist-item transition-all duration-300 flex relative p-2 overflow-hidden gap-2 pb-6 rounded-md hover:bg-zinc-800 shadow-lg hover:shadow-xl bg-zinc-500/30 w-44 flex-col"
      >
        <picture className=" aspect-square w-full h-auto flex-none">
          <img
            src={cover}
            alt={`Cover of ${title} by ${artistsString}`}
            className="object-cover w-full h-full rounded-md"
          />
        </picture>

        <div className="flex flex-auto flex-col px-2">
          <h4 className="text-white text-sm">{title}</h4>

          <span className="text-xs text-gray-400">{artistsString}</span>
        </div>
      </a>
    </>
  );
};

export default PlayListItemCard;
