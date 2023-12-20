import "./App.css";
import MainSection from "./components/Sections/MainSection";
import AsideMenu from "./components/AsideMenu";
import PlaylistItem from "./pages/PlaylistItem";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      <div id="app" className="relative h-screen p-2 gap-2">
        <aside className="[grid-area:aside] flex-col flex overflow-y-auto">
          <AsideMenu />
        </aside>

          <main className="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto">
            <Routes location={location} key={location.pathname} >
              <Route index element={<MainSection />} />
              <Route path="/playlist/:id" element={<PlaylistItem />} />
            </Routes>
            <slot />
          </main>

        <footer className="[grid-area:player] min-h-[100px]">footer</footer>
      </div>
    </>
  );
}

export default App;
