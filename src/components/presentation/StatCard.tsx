import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  number: string;
  label: string;
  className?: string;
}

const StatCard = ({ number, label, className = "" }: StatCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const numericStr = number.replace(/\D/g, "");
    const target = parseInt(numericStr, 10);
    if (isNaN(target)) { setDisplayed(number); return; }

    const duration = 1200;
    const steps = 40;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const current = Math.round(target * progress);
      // Reformat with original separators
      setDisplayed(current.toLocaleString("pt-BR"));
      if (step >= steps) {
        setDisplayed(number);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [started, number]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-4xl md:text-5xl font-black" style={{ color: "#D35400" }}>
        {displayed}
      </div>
      <div className="text-sm mt-1 opacity-70">{label}</div>
    </div>
  );
};

export default StatCard;
