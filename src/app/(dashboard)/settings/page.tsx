"use client";

import Cards from "@/app/components/Cards";
import Checkbox from "@/app/components/Checkbox";
import CustomSelect from "@/app/components/CustomSelect";
import SetHeaderTitle from "@/app/components/SetHeaderTitle";
import Switch from "@/app/components/Switch";
import { Palette, RefreshCw, TriangleAlert, Webhook } from "lucide-react";
import { useState } from "react";

const TimeOptions = [
  { value: "12", label: "Every 12 Hours" },
  { value: "24", label: "Every 24 Hours" },
  { value: "168", label: "Every 1 Week" },
  { value: "336", label: "Every 2 Weeks" },
  { value: "720", label: "Every Month" },
];

const CurrenciesOptions = [
  { value: "MYR", label: "MYR (MALAYSIA RINGGIT)" },
  { value: "JPY", label: "JPY (JAPANESE YEN)" },
  { value: "USD", label: "USD (UNITED STATE DOLLARS)" },
  { value: "CNY", label: "CNY (CHINESE YUAN)" },
  { value: "TWD", label: "TWD (TAIWAN DOLLARS)" },
];

export default function Settings() {
  const [useCurrency, setUseCurrency] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [useDarkMode, setUseDarkMode] = useState(false);
  const [useNotification, setUseNotification] = useState(false);
  const [useDLC, setUseDLC] = useState(false);
  const [useGameIdle, setUseGameIdle] = useState(false);

  return (
    <>
      <SetHeaderTitle title="Settings" />
      <div className="p-6">
        <p className="text-justGreen mb-6">
          Manage your Steam credentials, UI preferences, and local data storage.
        </p>
        <div className="mb-6">
          <Cards title="">
            <div className="flex mb-6">
              <Webhook className="mr-2 text-lightGreen" />
              <h2 className="text-xl font-bold text-white">
                Steam API Configuration
              </h2>
            </div>
            <div className="flex flex-col mb-4">
              <span className="text-justGreen mb-1 font-bold">
                Steam Web API Key
              </span>
              <input
                type="text"
                className="rounded border border-[#3C4B35] py-3 px-4 mb-0.5"
                placeholder="API KEY"
              />
              <span className="text-justGreen/60 text-xs">
                Required to fetch your library and playtime data. Never share
                this key.
              </span>
            </div>
            <div className="flex flex-col mb-4">
              <span className="text-justGreen mb-1 font-bold">
                Target SteamID64
              </span>
              <input
                type="text"
                className="rounded border border-[#3C4B35] py-3 px-4 mb-0.5"
                placeholder="API KEY"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-justGreen mb-1 font-bold">
                Library Synchronization Frequency
              </span>
              <div className="flex">
                <div className="mr-3 flex-1">
                  <CustomSelect
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    options={TimeOptions}
                  />
                </div>
                <button
                  className="rounded border border-[#DAB9FF] font-bold text-[#DAB9FF] py-3 px-6 flex items-center cursor-pointer"
                  type="button"
                >
                  <RefreshCw className="mr-2" size={20} />
                  <span>FORCE HARD RESYNC NOW</span>
                </button>
              </div>
            </div>
          </Cards>
        </div>
        <div className="mb-6">
          <div className="mb-6">
            <Cards title="">
              <div className="flex mb-6">
                <Palette className="mr-2 text-lightGreen" />
                <h2 className="text-xl font-bold text-white">
                  Localization & Interface
                </h2>
              </div>
              <div className="flex justify-between items-center pb-2 mb-6 border-b border-b-[#3C4B35]/20">
                <div className="flex flex-col">
                  <span className="font-bold">OLED True Dark Mode</span>
                  <span className="text-justGreen">
                    Switches UI backgrounds to pure black for OLED panels.
                  </span>
                </div>
                <Switch checked={useDarkMode} onChange={setUseDarkMode} />
              </div>
              <div className="flex flex-col pb-2 mb-6 border-b border-b-[#3C4B35]/20">
                <span className="font-bold">
                  Preferred Currency for Deal Alerts
                </span>
                <CustomSelect
                  value={useCurrency}
                  onChange={(e) => setUseCurrency(e.target.value)}
                  options={CurrenciesOptions}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold mb-2">Notification Triggers</span>
                <div className="flex flex-col gap-3">
                  <Checkbox
                    id="pricedrops-checkbox"
                    label="Price Drops Below 50%"
                    checked={useNotification}
                    onChange={setUseNotification}
                  />
                  <Checkbox
                    id="dlc-checkbox"
                    label="DLC Release Alerts"
                    checked={useDLC}
                    onChange={setUseDLC}
                  />
                  <Checkbox
                    id="activeGame-checkbox"
                    label="Active Game Sitting Idle Alerts"
                    checked={useGameIdle}
                    onChange={setUseGameIdle}
                  />
                </div>
              </div>
            </Cards>
          </div>
        </div>
        <div>
          <Cards customClass="p-6" title="" alert>
            <div className="flex mb-4">
              <TriangleAlert className="text-[#FFB4AB] mr-2" />
              <h2 className="text-xl text-[#FFB4AB] font-bold">
                Data Privacy & Purge
              </h2>
            </div>
            <p className="mb-4 text-justGreen">
              This will completely clear your browser local storage cache,
              disconnect your linked Steam ID, and wipe all manual Kanban
              overrides.{" "}
              <span className="font-bold text-[#FFB4AB]">
                This action cannot be undone.
              </span>
            </p>
            <button
              className="bg-[#FFB4AB] text-[#690005] font-bold rounded py-4 px-12"
              type="button"
            >
              PURGE DATA & RESET APPLICATION
            </button>
          </Cards>
        </div>
      </div>
    </>
  );
}
