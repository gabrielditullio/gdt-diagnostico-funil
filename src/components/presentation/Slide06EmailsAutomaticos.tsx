import { Gift, Zap, Lightbulb, Star, Tag, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const days = [
  { day: 1, title: "Boas-vindas + PDF + Curiosidade", icon: Gift, emotion: 40 },
  { day: 2, title: "O Drama — momento mais difícil", icon: Zap, emotion: 75 },
  { day: 3, title: "A Virada — a descoberta do método", icon: Lightbulb, emotion: 55 },
  { day: 4, title: "Benefícios inesperados", icon: Star, emotion: 70 },
  { day: 5, title: "A Oferta — urgência + preço especial", icon: Tag, emotion: 90 },
];

const Slide06EmailsAutomaticos = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // SVG curve points
  const curvePoints = days.map((d, i) => {
    const x = 10 + (i / (days.length - 1)) * 80;
    const y = 90 - d.emotion * 0.8;
    return { x, y };
  });
  const pathD = curvePoints.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = curvePoints[i - 1];
    const cpx1 = prev.x + (p.x - prev.x) * 0.4;
    const cpx2 = p.x - (p.x - prev.x) * 0.4;
    return `${acc} C ${cpx1} ${prev.y}, ${cpx2} ${p.y}, ${p.x} ${p.y}`;
  }, "");

  return (
    <div ref={ref} className="w-full space-y-6 md:space-y-8">
      {/* Title */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">A Novela</span>
        <h2 className="text-display">Emails Automáticos</h2>
      </div>

      {/* Timeline */}
      <div className="relative overflow-x-auto pb-2">
        <div className="flex gap-3 md:gap-4 min-w-[600px] md:min-w-0 md:grid md:grid-cols-5 px-2">
          {days.map((day, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center transition-all duration-500"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              {/* Envelope */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-card border border-border flex items-center justify-center mb-2 relative">
                <Mail className="text-primary" size={20} />
                <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-[8px] font-extrabold text-primary-foreground">{day.day}</span>
                </div>
              </div>

              {/* Connector line */}
              <div className="w-px h-3 bg-border" />

              {/* Card */}
              <div className="w-full max-w-[140px] rounded-lg border border-border bg-card p-3 space-y-2">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center mx-auto">
                  <day.icon className="text-primary" size={16} />
                </div>
                <p className="text-[10px] md:text-xs font-semibold text-foreground leading-tight">
                  {day.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emotional curve */}
      <div className="mx-auto max-w-2xl space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center">
          Curva emocional do leitor
        </p>
        <div className="relative h-24 md:h-32">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            {/* Grid lines */}
            <line x1="10" y1="90" x2="90" y2="90" stroke="hsl(var(--border))" strokeWidth="0.3" />
            <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--border))" strokeWidth="0.15" strokeDasharray="2 2" />
            <line x1="10" y1="18" x2="90" y2="18" stroke="hsl(var(--border))" strokeWidth="0.15" strokeDasharray="2 2" />

            {/* Gradient fill */}
            <defs>
              <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`${pathD} L ${curvePoints[curvePoints.length - 1].x} 90 L ${curvePoints[0].x} 90 Z`}
              fill="url(#curveGrad)"
              className="transition-all duration-1000"
              style={{ opacity: inView ? 1 : 0 }}
            />

            {/* Curve line */}
            <path
              d={pathD}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="transition-all duration-1000"
              style={{
                strokeDasharray: 300,
                strokeDashoffset: inView ? 0 : 300,
              }}
            />

            {/* Dots */}
            {curvePoints.map((p, i) => (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r="2"
                fill="hsl(var(--primary))"
                className="transition-all duration-500"
                style={{
                  opacity: inView ? 1 : 0,
                  transitionDelay: `${i * 200 + 500}ms`,
                }}
              />
            ))}

            {/* Labels */}
            <text x="5" y="93" fontSize="3.5" fill="hsl(var(--muted-foreground))" className="font-sans">neutro</text>
            <text x="5" y="20" fontSize="3.5" fill="hsl(var(--muted-foreground))" className="font-sans">ação</text>
          </svg>

          {/* Day labels below curve */}
          <div className="absolute bottom-0 left-[10%] right-[10%] flex justify-between">
            {days.map((d, i) => (
              <span key={i} className="text-[8px] md:text-[10px] text-muted-foreground font-medium">
                Dia {d.day}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Narration */}
      <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Essa sequência roda sozinha. Enquanto você está <span className="text-foreground font-semibold">dormindo</span>, ela está <span className="text-primary font-semibold">vendendo</span>.
      </p>
    </div>
  );
};

export default Slide06EmailsAutomaticos;
