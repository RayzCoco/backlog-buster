export const fetchSteamProfile = async (steamId: string) => {
  const res = await fetch(`/api/steam?steamId=${steamId}`);
  if (!res.ok) throw new Error("Failed to load steam profile");
  return res.json();
};
