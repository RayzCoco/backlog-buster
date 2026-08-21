interface CardsProps {
  title: string;
  icon?: React.ReactElement;
  children: React.ReactNode;
  customClass?: string;
  alert?: boolean;
}

export default function Cards({
  title,
  icon,
  children,
  customClass,
  alert = false,
}: CardsProps) {
  return (
    <div
      className={`p-6 border rounded-md ${customClass ? customClass : ""} ${alert ? "border-[#FFB4AB]/20 bg-[#93000A]/10" : "border-[#3C4B35]"}`}
    >
      <div className="flex justify-between items-center">
        <span className="font-bold text-justGreen text-xs">{title}</span>
        {icon && <span className="text-lightGreen/50">{icon}</span>}
      </div>
      {children}
    </div>
  );
}
