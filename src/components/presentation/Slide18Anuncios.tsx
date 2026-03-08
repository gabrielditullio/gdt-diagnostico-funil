import { Eye, MousePointer, Mail, ShoppingCart, TrendingUp, DollarSign } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const ref = useRef<number | null>(null);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) ref.current = requestAnimationFrame(tick);
    };
    ref.current = requestAnimationFrame(tick);
    return () => { if (ref.current) cancelAnimationFrame(ref.current); };
  }, [target, duration, start]);
  return count;
}

const funnelSteps = [
  { icon: DollarSign, label: "Investimento", value: 50, prefix: "R$", suffix: "/dia" },
  { icon: Eye, label: "Pessoas veem", value: 5000, prefix: "", suffix: "" },
  { icon: MousePointer, label: "Clicam", value: 150, prefix: "", suffix: "" },
  { icon: Mail, label: "Dão email", value: 50, prefix: "", suffix: "" },
  { icon: ShoppingCart, label: "Compram (Mês 1)", value: 3, prefix: "", suffix: "" },
  { icon: TrendingUp, label: "Compram (6 meses)", value: 10, prefix: "", suffix: "" },
];

const Slide18Anuncios = () => {
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

  return (
    <div ref={ref} className="w-full space-y-6 md:space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">O Outdoor Digital</span>
        <h2 className="text-display">Anúncios</h2>
      </div>

      {/* Funnel */}
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {funnelSteps.map((step, i) => (
            <FunnelStep key={i} step={step} index={i} inView={inView} isLast={i === funnelSteps.length - 1} />
          ))}
        </div>
      </div>

      {/* ROI card */}
      <div className="mx-auto max-w-sm rounded-xl border-2 border-primary bg-primary/5 p-5 text-center space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Retorno</p>
        <div className="flex items-center justify-center gap-3">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Investe</p>
            <p className="text-xl font-extrabold text-foreground">R$1.500</p>
          </div>
          <TrendingUp className="text-primary" size={24} />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Volta</p>
            <p className="text-xl font-extrabold text-primary">R$3.000–5.000</p>
          </div>
        </div>
      </div>

      <p className="text-body-lg text-center max-w-2xl mx-auto">
        <span className="text-foreground font-semibold">É matemática, não sorte.</span>
      </p>

      <div className="mx-auto max-w-sm rounded-lg border border-border bg-card p-3 text-center">
        <p className="text-sm text-muted-foreground">
          R$50/dia em ads = preço de <span className="text-primary font-semibold">1 sessão de personal</span>. Mas trabalha <span className="text-foreground font-semibold">24h</span>.
        </p>
      </div>
    </div>
  );
};

function FunnelStep({ step, index, inView, isLast }: { step: typeof funnelSteps[0]; index: number; inView: boolean; isLast: boolean }) {
  const count = useCountUp(step.value, 1800, inView);

  return (
    <>
      <div
        className="flex flex-col items-center text-center w-20 md:w-24 transition-all duration-500"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(15px)",
          transitionDelay: `${index * 150}ms`,
        }}
      >
        <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center mb-1">
          <step.icon size={16} className="text-primary" />
        </div>
        <p className="text-lg md:text-xl font-extrabold text-foreground">
          {step.prefix}{count.toLocaleString("pt-BR")}{step.suffix}
        </p>
        <p className="text-[9px] text-muted-foreground font-medium">{step.label}</p>
      </div>
      {!isLast && (
        <div className="text-muted-foreground">→</div>
      )}
    </>
  );
}

export default Slide18Anuncios;
