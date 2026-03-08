import { Users, Dumbbell, Mountain, DollarSign, Play, UtensilsCrossed, Gift, BookOpen, Zap, Crown, Repeat, Target } from "lucide-react";

const steps = [
  { label: "GRÁTIS", price: "R$0", icon: Gift },
  { label: "ENTRADA", price: "R$37–47", icon: BookOpen },
  { label: "PROGRAMA", price: "R$297", icon: Zap },
  { label: "PREMIUM", price: "R$2.997", icon: Crown },
  { label: "RECORRENTE", price: "R$47–97/mês", icon: Repeat },
];

const Slide22Resumo = () => {
  return (
    <div className="w-full space-y-5 md:space-y-6">
      <div className="text-center space-y-1">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Tudo Numa Tela</span>
        <h2 className="text-subtitle md:text-display">O Sistema Completo</h2>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Two audiences entering */}
        <div className="flex justify-center gap-4 mb-3">
          <div className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-1">
            <Dumbbell size={12} className="text-primary" />
            <span className="text-[9px] font-bold text-foreground">Público GG</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-success/30 bg-success/5 px-3 py-1">
            <Mountain size={12} className="text-success" />
            <span className="text-[9px] font-bold text-foreground">Público Trekking</span>
          </div>
        </div>

        {/* Arrows down */}
        <div className="flex justify-center mb-2">
          <span className="text-muted-foreground text-xs">↓</span>
        </div>

        {/* Traffic + Escadinha layout */}
        <div className="flex gap-3">
          {/* Traffic channels - left side */}
          <div className="flex flex-col gap-1.5 justify-center shrink-0">
            {[
              { icon: DollarSign, label: "Ads", color: "210 80% 50%" },
              { icon: Play, label: "YouTube", color: "0 72% 51%" },
              { icon: Mountain, label: "Legendários", color: "145 54% 42%" },
            ].map((ch, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: `hsl(${ch.color} / 0.15)` }}>
                  <ch.icon size={10} style={{ color: `hsl(${ch.color})` }} />
                </div>
                <span className="text-[7px] font-bold text-muted-foreground">{ch.label}</span>
                <span className="text-muted-foreground text-[8px]">→</span>
              </div>
            ))}
          </div>

          {/* Escadinha - center */}
          <div className="flex-1 space-y-1">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5"
                style={{ marginLeft: `${i * 8}px` }}
              >
                <step.icon size={10} className="text-primary shrink-0" />
                <span className="text-[8px] font-bold text-primary">{step.label}</span>
                <span className="text-[8px] font-medium text-foreground flex-1 truncate">{step.price}</span>
                {i >= 1 && (
                  <UtensilsCrossed size={8} className="text-success shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Camila legend */}
        <div className="flex items-center justify-end gap-1 mt-1 mr-2">
          <UtensilsCrossed size={8} className="text-success" />
          <span className="text-[7px] text-muted-foreground">= Camila presente</span>
        </div>

        {/* Goal */}
        <div className="flex justify-center mt-3">
          <span className="text-muted-foreground text-xs">↓</span>
        </div>
        <div className="mx-auto max-w-xs rounded-lg border-2 border-primary bg-primary/10 p-3 text-center mt-2">
          <Target size={16} className="text-primary mx-auto mb-1" />
          <p className="text-lg font-extrabold text-primary">R$50K/mês</p>
          <p className="text-[10px] text-muted-foreground font-medium">Meta Mês 6</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-center">Resumindo tudo em uma imagem.</p>
    </div>
  );
};

export default Slide22Resumo;
