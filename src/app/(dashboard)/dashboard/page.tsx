import {
  ClockFading,
  Dice6,
  History,
  MoveUp,
  Search,
  Trophy,
} from "lucide-react";
import Cards from "@/app/components/Cards";
import CircularProgress from "@/app/components/CircularProgress";
import GameList from "@/app/components/GameList";
import LinearProgress from "@/app/components/LinearProgress";

const GAME_LISTS = [
  {
    id: 0,
    title: "Stellar Blade",
    src: "",
    genre: "Action",
    time: 12,
    url: "",
  },
  {
    id: 1,
    title: "Overwatch",
    src: "",
    genre: "Shooter",
    time: 100,
    url: "",
  },
  {
    id: 2,
    title: "Pragamata",
    src: "",
    genre: "Adventure",
    time: 20,
    url: "",
  },
  {
    id: 3,
    title: "Slay The Spire 2",
    src: "",
    genre: "Card",
    time: 2,
    url: "",
  },
];

const DATA = [
  {
    id: 0,
    title: "UNPLAYED BACKLOG",
    icon: <ClockFading />,
    children: (
      <div className="mt-8">
        <h3 className="mb-1 text-[#39FF14] text-4xl font-bold">142 Games</h3>
        <div className="flex items-center">
          <MoveUp className="text-[#FFB4AB]" />
          <span className="text-[#FFB4AB] mr-1"> 4</span>
          <span className="text-[#BACCB0]">Since last sync</span>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    title: "TOTAL TIME TO CLEAR",
    icon: <History />,
    children: (
      <div className="mt-8">
        <h3 className="mb-1 text-white text-4xl font-bold">2,450 Hours</h3>
        <span className="text-[#BACCB0]">Estimated based on HLTB</span>
      </div>
    ),
  },
  {
    id: 2,
    title: "LIBRARY EFFICIENCY",
    icon: <Trophy />,
    children: (
      <div className="mt-4">
        <div className="flex">
          <CircularProgress percentage={20} />
          <div className="ml-8 flex items-start flex-col justify-center flex-1">
            <span className="mb-2">Completion Ratio</span>
            <LinearProgress percentage={20} />
          </div>
        </div>
      </div>
    ),
  },
];

const MAIN_DATA = [
  {
    id: 0,
    title: "",
    children: (
      <div className="p-12">
        <div className="flex flex-col justify-center items-center">
          <Dice6 size={96} color="#39FF14" className="mb-10" />
          <h2 className="text-3xl font-bold mb-2">SMART ROULETTE WHEEL</h2>
          <span className="text-[#BACCB0] text-sm mb-6">
            Algorithmically selecting your next obsession based on playstyle,
            mood, and backlog urgency.
          </span>
          <button
            className="bg-[#39FF14] px-12 py-4 text-[#053900] font-bold rounded"
            type="button"
          >
            ROLL FOR THE NEXT GAME
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    title: "FILTER LIBRARY",
    children: (
      <div className="mt-8">
        <div className="border-[#3C4B35] border bg-[#252525] relative mb-4">
          <Search
            size={30}
            className="text-[#BACCB0] absolute top-1/2 left-3 -translate-y-1/2"
          />
          <input
            className="py-4 pr-3.5 pl-14 text-xl w-full"
            type="text"
            placeholder="Search unplayed titles..."
          />
        </div>
        <div className="border-t border-t-[#3C4B35]/20 py-4">
          <div className="overflow-y-auto h-60">
            {GAME_LISTS.map((list) => (
              <GameList
                key={list.id}
                title={list.title}
                src={list.src}
                url={list.url}
                genre={list.genre}
                time={list.time}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

const OTHER_DATA = [
  {
    id: 0,
    title: "RECENTLY ADDED",
    children: (
      <div className="mt-4">
        <div className="mb-2">
          <LinearProgress percentage={70} />
          <div className="mt-2 flex justify-between">
            <span className="text-[#BACCB0] text-xs">8 Games</span>
            <span className="text-[#BACCB0] text-xs">This month</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    title: "SYNC STATUS",
    children: (
      <div className="mt-4 flex items-center">
        <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] inline-block mr-2"></span>
        <span className="text-[#BACCB0] text-xs">Cloud Active</span>
      </div>
    ),
  },
  {
    id: 2,
    title: "LIBRARY HEALTH",
    children: (
      <div className="flex justify-between items-center">
        <span className="mt-2">98% of metadata successfully cached</span>
        <div className="mt-2">
          <button
            type="button"
            className="text-[#EFFFE3] font-bold border-[#EFFFE3]/25 border px-2 py-1"
          >
            RE-INDEX
          </button>
        </div>
      </div>
    ),
  },
];

export default function Dashboard() {
  return (
    <>
      <div className="p-6 grid grid-cols-3 gap-4">
        {DATA.map((card) => (
          <Cards key={card.id} title={card.title} icon={card.icon}>
            {card.children}
          </Cards>
        ))}
      </div>
      <div className="p-6 grid grid-cols-3 gap-4">
        {MAIN_DATA.map((card) => (
          <Cards
            customClass={`${card.id === 0 ? "col-span-2" : ""}`}
            key={card.id}
            title={card.title}
          >
            {card.children}
          </Cards>
        ))}
      </div>
      <div className="p-6 grid grid-cols-3 gap-4">
        {OTHER_DATA.map((card) => (
          <Cards key={card.id} title={card.title}>
            {card.children}
          </Cards>
        ))}
      </div>
    </>
  );
}
