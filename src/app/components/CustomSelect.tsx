import { ChevronDown } from "lucide-react";

interface OptionProps {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: OptionProps[];
  placeholder?: string;
  id?: string;
}

export default function CustomSelect({
  label,
  value,
  onChange,
  options,
  placeholder = "Choose an Option",
  id = "custom-select",
}: CustomSelectProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded border border-[#3C4B35] py-3 pl-4 pr-10 cursor-pointer"
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#6B7280]">
          <ChevronDown
            className="h-5 w-5 transition-transform duration-200"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
