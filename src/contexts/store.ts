/** @format */

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ITypes } from "@/app/types/MyCard.types";

interface BearState {
  bears: number;
  increaseBears: () => void;
  decreaseBears: () => void;
  removeAllBears: () => void;
}
interface SearchState {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

interface PacksState {
  myPacks: ITypes[];
  setmyPacks: (myPacks: ITypes[]) => void;
  removePacks: () => void;
}

export const useBearStore = create<BearState>()(
  persist(
    (set) => ({
      bears: 0,
      increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
      decreaseBears: () => set((state) => ({ bears: state.bears - 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: "bear store",
    }
  )
);

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      searchTerm: "",
      setSearchTerm: (searchTerm: string) => set(() => ({ searchTerm })),
    }),
    {
      name: "search store",
    }
  )
);

export const usePackStore = create<PacksState>()(
  persist(
    (set) => ({
      myPacks: <ITypes[]>[],
      setmyPacks: (myPacks: ITypes[]) => set(() => ({ myPacks })),
      removePacks: () => set({ myPacks: [] }),
    }),
    {
      name: "pack store",
    }
  )
);
