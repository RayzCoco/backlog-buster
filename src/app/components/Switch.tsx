"use client";

interface SwitchProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
  disabled?: boolean;
}

export default function Switch({
  label,
  checked,
  onChange,
  id = "custom-label",
  disabled = false,
}: SwitchProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
          checked ? "bg-[#39FF14]" : "bg-emerald-600"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <span className="sr-only">{label || "Toggle switch"}</span>
        <span
          className={`pointer-events-none inline-block h-6 w-6 transform rounded-full shadow-md ring-0 transition duration-200 ease-in-out ${
            checked ? "bg-[#053900] translate-x-5" : "bg-white translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
