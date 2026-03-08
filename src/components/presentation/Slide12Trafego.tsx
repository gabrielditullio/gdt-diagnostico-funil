import { DollarSign, Play, Mountain, ArrowDown, ArrowRight, Mail, Layers } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const channels = [
  { label: "Instagram/Facebook Ads", detail: "R$30–50/dia", icon: DollarSign, color: "210 80% 50%" },
  { label: "YouTube", detail: "Bastidores do Treino do Gigante", icon: Play, color: "0 72% 51%" },
  { label: "Legendários", detail: "Comunidades e eventos", icon: Mountain, color: "145 54% 42%" },
];

const Slide12Trafego = () => {
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
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Tráfego</span>
        <h2 className="text-display">Como Vão Te Encontrar</h2>
      </div>

      {/* Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
        {channels.map((ch, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-card p-4 text-center space-y-2 transition-all duration-500"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto"
              style={{ backgroundColor: `hsl(${ch.color} / 0.15)` }}
            >
              <ch.icon size={18} style={{ color: `hsl(${ch.color})` }} />
            </div>
            <p className="text-xs font-bold text-foreground">{ch.label}</p>
            <p className="text-[10px] text-muted-foreground">{ch.detail}</p>
          </div>
        ))}
      </div>

      {/* Arrows down */}
      <div className="flex justify-center">
        <div
          className="flex flex-col items-center gap-1 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "600ms" }}
        >
          <ArrowDown className="text-primary animate-bounce" size={24} />
        </div>
      </div>

      {/* Funnel flow */}
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transitionDelay: "800ms" }}
      >
        <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-center">
          <Mail size={16} className="text-primary mx-auto mb-1" />
          <p className="text-xs font-bold text-foreground">Página de Captura</p>
        </div>
        <ArrowRight className="text-muted-foreground shrink-0 rotate-90 sm:rotate-0" size={18} />
        <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-center">
          <Mail size={16} className="text-primary mx-auto mb-1" />
          <p className="text-xs font-bold text-foreground">Lista de Email</p>
        </div>
        <ArrowRight className="text-muted-foreground shrink-0 rotate-90 sm:rotate-0" size={18} />
        <div className="rounded-lg border-2 border-primary bg-primary/10 px-4 py-3 text-center">
          <Layers size={16} className="text-primary mx-auto mb-1" />
          <p className="text-xs font-bold text-primary">Escadinha</p>
        </div>
      </div>

      {/* Narration */}
      <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Hoje você pesca com a mão. Com anúncios, é uma <span className="text-foreground font-semibold">rede que trabalha 24 horas</span>.
      </p>

      {/* Highlight */}
      <div className="mx-auto max-w-sm rounded-lg border border-primary/30 bg-primary/5 p-4 text-center">
        <p className="text-sm font-bold text-foreground">
          R$30–50/dia = <span className="text-primary">menos que o custo de 1 sessão de personal.</span>
        </p>
      </div>
    </div>
  );
};

export default Slide12Trafego;
