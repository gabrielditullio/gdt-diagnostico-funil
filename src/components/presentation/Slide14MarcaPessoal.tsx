import { Palmtree, Trophy, Star, Cog, Rocket, Quote } from "lucide-react";
import { useState } from "react";
import AnimateOnView from "./AnimateOnView";

const milestones = [
  { icon: Palmtree, title: "Personal na orla de Salvador", desc: "Começou treinando clientes ao ar livre em Salvador, construindo reputação no boca a boca." },
  { icon: Trophy, title: "320+ títulos no fisiculturismo", desc: "Dominou o cenário competitivo nordestino e nacional, provando método na prática." },
  { icon: Star, title: "O encontro com Léo Santana", desc: "A parceria que mudou tudo: treinar o maior artista da Bahia abriu portas inimagináveis." },
  { icon: Cog, title: "Construção do Método GG", desc: "Sistematizou anos de experiência em um protocolo replicável e escalável." },
  { icon: Rocket, title: "Explosão digital", desc: "49K seguidores, 6 produtos, comunidade ativa — o começo de algo muito maior." },
];

const Slide14MarcaPessoal = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="w-full space-y-5 md:space-y-8">
      <AnimateOnView>
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Marca Pessoal</span>
          <h2 className="text-display">A História Que Vende</h2>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={100}>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute top-5 left-0 right-0 h-px bg-border hidden md:block" />
          <div className="absolute top-0 bottom-0 left-5 w-px bg-border md:hidden" />

          <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-2">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="relative flex md:flex-col items-start md:items-center gap-2.5 md:gap-2 md:flex-1 cursor-pointer"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className={`relative z-10 w-9 h-9 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
                  active === i ? "border-primary bg-primary/15 scale-110" : "border-border bg-card"
                }`}>
                  <m.icon size={14} className={active === i ? "text-primary" : "text-muted-foreground"} />
                </div>
                <div className="md:text-center">
                  <p className="text-[10px] md:text-xs font-bold text-foreground leading-tight">{m.title}</p>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    active === i ? "max-h-24 opacity-100 mt-1" : "max-h-0 opacity-0"
                  }`}>
                    <p className="text-[9px] md:text-[10px] text-muted-foreground leading-relaxed md:max-w-[130px]">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={200}>
        <div className="mx-auto max-w-sm md:max-w-lg rounded-xl border border-primary/20 bg-primary/5 p-4 md:p-6 text-center relative card-hover">
          <Quote className="absolute top-2 left-3 text-primary/20" size={20} />
          <p className="text-subtitle text-foreground italic">"A Bruxa do Treino"</p>
          <p className="text-xs text-muted-foreground mt-1">Intenso, direto, sem frescura.</p>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={250}>
        <div className="mx-auto max-w-sm md:max-w-lg rounded-xl border-l-4 border-primary bg-primary/5 p-4 md:p-6 relative card-hover">
          <p className="text-[9px] font-bold uppercase tracking-widest text-primary mb-2">Manifesto GG</p>
          <p className="text-xs md:text-sm text-foreground/90 italic leading-relaxed">
            "Chega de treinar no escuro. Chega de planilha genérica. O método que mantém o Gigante no topo existe — e agora é seu. Bem-vindo ao Protocolo GG."
          </p>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={300}>
        <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
          As pessoas não compram de empresas. Compram de <span className="text-foreground font-semibold">PESSOAS</span>.
        </p>
      </AnimateOnView>
    </div>
  );
};

export default Slide14MarcaPessoal;
