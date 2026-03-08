import { ChevronUp } from "lucide-react";

interface ProgressDotsProps {
  total: number;
  current: number;
  onNavigate: (index: number) => void;
}

const ProgressDots = ({ total, current, onNavigate }: ProgressDotsProps) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <>
      {/* Progress bar - top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-muted/30">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Dots - right side */}
      <nav className="fixed right-3 md:right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 md:gap-2.5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-2 h-2 md:w-2.5 md:h-2.5 bg-primary scale-125"
                : "w-1.5 h-1.5 md:w-2 md:h-2 bg-muted/50 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </nav>

      {/* Slide counter - bottom right */}
      <div className="fixed bottom-4 right-4 z-50">
        <span className="text-[10px] font-mono text-muted-foreground/50">
          {String(current + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Back to top button - visible on last slide */}
      {current === total - 1 && (
        <button
          onClick={() => onNavigate(0)}
          className="fixed bottom-4 left-4 z-50 flex items-center gap-1 rounded-full bg-card border border-border px-3 py-1.5 transition-all duration-300 hover:bg-muted active:scale-95"
        >
          <ChevronUp size={14} className="text-primary" />
          <span className="text-[10px] font-bold text-muted-foreground">Início</span>
        </button>
      )}
    </>
  );
};

export default ProgressDots;
