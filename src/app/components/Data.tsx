interface DataNode {
  id: number;
  title: string;
  number: string;
}

const DATA: DataNode[] = [
  {
    id: 1,
    title: "Processed",
    number: "1.2M+ Games",
  },
  {
    id: 2,
    title: "Uptime",
    number: "99.9%",
  },
  {
    id: 3,
    title: "Active Nodes",
    number: "4,812",
  },
];

export default function Data() {
  return (
    <div className="flex mt-12 divide-x divide-gray-300 justify-center">
      {DATA.map((data) => (
        <div className="flex flex-col items-center px-4 flex-1" key={data.id}>
          <span className="mb-1 text-justGreen font-bold text-[10px]">
            {data.title.toUpperCase()}
          </span>
          <span className="text-brightGreen font-bold text-xs">
            {data.number}
          </span>
        </div>
      ))}
    </div>
  );
}
