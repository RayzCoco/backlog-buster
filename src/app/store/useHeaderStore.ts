import { create } from "zustand";

interface HeaderStore {
  title: string;
  setTitle: (title: string) => void;
}

export const useHeaderStore = create<HeaderStore>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
}));
