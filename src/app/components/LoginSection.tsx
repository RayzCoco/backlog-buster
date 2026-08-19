import { Database, RefreshCw } from "lucide-react";

export default function LoginSection({}) {
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
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Database />
            </div>
            <input
              className="border-2 border-[#3C4B35] p-5 pl-11 w-full rounded-sm mb-1"
              type="text"
              placeholder="e.g., 76561198036..."
            />
          </div>
          <div className="text-[#474746] text-xs mb-6">
            <span>Public profile required for library synchronization</span>
          </div>
          <button
            className="bg-brightGreen p-6 mb-6 flex w-full rounded-sm justify-center cursor-pointer"
            type="button"
          >
            <span className="mr-2 text-darkGreen">
              <RefreshCw />
            </span>
            <span className="text-darkGreen font-bold rounded-sm">
              SYNC LIBRARY
            </span>
          </button>
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
