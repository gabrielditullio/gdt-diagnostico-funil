interface StairIndicatorProps {
  activeStep: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

const stepColors = [
  { bg: "#27AE60" },
  { bg: "#3498DB" },
  { bg: "#2C3E8C" },
  { bg: "hsl(var(--primary))" },
  { bg: "transparent", border: "hsl(var(--primary))" },
];

const heights = [8, 16, 24, 32, 40];

const StairIndicator = ({ activeStep, className = "" }: StairIndicatorProps) => {
  return (
    <div className={`flex items-end gap-[3px] ${className}`}>
      {heights.map((h, i) => {
        const isActive = i + 1 <= activeStep;
        const step = stepColors[i];
        const isBorderOnly = i === 4;

        return (
          <div
            key={i}
            className="w-2 rounded-sm transition-all duration-300"
            style={{
              height: `${h}px`,
              backgroundColor: isActive
                ? isBorderOnly ? "transparent" : step.bg
                : "hsl(var(--muted) / 0.4)",
              border: isActive && isBorderOnly ? `1.5px solid ${step.border}` : "none",
              opacity: isActive ? 1 : 0.4,
            }}
          />
        );
      })}
    </div>
  );
};

export default StairIndicator;
