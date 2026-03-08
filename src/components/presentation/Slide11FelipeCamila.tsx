import { Dumbbell, UtensilsCrossed, Plus, Equal, Gift, Zap, Crown, Repeat, Check } from "lucide-react";
import AnimateOnView from "./AnimateOnView";

const stairSteps = [
  { label: "GRÁTIS", icon: Gift, camila: false },
  { label: "ENTRADA", icon: Zap, camila: true },
  { label: "PROGRAMA", icon: Zap, camila: true },
  { label: "PREMIUM", icon: Crown, camila: true },
  { label: "RECORRENTE", icon: Repeat, camila: true },
];

const Slide11FelipeCamila = () => {
  return (
    <div className="w-full space-y-5 md:space-y-8">
      <AnimateOnView>
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Dupla Imbatível</span>
          <h2 className="text-display">Felipe + Camila</h2>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={100}>
        <div className="flex items-center justify-center gap-2 md:gap-6 flex-wrap">
          <div className="w-28 md:w-44 rounded-xl border border-border bg-card p-3 md:p-5 text-center space-y-2 card-hover">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto">
              <Dumbbell className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-xs md:text-sm font-extrabold text-foreground">Felipe</p>
              <p className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-primary">Treino</p>
            </div>
          </div>

          <Plus className="text-muted-foreground shrink-0" size={18} />

          <div className="w-28 md:w-44 rounded-xl border border-border bg-card p-3 md:p-5 text-center space-y-2 card-hover">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto">
              <UtensilsCrossed className="text-success" size={20} />
            </div>
            <div>
              <p className="text-xs md:text-sm font-extrabold text-foreground">Camila</p>
              <p className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-success">Nutrição</p>
            </div>
          </div>

          <Equal className="text-muted-foreground shrink-0" size={18} />

          <div className="w-32 md:w-48 rounded-xl border-2 border-primary bg-primary/5 p-3 md:p-5 text-center card-hover">
            <p className="text-xs md:text-sm font-extrabold text-primary">Método GG</p>
            <p className="text-[10px] text-muted-foreground">Completo</p>
          </div>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={200}>
        <div className="mx-auto max-w-sm space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center mb-2">
            Onde a Camila aparece na escadinha
          </p>
          {stairSteps.map((step, i) => (
            <div
              key={i}
              className={`card-hover flex items-center gap-2 rounded-md px-3 py-2 border text-xs ${
                step.camila ? "border-success/30 bg-success/5" : "border-border bg-card"
              }`}
              style={{ marginLeft: `${i * 8}px` }}
            >
              <step.icon size={12} className={step.camila ? "text-success" : "text-muted-foreground"} />
              <span className="font-bold text-foreground flex-1">{step.label}</span>
              {step.camila && (
                <span className="text-[8px] font-bold text-success flex items-center gap-1">
                  <UtensilsCrossed size={8} /> Camila
                </span>
              )}
            </div>
          ))}
        </div>
      </AnimateOnView>

      <AnimateOnView delay={300}>
        <div className="mx-auto max-w-md rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 p-3 md:p-4 space-y-2">
          <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Cross-sell no checkout</p>
          <div className="rounded-lg border border-border bg-card p-3 flex items-start gap-3 card-hover">
            <div className="w-4 h-4 rounded border-2 border-primary bg-primary flex items-center justify-center shrink-0 mt-0.5">
              <Check size={10} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs font-semibold text-foreground">
                Adicionar Plano Alimentar por Camila Marinho
              </p>
              <p className="text-[9px] text-muted-foreground">Nutricionista CRN 21.029</p>
              <p className="text-sm font-extrabold text-primary mt-0.5">+ R$97</p>
            </div>
          </div>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={400}>
        <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Qualquer pessoa que treina sabe que resultado é <span className="text-foreground font-semibold">treino + dieta</span>. Vocês são a <span className="text-primary font-semibold">solução completa</span>.
        </p>
      </AnimateOnView>
    </div>
  );
};

export default Slide11FelipeCamila;
