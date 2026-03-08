import { CheckCircle, XCircle, GitFork } from "lucide-react";

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
    <div className="w-full space-y-6 md:space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-display">O Risco de Não Fazer Nada</h2>
      </div>

      {/* Fork icon */}
      <div className="flex justify-center">
        <GitFork className="text-muted-foreground rotate-180" size={32} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {/* FAZ */}
        <div className="rounded-xl border border-success/30 bg-success/5 p-5 space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-success" />
            <span className="text-sm font-extrabold text-success uppercase tracking-wider">Cenário A — Faz</span>
          </div>
          <div className="space-y-2">
            {faz.map((item, i) => (
              <div key={i} className="flex items-center gap-2 rounded-md bg-success/10 border border-success/15 px-3 py-2">
                <CheckCircle size={12} className="text-success shrink-0" />
                <span className="text-xs font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* NÃO FAZ */}
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5 space-y-3 opacity-70">
          <div className="flex items-center gap-2">
            <XCircle size={18} className="text-destructive" />
            <span className="text-sm font-extrabold text-destructive uppercase tracking-wider">Cenário B — Não Faz</span>
          </div>
          <div className="space-y-2">
            {naoFaz.map((item, i) => (
              <div key={i} className="flex items-center gap-2 rounded-md bg-destructive/10 border border-destructive/15 px-3 py-2">
                <XCircle size={12} className="text-destructive shrink-0" />
                <span className="text-xs font-medium text-foreground/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-body-lg text-center max-w-2xl mx-auto">
        <span className="text-muted-foreground">A pergunta não é</span> <span className="text-foreground font-semibold">"posso fazer isso?"</span>
        <br />
        <span className="text-muted-foreground">É</span> <span className="text-primary font-semibold">"posso me dar ao luxo de NÃO fazer?"</span>
      </p>
    </div>
  );
};

export default Slide21Risco;
