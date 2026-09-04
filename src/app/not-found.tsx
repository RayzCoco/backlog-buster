import { Undo2 } from "lucide-react";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex justify-center items-center h-dvh w-full flex-col">
      <h2 className="text-6xl font-bold mb-2 text-lightGreen">404 Not Found</h2>
      <p className="text-2xl mb-6">Could not find requested resource</p>
      <Link
        href="/login"
        className="rounded bg-brightGreen py-4 px-6 text-black flex items-center"
      >
        <span className="font-bold mr-4">Return to Dashboard</span>
        <Undo2 />
      </Link>
    </div>
  );
}
