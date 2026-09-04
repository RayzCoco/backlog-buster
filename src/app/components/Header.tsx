import { Menu } from "lucide-react";
import { useHeaderStore } from "../store/useHeaderStore";
import { useSteamProfileStore } from "../store/useSteamProfileStore";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  setIsSidebarOpen: () => void;
}

export default function Header(props: HeaderProps) {
  const title = useHeaderStore((state) => state.title);
  const profile = useSteamProfileStore((state) => state.profile);
  const clearProfile = useSteamProfileStore((state) => state.clearProfile);

  const handleLogout = async () => {
    try {
      useSteamProfileStore.persist.clearStorage();

      await fetch("/api/auth/logout", {
        method: "POST",
      });
      clearProfile();

      window.location.href = "/login";
    } catch (err) {
      console.error("Failed to logout:", err);
    }
  };

  return (
    <header className="absolute md:relative top-0 left-0 right-0 h-16 bg-[#1E1E1E] border-b border-slate-800 flex items-center px-4 z-20">
      <button
        className="p-2 text-slate-400 hover:text-white focus:outline-none md:hidden"
        type="button"
        onClick={props.setIsSidebarOpen}
      >
        <Menu />
      </button>
      <div className="flex justify-between flex-1 items-center">
        <span className="ml-4 font-bold text-lightGreen text-2xl">{title}</span>
        <div className="flex divide-x divide-gray-300 items-center">
          <div className="flex flex-col pr-4 mr-4">
            <span className="text-justGreen">
              Welcome back, {profile?.personaname}.
            </span>
            <p className="text-[#85967C] text-xs">Library Synced: 4 mins ago</p>
          </div>
          <div className="flex items-center">
            <Link className="mr-2" href={profile ? profile.profileurl : ""}>
              <span className="rounded-full relative overflow-hidden w-8 h-8 block">
                {profile?.avatarfull ? (
                  <Image
                    src={profile.avatarfull}
                    alt="profile picture"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gray-700 rounded-full" />
                )}
              </span>
            </Link>
            <button
              type="button"
              className="cursor-pointer font-bold"
              onClick={handleLogout}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
