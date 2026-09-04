"use client";

import { Database, RefreshCw } from "lucide-react";
import { useState } from "react";
import { fetchSteamProfile } from "../lib/fetchApi";
import { useSteamProfileStore } from "../store/useSteamProfileStore";

const STEAM_ID_64_PATTERN = /^7656119\d{10}$/;

export default function LoginSection() {
  const [steamId, setSteamId] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const setProfile = useSteamProfileStore((state) => state.setProfile);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!STEAM_ID_64_PATTERN.test(steamId)) {
      setError("Enter a valid 17-digit SteamID64.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const data = await fetchSteamProfile(steamId);
      if (!data) {
        throw new Error("Steam profile is private");
      }
      setProfile(data);
      window.location.href = "/dashboard";
    } catch (err: any) {
      setError(err.message || "Failed to sync successfully");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="border-2 border-[#2D2B3D] rounded-sm">
        <div className="bg-[#131313] p-6">
          <h3 className="text-xl font-semibold mb-6 text-lightGreen">
            Steam Backlog Buster Log In
          </h3>
          <div className="text-justGreen mb-2 font-bold text-xs">
            ENTER YOUR STEAMID64
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Database />
              </div>
              <input
                className={`border-2 p-5 pl-11 w-full rounded-sm mb-1 ${error ? "border-[#FFB4AB]" : "border-[#3C4B35]"}`}
                type="text"
                placeholder="e.g., 76561198036..."
                inputMode="numeric"
                autoComplete="off"
                value={steamId}
                onChange={(e) => {
                  setSteamId(e.target.value);
                  if (error) setError("");
                }}
              />
            </div>

            <div className="text-[#474746] text-xs mb-6">
              <span>Public profile required for library synchronization</span>
              {error && (
                <span className="block text-[#FFB4AB] mt-1" role="alert">
                  {error}
                </span>
              )}
            </div>
            <button
              className="bg-brightGreen p-6 mb-6 flex w-full rounded-sm justify-center cursor-pointer"
              type="submit"
              disabled={isLoading}
            >
              <span className="mr-2 text-darkGreen">
                <RefreshCw />
              </span>
              <span className="text-darkGreen font-bold rounded-sm">
                {isLoading ? "SYNCING..." : "SYNC LIBRARY"}
              </span>
            </button>
          </form>
          <div className="border-t-2 border-[#3C4B35] pt-6 flex justify-between">
            <span className="text-justGreen font-bold text-xs">
              WHERE IS MY ID?
            </span>
            <span className="text-justGreen font-bold text-xs">
              PRIVACY POLICY
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
