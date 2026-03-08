import { Dumbbell, UtensilsCrossed, Plus, Equal, Gift, Zap, Crown, Repeat, Check } from "lucide-react";

const stairSteps = [
  { label: "GRÁTIS", icon: Gift, camila: false },
  { label: "ENTRADA", icon: Zap, camila: true },
  { label: "PROGRAMA", icon: Zap, camila: true },
  { label: "PREMIUM", icon: Crown, camila: true },
  { label: "RECORRENTE", icon: Repeat, camila: true },
];

const Slide11FelipeCamila = () => {
  return (
    <div className="w-full space-y-6 md:space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Dupla Imbatível</span>
        <h2 className="text-display">Felipe + Camila</h2>
      </div>

      {/* Duo visual */}
      <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
        {/* Felipe */}
        <div className="w-36 md:w-44 rounded-xl border border-border bg-card p-5 text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto">
            <Dumbbell className="text-primary" size={28} />
          </div>
          <div>
            <p className="text-sm font-extrabold text-foreground">Felipe</p>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Treino</p>
          </div>
        </div>

        <Plus className="text-muted-foreground shrink-0" size={24} />

        {/* Camila */}
        <div className="w-36 md:w-44 rounded-xl border border-border bg-card p-5 text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto">
            <UtensilsCrossed className="text-success" size={28} />
          </div>
          <div>
            <p className="text-sm font-extrabold text-foreground">Camila</p>
            <p className="text-xs font-bold uppercase tracking-widest text-success">Nutrição</p>
          </div>
        </div>

        <Equal className="text-muted-foreground shrink-0" size={24} />

        {/* Result */}
        <div className="w-40 md:w-48 rounded-xl border-2 border-primary bg-primary/5 p-5 text-center">
          <p className="text-sm font-extrabold text-primary">Método GG</p>
          <p className="text-xs text-muted-foreground">Completo</p>
        </div>
      </div>

      {/* Mini staircase showing Camila's presence */}
      <div className="mx-auto max-w-sm space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center mb-3">
          Onde a Camila aparece na escadinha
        </p>
        {stairSteps.map((step, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 rounded-md px-3 py-2 border ${
              step.camila
                ? "border-success/30 bg-success/5"
                : "border-border bg-card"
            }`}
            style={{ marginLeft: `${i * 12}px` }}
          >
            <step.icon size={14} className={step.camila ? "text-success" : "text-muted-foreground"} />
            <span className="text-xs font-bold text-foreground flex-1">{step.label}</span>
            {step.camila && (
              <span className="text-[9px] font-bold text-success flex items-center gap-1">
                <UtensilsCrossed size={10} /> Camila
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Cross-sell card */}
      <div className="mx-auto max-w-md rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 p-4 space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Cross-sell no checkout</p>
        <div className="rounded-lg border border-border bg-card p-3 flex items-start gap-3">
          <div className="w-5 h-5 rounded border-2 border-primary bg-primary flex items-center justify-center shrink-0 mt-0.5">
            <Check size={12} className="text-primary-foreground" />
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">
              Adicionar Plano Alimentar por Camila Marinho
            </p>
            <p className="text-[10px] text-muted-foreground">Nutricionista CRN 21.029</p>
            <p className="text-sm font-extrabold text-primary mt-1">+ R$97</p>
          </div>
        </div>
      </div>

      <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Qualquer pessoa que treina sabe que resultado é <span className="text-foreground font-semibold">treino + dieta</span>. Vocês são a <span className="text-primary font-semibold">solução completa</span>.
      </p>
    </div>
  );
};

export default Slide11FelipeCamila;
