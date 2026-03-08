import { TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const months = ["Mês 1", "Mês 2", "Mês 3", "Mês 4", "Mês 5", "Mês 6"];

const data = [
  { frontend: 1000, programa: 0, vip: 0, comunidade: 0, ads: 3000 },
  { frontend: 3000, programa: 0, vip: 0, comunidade: 0, ads: 4000 },
  { frontend: 4000, programa: 4000, vip: 0, comunidade: 2000, ads: 6000 },
  { frontend: 5000, programa: 7000, vip: 4000, comunidade: 4000, ads: 8000 },
  { frontend: 6000, programa: 12000, vip: 8000, comunidade: 9000, ads: 10000 },
  { frontend: 10000, programa: 18000, vip: 15000, comunidade: 7000, ads: 12000 },
];

const categories = [
  { key: "frontend" as const, label: "Frontend", color: "24 100% 42%" },
  { key: "programa" as const, label: "Programa", color: "43 74% 49%" },
  { key: "vip" as const, label: "Consultoria VIP", color: "4 76% 46%" },
  { key: "comunidade" as const, label: "Comunidade", color: "270 50% 50%" },
];

const maxTotal = Math.max(...data.map(d => d.frontend + d.programa + d.vip + d.comunidade));

const Slide19Numeros = () => {
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
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Projeção Financeira</span>
        <h2 className="text-display">Os Números</h2>
      </div>

      {/* Chart */}
      <div className="max-w-2xl mx-auto">
        <div className="flex items-end gap-2 md:gap-4 h-52 md:h-64 relative">
          {/* Y axis label */}
          <div className="absolute -left-1 top-0 text-[8px] text-muted-foreground font-medium">
            R${(maxTotal / 1000).toFixed(0)}K
          </div>
          <div className="absolute -left-1 bottom-6 text-[8px] text-muted-foreground font-medium">R$0</div>

          {data.map((d, i) => {
            const total = d.frontend + d.programa + d.vip + d.comunidade;
            const barHeight = (total / maxTotal) * 100;
            const adsHeight = (d.ads / maxTotal) * 100;

            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1 relative h-full justify-end">
                {/* Turning point annotation */}
                {i === 2 && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                    <TrendingUp size={14} className="text-primary" />
                    <span className="text-[7px] font-bold text-primary whitespace-nowrap">PONTO DE VIRADA</span>
                  </div>
                )}

                {/* Total label */}
                <span className="text-[8px] md:text-[10px] font-bold text-foreground mb-0.5">
                  R${(total / 1000).toFixed(0)}K
                </span>

                {/* Stacked bar */}
                <div
                  className="w-full rounded-t-md overflow-hidden flex flex-col-reverse transition-all duration-1000 ease-out"
                  style={{
                    height: inView ? `${barHeight}%` : "0%",
                    transitionDelay: `${i * 150}ms`,
                  }}
                >
                  {categories.map(cat => {
                    const segH = (d[cat.key] / total) * 100;
                    return (
                      <div
                        key={cat.key}
                        style={{
                          height: `${segH}%`,
                          backgroundColor: `hsl(${cat.color})`,
                        }}
                      />
                    );
                  })}
                </div>

                {/* Ads dotted line */}
                <div
                  className="absolute w-full border-t-2 border-dashed border-muted-foreground/40 transition-all duration-1000"
                  style={{
                    bottom: inView ? `${adsHeight}%` : "0%",
                    transitionDelay: `${i * 150 + 500}ms`,
                  }}
                />

                {/* Month label */}
                <span className="text-[8px] md:text-[10px] font-medium text-muted-foreground mt-1">{months[i]}</span>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          {categories.map(cat => (
            <div key={cat.key} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: `hsl(${cat.color})` }} />
              <span className="text-[9px] font-medium text-muted-foreground">{cat.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-1.5">
            <div className="w-4 border-t-2 border-dashed border-muted-foreground/40" />
            <span className="text-[9px] font-medium text-muted-foreground">Investimento Ads</span>
          </div>
        </div>
      </div>

      <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
        A partir do mês 3, cada dia que passa a máquina fica <span className="text-primary font-semibold">MAIS forte</span>.
      </p>

      {/* Disclaimer */}
      <p className="text-[9px] text-muted-foreground/60 text-center max-w-lg mx-auto leading-relaxed">
        Projeção conservadora baseada em benchmarks do mercado fitness brasileiro. Estes NÃO são resultados garantidos — são metas baseadas em dados de mercado. Resultados dependem de execução.
      </p>
    </div>
  );
};

export default Slide19Numeros;
