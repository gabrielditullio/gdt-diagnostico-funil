import { ChevronUp, ChevronDown } from "lucide-react";

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

      {/* Desktop: Dots - right side */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2.5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-2.5 h-2.5 bg-primary scale-125"
                : "w-2 h-2 bg-muted/50 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </nav>

      {/* Desktop: Slide counter - bottom right */}
      <div className="fixed bottom-4 right-4 z-50 hidden md:block">
        <span className="text-[10px] font-mono text-muted-foreground/50">
          {String(current + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Desktop: Back to top - last slide */}
      {current === total - 1 && (
        <button
          onClick={() => onNavigate(0)}
          className="fixed bottom-4 left-4 z-50 hidden md:flex items-center gap-1 rounded-full bg-card border border-border px-3 py-1.5 transition-all duration-300 hover:bg-muted active:scale-95"
        >
          <ChevronUp size={14} className="text-primary" />
          <span className="text-[10px] font-bold text-muted-foreground">Início</span>
        </button>
      )}

      {/* Mobile: Bottom navigation bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-background/80 backdrop-blur-md border-t border-border">
          <button
            onClick={() => onNavigate(Math.max(current - 1, 0))}
            disabled={current === 0}
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center transition-all active:scale-90 disabled:opacity-30"
          >
            <ChevronUp size={18} className="text-foreground" />
          </button>

          <span className="text-xs font-bold text-muted-foreground tabular-nums">
            {current + 1}<span className="text-muted-foreground/40 mx-0.5">/</span>{total}
          </span>

          <button
            onClick={() => onNavigate(Math.min(current + 1, total - 1))}
            disabled={current === total - 1}
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center transition-all active:scale-90 disabled:opacity-30"
          >
            <ChevronDown size={18} className="text-foreground" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProgressDots;