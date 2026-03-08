import { MessageCircle, Video, Trophy, Users, Calculator } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const communityPosts = [
  { title: "Treino do Mês: Peito Denso", type: "📋 Programa", time: "2h" },
  { title: "Live Q&A: Quinta 20h", type: "🔴 Ao vivo", time: "5h" },
  { title: "Ranking do Desafio Ombro Blindado", type: "🏆 Desafio", time: "1d" },
];

const revenueData = [
  { label: "Mês 1", value: 5000, height: 25 },
  { label: "Mês 3", value: 10000, height: 50 },
  { label: "Mês 6", value: 15000, height: 75 },
  { label: "Mês 12", value: 20000, height: 100 },
];

const Slide10ComunidadeGG = () => {
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
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Dinheiro Todo Mês</span>
        <h2 className="text-display">Comunidade GG</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Community mockup */}
        <div className="rounded-xl border border-border bg-card p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle size={16} className="text-primary" />
              <span className="text-sm font-bold text-foreground">Comunidade GG</span>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-6 h-6 rounded-full bg-muted border-2 border-card flex items-center justify-center">
                  <span className="text-[8px] font-bold text-muted-foreground">{String.fromCharCode(64 + i)}</span>
                </div>
              ))}
              <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center">
                <span className="text-[7px] font-bold text-primary">+89</span>
              </div>
            </div>
          </div>

          {communityPosts.map((post, i) => (
            <div key={i} className="rounded-lg border border-border bg-background p-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-foreground">{post.title}</p>
                <p className="text-[10px] text-muted-foreground">{post.type}</p>
              </div>
              <span className="text-[10px] text-muted-foreground">{post.time}</span>
            </div>
          ))}
        </div>

        {/* Revenue chart */}
        <div className="rounded-xl border border-border bg-card p-4 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-center">Receita Recorrente</p>
          <div className="flex items-end justify-around gap-2 h-36">
            {revenueData.map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-1 flex-1">
                <span className="text-[10px] font-bold text-foreground">
                  R${(d.value / 1000).toFixed(0)}K
                </span>
                <div
                  className="w-full max-w-[40px] rounded-t-md bg-primary transition-all duration-1000 ease-out"
                  style={{
                    height: inView ? `${d.height}%` : "0%",
                    transitionDelay: `${i * 200}ms`,
                  }}
                />
                <span className="text-[9px] text-muted-foreground font-medium">{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calculation */}
      <div className="mx-auto max-w-md rounded-xl border-2 border-primary bg-primary/5 p-5 text-center">
        <Calculator className="mx-auto text-primary mb-2" size={24} />
        <p className="text-sm text-muted-foreground mb-1">300 membros × R$47/mês</p>
        <p className="text-3xl md:text-4xl font-extrabold text-primary">R$14.100</p>
        <p className="text-sm font-bold text-foreground mt-1">TODO MÊS</p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
        <div className="rounded-xl border border-border bg-card p-4 text-center space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Plano Base</p>
          <p className="text-2xl font-extrabold text-foreground">R$47<span className="text-sm font-medium text-muted-foreground">/mês</span></p>
          <p className="text-[10px] text-muted-foreground">Treinos + Lives + Desafios</p>
        </div>
        <div className="rounded-xl border-2 border-primary bg-primary/5 p-4 text-center space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Plano Completo</p>
          <p className="text-2xl font-extrabold text-foreground">R$97<span className="text-sm font-medium text-muted-foreground">/mês</span></p>
          <p className="text-[10px] text-muted-foreground">Tudo + Plano alimentar da Camila</p>
        </div>
      </div>

      <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Sem lançar nada novo, sem campanha, sem stress.
      </p>
    </div>
  );
};

export default Slide10ComunidadeGG;
