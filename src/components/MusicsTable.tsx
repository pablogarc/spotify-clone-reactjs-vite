import { IoTimeOutline } from "react-icons/io5";
import { Song } from "../lib/data";

interface MusicsTableProps {
  songs: Song[];
}

const MusicsTable = ({ songs }: MusicsTableProps) => {
  return (
    <>
      <table className="table-auto text-left min-w-full divide-y divide-gray-500/20">
        <thead className="">
          <tr className="text-zinc-400 text-sm">
            <th className="px-4 py-2 font-light">#</th>
            <th className="px-4 py-2 font-light">Title</th>
            <th className="px-4 py-2 font-light">Album</th>
            <th className="px-4 py-2 font-light">
              <IoTimeOutline size={24} />
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="h-[16px]"></tr>
          {songs.map((song, index) => (
            <tr
              key={song?.id}
              className="text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden trasition duration-300"
            >
              <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">
                {index + 1}
              </td>
              <td className="px-4 py-2 flex gap-3">
                <picture className="">
                  <img
                    src={song?.image}
                    alt={song?.title}
                    className="w-11 h-11"
                  />
                </picture>
                <div className="flex flex-col">
                  <h3 className="text-white text-base font-normal">
                    {song?.title}
                  </h3>
                  <span>{song?.artists.join(", ")}</span>
                </div>
              </td>
              <td className="px-4 py-2">{song.album}</td>
              <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">
                {song?.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MusicsTable;
