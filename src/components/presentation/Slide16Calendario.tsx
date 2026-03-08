import { Mountain, ArrowRight, Megaphone, Dumbbell, MessageSquare, RotateCcw } from "lucide-react";
import AnimateOnView from "./AnimateOnView";

const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
const retreatMonths = [0, 2, 4, 6, 8, 10];

const cycle = [
  { icon: Megaphone, label: "Retiro Anunciado" },
  { icon: Dumbbell, label: "Campanha Trekking Fit" },
  { icon: Mountain, label: "Preparação" },
  { icon: Mountain, label: "Retiro" },
  { icon: MessageSquare, label: "Depoimentos" },
  { icon: RotateCcw, label: "Próximo Retiro" },
];

const Slide16Calendario = () => {
  return (
    <div className="w-full space-y-5 md:space-y-8">
      <AnimateOnView>
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Calendário de Vendas</span>
          <h2 className="text-display">Legendários = Lançamento</h2>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={100}>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-1.5 md:gap-2 max-w-2xl mx-auto">
          {months.map((m, i) => {
            const isRetreat = retreatMonths.includes(i);
            const campaignStart = retreatMonths.includes(i + 2) || retreatMonths.includes(i + 2 - 12);
            return (
              <div
                key={i}
                className={`card-hover rounded-lg border p-2 text-center space-y-1 ${
                  isRetreat ? "border-primary/40 bg-primary/10"
                    : campaignStart ? "border-gold/30 bg-gold/5"
                    : "border-border bg-card"
                }`}
              >
                <p className="text-[9px] font-bold text-muted-foreground uppercase">{m}</p>
                {isRetreat && (
                  <>
                    <Mountain size={14} className="text-primary mx-auto" />
                    <p className="text-[6px] font-bold text-primary">RETIRO</p>
                  </>
                )}
                {campaignStart && !isRetreat && (
                  <>
                    <Megaphone size={12} className="text-gold mx-auto" />
                    <p className="text-[6px] font-bold text-gold leading-tight">Campanha</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </AnimateOnView>

      <AnimateOnView delay={200}>
        <div className="max-w-xl mx-auto">
          <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center mb-2">
            Ciclo perpétuo
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1">
            {cycle.map((step, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="flex items-center gap-1 rounded-md border border-border bg-card px-2 py-1 card-hover">
                  <step.icon size={10} className="text-primary" />
                  <span className="text-[8px] font-semibold text-foreground whitespace-nowrap">{step.label}</span>
                </div>
                {i < cycle.length - 1 && <ArrowRight size={10} className="text-muted-foreground shrink-0" />}
                {i === cycle.length - 1 && <RotateCcw size={10} className="text-primary shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={300}>
        <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Cada retiro anunciado é um <span className="text-primary font-semibold">lançamento</span> sem precisar criar produto novo.
        </p>
      </AnimateOnView>
    </div>
  );
};

export default Slide16Calendario;
