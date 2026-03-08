import { Lock, CheckCircle, ArrowRight, X, Zap, Clock, TrendingUp } from "lucide-react";

const Slide15TrekkingFit = () => {
  return (
    <div className="w-full space-y-6 md:space-y-8">
      {/* Quick win badge */}
      <div className="flex justify-center">
        <div className="rounded-full border-2 border-primary bg-primary/10 px-5 py-1.5">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary">⚡ Vitória Rápida</span>
        </div>
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-display">Abrir o Trekking Fit</h2>
      </div>

      {/* Before / After */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {/* ANTES */}
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5 space-y-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-background/40 pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-destructive">Antes</p>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-xl bg-destructive/15 flex items-center justify-center">
                <Lock className="text-destructive" size={24} />
              </div>
              <p className="text-sm font-bold text-foreground">Quiz de Qualificação</p>

              <div className="flex items-center gap-2">
                <ArrowRight size={14} className="text-destructive" />
                <X size={18} className="text-destructive" />
              </div>

              <div className="rounded-lg border border-destructive/20 bg-destructive/10 px-3 py-2">
                <p className="text-[10px] text-destructive font-medium text-center">
                  "Não conhece o Legendários?<br />Não pode comprar."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DEPOIS */}
        <div className="rounded-xl border border-success/30 bg-success/5 p-5 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-success">Depois</p>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-xl bg-success/15 flex items-center justify-center">
              <CheckCircle className="text-success" size={24} />
            </div>
            <p className="text-sm font-bold text-foreground">Quiz Aberto</p>

            <div className="flex items-center gap-2">
              <ArrowRight size={14} className="text-success" />
              <CheckCircle size={18} className="text-success" />
            </div>

            <div className="rounded-lg border border-success/20 bg-success/10 px-3 py-2">
              <p className="text-[10px] text-success font-medium text-center">
                "Todos os caminhos<br />levam à compra."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {[
          { icon: Zap, label: "Custo: R$0", color: "primary" },
          { icon: Clock, label: "Tempo: 1 hora", color: "primary" },
          { icon: TrendingUp, label: "Impacto: até 5× mais vendas", color: "primary" },
        ].map((b, i) => (
          <div key={i} className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5">
            <b.icon size={14} className="text-primary" />
            <span className="text-xs font-bold text-foreground">{b.label}</span>
          </div>
        ))}
      </div>

      <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Tem <span className="text-primary font-semibold">UMA</span> coisa que dá pra fazer <span className="text-foreground font-semibold">AMANHÃ</span> e já mudar o cenário.
      </p>
    </div>
  );
};

export default Slide15TrekkingFit;
