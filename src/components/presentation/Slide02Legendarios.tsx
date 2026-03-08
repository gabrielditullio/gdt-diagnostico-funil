import { Mountain, Lock, Globe, Users, CalendarDays, DollarSign } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50000, suffix: "", label: "homens", icon: Users },
  { value: 19000, suffix: "", label: "só em 2025", icon: CalendarDays },
  { value: 13, suffix: "", label: "países", icon: Globe },
  { value: 1490, suffix: "", label: "por inscrição", icon: DollarSign, prefix: "~R$" },
];

const celebrities = [
  "Thiago Nigro",
  "Eliezer",
  "Kaká Diniz",
  "Neymar Pai",
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) ref.current = requestAnimationFrame(animate);
    };
    ref.current = requestAnimationFrame(animate);
    return () => { if (ref.current) cancelAnimationFrame(ref.current); };
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat, inView }: { stat: typeof stats[0]; inView: boolean }) {
  const count = useCountUp(stat.value, 2000, inView);
  const formatted = stat.prefix
    ? `${stat.prefix}${count.toLocaleString("pt-BR")}`
    : count.toLocaleString("pt-BR");

  return (
    <div className="flex flex-col items-center text-center p-4 md:p-6 rounded-lg bg-card border border-border">
      <stat.icon className="text-primary mb-2" size={24} />
      <span className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
        {formatted}
      </span>
      <span className="text-sm md:text-base font-medium text-muted-foreground mt-1 uppercase tracking-wider">
        {stat.label}
      </span>
    </div>
  );
}

const Slide02Legendarios = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full space-y-8 md:space-y-10">
      {/* Title */}
      <div className="text-center space-y-2">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">A Oportunidade</span>
        <h2 className="text-display">Legendários</h2>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} inView={inView} />
        ))}
      </div>

      {/* Celebrities */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-center">
          Quem já passou por lá
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {celebrities.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2"
            >
              <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                {name.charAt(0)}
              </div>
              <span className="text-sm font-semibold text-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mountain icon */}
      <div className="flex justify-center">
        <Mountain className="text-primary opacity-40" size={48} />
      </div>

      {/* Locked product */}
      <div className="relative mx-auto max-w-sm rounded-lg bg-card border border-border p-6 text-center">
        <Lock className="mx-auto text-primary mb-3" size={36} />
        <h3 className="text-subtitle text-foreground">Trekking Fit</h3>
        <p className="text-sm text-muted-foreground mt-1">Fechado para o público geral</p>
        <div className="absolute inset-0 rounded-lg border-2 border-primary/30 pointer-events-none" />
      </div>

      {/* Narration */}
      <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Você está vendendo guarda-chuva só pra quem já está molhado, quando tem uma cidade inteira vendo nuvem de chuva.
      </p>
    </div>
  );
};

export default Slide02Legendarios;
