import { FiSearch } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { VscLibrary } from "react-icons/vsc";

interface SideMenuProps {
  href?: string;
  text: string;
}

const SideMenuItem: React.FC<SideMenuProps> = ({ href, text }) => {
  const linksMap: any = {
    Home: <GrHomeRounded size={24} />,
    Search: <FiSearch size={24} />,
    Library: <VscLibrary size={24} />,
  };

  return (
    <>
      <li>
        <a
          href={href}
          className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300"
        >
          {linksMap[text]}
          {text === "Library" ? "Your " + text : text}
          <slot />
        </a>
      </li>
    </>
  );
};

export default SideMenuItem;
