import { CheckCircle, XCircle, GitFork } from "lucide-react";
import AnimateOnView from "./AnimateOnView";

const faz = [
  "Escada completa",
  "50K/mês no mês 6",
  "Comunidade crescendo",
  "YouTube bombando",
  "Dono do mercado Legendários",
];

const naoFaz = [
  "Mesmos 49K seguidores em 1 ano",
  "Zero emails",
  "Outro personal planta a bandeira",
  "Site continua fora do ar",
  "Oportunidade Léo Santana desperdiçada",
];

const Slide21Risco = () => {
  return (
    <div className="w-full space-y-5 md:space-y-8">
      <AnimateOnView>
        <div className="text-center">
          <h2 className="text-display">O Risco de Não Fazer Nada</h2>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={100}>
        <div className="flex justify-center">
          <GitFork className="text-muted-foreground rotate-180" size={28} />
        </div>
      </AnimateOnView>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
        <AnimateOnView delay={200} direction="left">
          <div className="rounded-xl border border-success/30 bg-success/5 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-success" />
              <span className="text-xs font-extrabold text-success uppercase tracking-wider">Cenário A — Faz</span>
            </div>
            {faz.map((item, i) => (
              <div key={i} className="card-hover flex items-center gap-2 rounded-md bg-success/10 border border-success/15 px-3 py-1.5">
                <CheckCircle size={10} className="text-success shrink-0" />
                <span className="text-[10px] md:text-xs font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </AnimateOnView>

        <AnimateOnView delay={300} direction="right">
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 space-y-2 opacity-70">
            <div className="flex items-center gap-2">
              <XCircle size={16} className="text-destructive" />
              <span className="text-xs font-extrabold text-destructive uppercase tracking-wider">Cenário B — Não Faz</span>
            </div>
            {naoFaz.map((item, i) => (
              <div key={i} className="card-hover flex items-center gap-2 rounded-md bg-destructive/10 border border-destructive/15 px-3 py-1.5">
                <XCircle size={10} className="text-destructive shrink-0" />
                <span className="text-[10px] md:text-xs font-medium text-foreground/70">{item}</span>
              </div>
            ))}
          </div>
        </AnimateOnView>
      </div>

      <AnimateOnView delay={400}>
        <p className="text-body-lg text-center max-w-2xl mx-auto">
          <span className="text-muted-foreground">A pergunta não é</span> <span className="text-foreground font-semibold">"posso fazer isso?"</span>
          <br />
          <span className="text-muted-foreground">É</span> <span className="text-primary font-semibold">"posso me dar ao luxo de NÃO fazer?"</span>
        </p>
      </AnimateOnView>
    </div>
  );
};

export default Slide21Risco;
