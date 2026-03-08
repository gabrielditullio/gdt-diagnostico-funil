import { Clock, Unlock, Zap, TrendingUp, Expand } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const phases = [
  {
    id: 0,
    label: "FASE 0",
    period: "Sem 1–2",
    title: "DESBLOQUEIO",
    icon: Unlock,
    time: "2 semanas",
    color: "24 60% 50%",
    tags: ["Reativar site", "Criar 2 PDFs grátis", "2 páginas de captura", "5 emails automáticos", "Abrir quiz Trekking"],
  },
  {
    id: 1,
    label: "FASE 1",
    period: "Mês 1–2",
    title: "LIGAR A MÁQUINA",
    icon: Zap,
    time: "2 meses",
    color: "24 80% 45%",
    tags: ["Anúncios R$30–50/dia", "Order bumps nos eBooks", "Emails semanais", "Primeiros vídeos YouTube"],
  },
  {
    id: 2,
    label: "FASE 2",
    period: "Mês 3–4",
    title: "ACELERAR",
    icon: TrendingUp,
    time: "2 meses",
    color: "24 100% 42%",
    tags: ["Webinar Protocolo GG", "Página Consultoria VIP", "Escalar ads"],
  },
  {
    id: 3,
    label: "FASE 3",
    period: "Mês 5–6",
    title: "EXPANDIR",
    icon: Expand,
    time: "2 meses",
    color: "24 100% 38%",
    tags: ["Comunidade GG", "Integrar Camila", "Ads R$300–500/dia"],
  },
];

const Slide20Roadmap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full space-y-6 md:space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Ordem de Execução</span>
        <h2 className="text-display">O Roadmap</h2>
      </div>

      <div className="max-w-2xl mx-auto relative">
        {/* Track line */}
        <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-6">
          {phases.map((phase, i) => (
            <div
              key={phase.id}
              className="relative pl-12 md:pl-14 transition-all duration-600"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-20px)",
                transitionDelay: `${i * 200}ms`,
                transitionDuration: "500ms",
              }}
            >
              {/* Station dot */}
              <div
                className="absolute left-3 md:left-4 top-3 w-4 h-4 rounded-full border-2"
                style={{
                  borderColor: `hsl(${phase.color})`,
                  backgroundColor: `hsl(${phase.color} / 0.3)`,
                }}
              />

              <div
                className="rounded-xl border p-4 space-y-3"
                style={{
                  borderColor: `hsl(${phase.color} / 0.3)`,
                  backgroundColor: `hsl(${phase.color} / 0.05)`,
                }}
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <phase.icon size={16} style={{ color: `hsl(${phase.color})` }} />
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: `hsl(${phase.color})` }}>
                      {phase.label}
                    </span>
                    <span className="text-[10px] text-muted-foreground">({phase.period})</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock size={10} />
                    <span className="text-[9px] font-medium">{phase.time}</span>
                  </div>
                </div>

                <p className="text-sm font-extrabold text-foreground">{phase.title}</p>

                <div className="flex flex-wrap gap-1.5">
                  {phase.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[9px] font-medium rounded-md px-2 py-1 border"
                      style={{
                        borderColor: `hsl(${phase.color} / 0.2)`,
                        backgroundColor: `hsl(${phase.color} / 0.1)`,
                        color: `hsl(${phase.color})`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide20Roadmap;
