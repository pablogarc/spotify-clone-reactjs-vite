import { create } from "zustand";
import { createJSONStorage, persist, devtools } from "zustand/middleware";

interface UsePlayerStoreState {
  isPlaying: boolean;
  currentMusic: {
    playlist?: any;
    song?: any;
    songs: [];
  };
  currentTime: any;
  volume: number;
  setVolume: (by: number) => void;
  setIsPlaying: (by: boolean) => void;
  setCurrentMusic: (by: any) => void;
  setCurrentTime: (by: any) => void;
}

export const usePlayerStore = create<UsePlayerStoreState>()(
  devtools(
    persist(
      (set) => ({
        isPlaying: false,
        currentMusic: { playlist: null, song: null, songs: [] },
        currentTime: 0,
        volume: 1,
        setVolume: (volume: number) => set({ volume }),
        setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
        setCurrentMusic: (currentMusic: any) => set({ currentMusic }),
        setCurrentTime: (currentTime: any) => set({ currentTime }),
      }),
      {
        name: "state",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
