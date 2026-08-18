interface CardsProps {
  title: string;
  icon?: React.ReactElement;
  children: React.ReactNode;
  customClass?: string;
}

export default function Cards(props: CardsProps) {
  return (
    <div
      className={`p-6 border border-[#3C4B35] rounded-md ${props.customClass ? props.customClass : ""}`}
    >
      <div className="flex justify-between items-center">
        <span className="font-bold text-[#BACCB0] text-xs">{props.title}</span>
        {props.icon && <span className="text-[#EFFFE3]/50">{props.icon}</span>}
      </div>
      {props.children}
    </div>
  );
}
