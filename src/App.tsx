import "./App.css";
import AsideMenu from "./components/AsideMenu";

function App() {
  return (
    <>
      <div id="app" className="relative h-screen p-2 gap-2">
        <aside className="[grid-area:aside] flex-col flex overflow-y-auto">
          <AsideMenu />
        </aside>

        <main className="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto">
          Main
        </main>

        <footer className="[grid-area:player] min-h-[100px]">
          footer
        </footer>
      </div>
    </>
  );
}

export default App;
