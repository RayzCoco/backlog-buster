import Cards from "@/app/components/Cards";
import { Palette, Webhook } from "lucide-react";

export default function Settings() {
  return (
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
              className="border border-[#3C4B35] py-2 px-4 mb-0.5"
              placeholder="API KEY"
            />
            <span className="text-justGreen/60 text-xs">
              Required to fetch your library and playtime data. Never share this
              key.
            </span>
          </div>
          <div className="flex flex-col mb-4">
            <span className="text-justGreen mb-1 font-bold">
              Target SteamID64
            </span>
            <input
              type="text"
              className="border border-[#3C4B35] py-2 px-4 mb-0.5"
              placeholder="API KEY"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-justGreen mb-1 font-bold">
              Library Synchronization Frequency
            </span>
            <div className="flex">
              <select className="">
                <option value="1">Every 1 hour</option>
                <option value="3">Every 3 hour</option>
                <option value="6">Every 6 hour</option>
                <option value="9">Every 9 hour</option>
                <option value="12">Every 12 hour</option>
              </select>
              <button
                className="border border-[#DAB9FF] font-bold text-[#DAB9FF] py-3 px-6"
                type="button"
              >
                FORCE HARD RESYNC NOW
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
            <div className="flex">
              <div className="flex flex-col pb-2 border-b border-b-[#3C4B35]/20 mb-6">
                <span>OLED True Dark Mode</span>
                <span>
                  Switches UI backgrounds to pure black for OLED panels.
                </span>
              </div>
              <span>Switch here</span>
            </div>
          </Cards>
        </div>
      </div>
    </div>
  );
}
