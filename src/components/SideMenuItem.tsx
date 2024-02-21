import { FiSearch } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { VscLibrary } from "react-icons/vsc";
import { Link } from "react-router-dom";

interface SideMenuProps {
  href?: string;
  text: string;
}

const SideMenuItem = ({ href, text }: SideMenuProps) => {
  const linksMap: { [key: string]: JSX.Element } = {
    Home: <GrHomeRounded size={24} />,
    Search: <FiSearch size={24} />,
    Library: <VscLibrary size={24} />,
  };

  return (
    <>
      <li>
        <Link
          to={`${href}`}
          className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300"
        >
          {linksMap[text]}
          {text === "Library" ? "Your " + text : text}
          <slot />
        </Link>
      </li>
    </>
  );
};

export default SideMenuItem;
