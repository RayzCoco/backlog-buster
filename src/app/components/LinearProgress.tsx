interface LinearProgressProps {
  percentage: number;
  height?: number;
  color?: string;
  trackColor?: string;
  className?: string;
  rounded?: boolean;
}

export default function LinearProgress({
  percentage,
  height = 8,
  color = "#39FF14",
  trackColor = "#2A3626",
  className = "",
  rounded = true,
}: LinearProgressProps) {
  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div
      className={`w-full overflow-hidden ${rounded ? "rounded-full" : ""} ${className}`}
      style={{
        height,
        backgroundColor: trackColor,
      }}
    >
      <div
        className={`h-full ${rounded ? "rounded-full" : ""} transition-all duration-700 ease-out`}
        style={{
          width: `${clampedPercentage}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}
