import { Users, Dumbbell, Mountain, DollarSign, Play, UtensilsCrossed, Gift, BookOpen, Zap, Crown, Repeat, Target } from "lucide-react";
import AnimateOnView from "./AnimateOnView";

const steps = [
  { label: "GRÁTIS", price: "R$0", icon: Gift },
  { label: "ENTRADA", price: "R$37–47", icon: BookOpen },
  { label: "PROGRAMA", price: "R$297", icon: Zap },
  { label: "PREMIUM", price: "R$2.997", icon: Crown },
  { label: "RECORRENTE", price: "R$47–97/mês", icon: Repeat },
];

const Slide22Resumo = () => {
  return (
    <div className="w-full space-y-4 md:space-y-6">
      <AnimateOnView>
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Tudo Numa Tela</span>
          <h2 className="text-subtitle md:text-display">O Sistema Completo</h2>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={100}>
        <div className="max-w-3xl mx-auto relative">
          <div className="flex justify-center gap-3 mb-2">
            <div className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1">
              <Dumbbell size={10} className="text-primary" />
              <span className="text-[8px] font-bold text-foreground">Público GG</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-success/30 bg-success/5 px-2.5 py-1">
              <Mountain size={10} className="text-success" />
              <span className="text-[8px] font-bold text-foreground">Público Trekking</span>
            </div>
          </div>

          <div className="flex justify-center mb-1.5">
            <span className="text-muted-foreground text-[10px]">↓</span>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col gap-1 justify-center shrink-0">
              {[
                { icon: DollarSign, label: "Ads", color: "210 80% 50%" },
                { icon: Play, label: "YouTube", color: "0 72% 51%" },
                { icon: Mountain, label: "Legendários", color: "145 54% 42%" },
              ].map((ch, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className="w-5 h-5 rounded flex items-center justify-center" style={{ backgroundColor: `hsl(${ch.color} / 0.15)` }}>
                    <ch.icon size={8} style={{ color: `hsl(${ch.color})` }} />
                  </div>
                  <span className="text-[6px] font-bold text-muted-foreground">{ch.label}</span>
                  <span className="text-muted-foreground text-[7px]">→</span>
                </div>
              ))}
            </div>

            <div className="flex-1 space-y-1">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="card-hover flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1"
                  style={{ marginLeft: `${i * 6}px` }}
                >
                  <step.icon size={8} className="text-primary shrink-0" />
                  <span className="text-[7px] font-bold text-primary">{step.label}</span>
                  <span className="text-[7px] font-medium text-foreground flex-1 truncate">{step.price}</span>
                  {i >= 1 && <UtensilsCrossed size={6} className="text-success shrink-0" />}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-1 mt-1 mr-2">
            <UtensilsCrossed size={6} className="text-success" />
            <span className="text-[6px] text-muted-foreground">= Camila presente</span>
          </div>

          <div className="flex justify-center mt-2">
            <span className="text-muted-foreground text-[10px]">↓</span>
          </div>
          <div className="mx-auto max-w-[200px] rounded-lg border-2 border-primary bg-primary/10 p-2.5 text-center mt-1.5">
            <Target size={14} className="text-primary mx-auto mb-0.5" />
            <p className="text-base font-extrabold text-primary">R$50K/mês</p>
            <p className="text-[8px] text-muted-foreground font-medium">Meta Mês 6</p>
          </div>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={200}>
        <p className="text-xs text-muted-foreground text-center">Resumindo tudo em uma imagem.</p>
      </AnimateOnView>
    </div>
  );
};

export default Slide22Resumo;
