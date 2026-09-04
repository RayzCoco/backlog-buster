import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SteamProfile {
  steamid: string;
  personaname: string;
  avatarfull: string;
  profileurl: string;
}

interface SteamStore {
  profile: SteamProfile | null;
  setProfile: (profile: SteamProfile) => void;
  clearProfile: () => void;
}

export const useSteamProfileStore = create<SteamStore>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (profile) => set({ profile }),
      clearProfile: () => set({ profile: null }),
    }),
    {
      name: "steam-profile",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
