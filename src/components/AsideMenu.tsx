import SideMenuItem from "./SideMenuItem";

const AsideMenu = () => {
  return (
    <>
      <nav className="flex flex-col flex-1 gap-2">
        <div className="bg-zinc-900 rounded-lg p-2">
          <ul>
            <SideMenuItem href="/" text="Home" />
            <SideMenuItem href="/#" text="Search" />
          </ul>
        </div>

        <div className="bg-zinc-900 rounded-lg p-2 flex-1">
          <ul>
            <SideMenuItem href="/" text="Library" />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default AsideMenu;
