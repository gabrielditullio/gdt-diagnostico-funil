interface ProgressDotsProps {
  total: number;
  current: number;
  onNavigate: (index: number) => void;
}

const ProgressDots = ({ total, current, onNavigate }: ProgressDotsProps) => {
  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          aria-label={`Slide ${i + 1}`}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            i === current
              ? "bg-primary scale-125"
              : "bg-muted hover:bg-muted-foreground"
          }`}
        />
      ))}
    </nav>
  );
};

export default ProgressDots;
