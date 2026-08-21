"use client";

import { Check } from "lucide-react";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
  disabled?: boolean;
}

export default function Checkbox({
  label,
  checked,
  onChange,
  id = "custom-checkbox",
  disabled = false,
}: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={`inline-flex items-center gap-3 select-none ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />

      <div
        aria-hidden="true"
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors duration-150 peer-focus-visible:ring-2 peer-focus-visible:ring-emerald-500 peer-focus-visible:ring-offset-2 bg-[#EFFFE3]"
      >
        <Check
          className={`h-4 w-4 text-emerald-600 stroke-3 transition-transform duration-150 ${
            checked ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />
      </div>

      {label && <span className="text-sm font-medium">{label}</span>}
    </label>
  );
}
