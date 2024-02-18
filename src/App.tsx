import "./App.css";
import MainSection from "./components/Sections/MainSection";
import AsideMenu from "./components/AsideMenu";
import PlaylistItem from "./pages/PlaylistItem";
import { Routes, Route } from "react-router-dom";
import Player from "./components/Sections/Player";
import Search from "./pages/Search";

function App() {

  return (
    <>
      <div id="app" className="relative h-screen p-2 gap-2">
        <aside className="[grid-area:aside] flex-col flex overflow-y-auto">
          <AsideMenu />
        </aside>

        <main className="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto">
            <Routes>
              <Route index element={<MainSection />} />
              <Route path="/playlist/:id" element={<PlaylistItem />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          <slot />
        </main>

        <footer className="[grid-area:player]">
          <Player />
        </footer>
      </div>
    </>
  );
}

export default App;
