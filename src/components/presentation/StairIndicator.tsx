interface StairIndicatorProps {
  currentStep: number;
  totalSteps?: number;
  className?: string;
}

const StairIndicator = ({ currentStep, totalSteps = 5, className = "" }: StairIndicatorProps) => {
  const heights = [12, 20, 28, 36, 44];

  return (
    <div className={`flex items-end gap-1 ${className}`}>
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className="w-2.5 rounded-sm transition-all duration-300"
          style={{
            height: `${heights[i] ?? 12 + i * 8}px`,
            backgroundColor: i + 1 <= currentStep ? "#D35400" : "#444444",
          }}
        />
      ))}
    </div>
  );
};

export default StairIndicator;
