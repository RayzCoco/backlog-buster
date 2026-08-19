import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface GameListProps {
  title: string;
  src?: string;
  genre: string;
  time: number;
  url: string;
}

export default function GameList({
  title,
  src,
  genre,
  time,
  url,
}: GameListProps) {
  return (
    <Link href={url}>
      <div className="p-2 flex items-center">
        <Image
          className="mr-2"
          src={src || "https://placehold.co/600x400"}
          alt=""
          width={40}
          height={40}
        />
        <div className="flex flex-col flex-1">
          <h3 className="">{title}</h3>
          <span>
            {genre} - {time}h est
          </span>
        </div>
        <div>
          <ExternalLink className="text-justGreen" size={24} />
        </div>
      </div>
    </Link>
  );
}
