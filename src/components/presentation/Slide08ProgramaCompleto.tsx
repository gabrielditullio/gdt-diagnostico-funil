import { Shield, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stackItems = [
  { name: "Protocolo GG completo via App MFIT", value: "R$997" },
  { name: "Vídeos demonstrativos de cada exercício", value: "R$497" },
  { name: "Módulo de Mobilidade e Performance", value: "R$297" },
  { name: "Divisão de Elite por grupo muscular", value: "R$197" },
];

const Slide08ProgramaCompleto = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [visibleItems, setVisibleItems] = useState(0);

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

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleItems(i);
      if (i >= stackItems.length + 2) clearInterval(interval); // +2 for total & price reveal
    }, 500);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div ref={ref} className="w-full space-y-6 md:space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Onde o Resultado Acontece</span>
        <h2 className="text-display">O Programa Completo</h2>
      </div>

      {/* Value stack */}
      <div className="mx-auto max-w-lg space-y-2">
        {stackItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card px-4 py-3 transition-all duration-500"
            style={{
              opacity: i < visibleItems ? 1 : 0.15,
              transform: i < visibleItems ? "translateX(0)" : "translateX(-20px)",
              transitionDelay: `${i * 100}ms`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Check size={12} className="text-primary" />
              </div>
              <span className="text-xs md:text-sm font-medium text-foreground">{item.name}</span>
            </div>
            <span className="text-sm font-bold text-muted-foreground line-through shrink-0">{item.value}</span>
          </div>
        ))}

        {/* Divider */}
        <div className="border-t border-border my-2" />

        {/* Total riscado */}
        <div
          className="flex items-center justify-between px-4 py-2 transition-all duration-500"
          style={{
            opacity: visibleItems > stackItems.length ? 1 : 0,
            transform: visibleItems > stackItems.length ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <span className="text-sm font-bold text-muted-foreground">Valor total:</span>
          <span className="text-lg font-extrabold text-destructive line-through">R$1.988</span>
        </div>

        {/* Real price */}
        <div
          className="rounded-xl border-2 border-primary bg-primary/5 p-5 text-center transition-all duration-700 relative overflow-hidden"
          style={{
            opacity: visibleItems > stackItems.length + 1 ? 1 : 0,
            transform: visibleItems > stackItems.length + 1 ? "scale(1)" : "scale(0.9)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Preço real</p>
          <p className="text-4xl md:text-5xl font-extrabold text-primary">R$297</p>

          {/* Guarantee badge */}
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-success/10 border border-success/30 rounded-full px-2 py-1">
            <Shield size={12} className="text-success" />
            <span className="text-[9px] font-bold text-success uppercase">7 dias</span>
          </div>
        </div>
      </div>

      {/* Narration */}
      <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
        A pessoa assiste a aula, aprende, e quando vê o valor de tudo junto, o preço de <span className="text-primary font-semibold">R$297</span> parece muito pouco.
      </p>
    </div>
  );
};

export default Slide08ProgramaCompleto;
