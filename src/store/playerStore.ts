import { create } from "zustand";
import { colors } from "../lib/colors";

interface UsePlayerStoreState {
  isPlaying: boolean;
  currentMusic: {
    playlist?: {
      id: string;
      albumId: number;
      title: string;
      color: (typeof colors)[keyof typeof colors];
      cover: string;
      artists: string[];
    } | null;
    song?: {
      id: number;
      albumId: number;
      title: string;
      image: string;
      artists: string[];
      album: string;
      duration: string;
    } | null;
    songs: [];
  };
  volume: number;
  setVolume: (by: number) => void;
  setIsPlaying: (by: boolean) => void;
  setCurrentMusic: (by: UsePlayerStoreState['currentMusic']) => void;
}

export const usePlayerStore = create<UsePlayerStoreState>()((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [] },
  volume: 1,
  setVolume: (volume: number) => set({ volume }),
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  setCurrentMusic: (currentMusic: UsePlayerStoreState['currentMusic']) => set({ currentMusic }),
}));
