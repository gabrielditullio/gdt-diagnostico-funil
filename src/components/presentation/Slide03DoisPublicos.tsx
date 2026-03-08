import { Dumbbell, Mountain, Target, Flame, Heart, Shield } from "lucide-react";
import AnimateOnView from "./AnimateOnView";

const marcos = {
  name: "MARCOS",
  subtitle: "O Cara do Shape",
  icon: Dumbbell,
  bullets: [
    { icon: Target, text: "Quer ficar grande e definido" },
    { icon: Flame, text: 'Olha pro Léo e pensa: "eu quero ficar assim"' },
    { icon: Dumbbell, text: "Busca hipertrofia e estética" },
  ],
};

const thiago = {
  name: "THIAGO",
  subtitle: "O Cara da Montanha",
  icon: Mountain,
  bullets: [
    { icon: Shield, text: "Quer completar o Legendários sem ir pro hospital" },
    { icon: Heart, text: "Busca condicionamento e resistência" },
    { icon: Mountain, text: "Precisa aguentar 72h na montanha com 14kg nas costas" },
  ],
};

const PersonaCard = ({ persona, gradient, delay }: { persona: typeof marcos; gradient: string; delay: number }) => (
  <AnimateOnView delay={delay}>
    <div className={`relative overflow-hidden rounded-xl ${gradient} p-5 md:p-8`}>
      <div className="absolute top-3 right-3 opacity-10">
        <persona.icon size={80} strokeWidth={1} />
      </div>
      <div className="relative z-10 space-y-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50 mb-1">
            {persona === marcos ? "Persona 01" : "Persona 02"}
          </p>
          <h3 className="text-xl md:text-3xl font-extrabold text-foreground">{persona.name}</h3>
          <p className="text-xs font-semibold text-foreground/60">{persona.subtitle}</p>
        </div>
        <div className="space-y-2.5">
          {persona.bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-0.5 w-7 h-7 rounded-md bg-foreground/10 flex items-center justify-center shrink-0">
                <b.icon size={14} className="text-foreground" />
              </div>
              <span className="text-xs md:text-sm font-medium text-foreground/90 leading-snug">{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </AnimateOnView>
);

const Slide03DoisPublicos = () => {
  return (
    <div className="w-full space-y-5 md:space-y-8">
      <AnimateOnView>
        <div className="text-center space-y-2">
          <h2 className="text-display leading-tight">
            Você não tem <span className="text-primary">UM</span> público.
            <br />
            Você tem <span className="text-primary">DOIS.</span>
          </h2>
        </div>
      </AnimateOnView>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
        <PersonaCard
          persona={marcos}
          gradient="bg-gradient-to-br from-[hsl(24,100%,42%)] via-[hsl(24,80%,25%)] to-[hsl(0,0%,6%)] rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
          delay={100}
        />

        {/* VS divider */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex">
          <div className="w-10 h-10 rounded-full bg-background border-2 border-border flex items-center justify-center">
            <span className="text-[10px] font-extrabold text-muted-foreground">VS</span>
          </div>
        </div>
        <div className="flex md:hidden justify-center -my-2.5 z-20 relative">
          <div className="w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
            <span className="text-[8px] font-extrabold text-muted-foreground">VS</span>
          </div>
        </div>

        <PersonaCard
          persona={thiago}
          gradient="bg-gradient-to-br from-[hsl(145,54%,30%)] via-[hsl(145,30%,18%)] to-[hsl(0,0%,6%)] rounded-b-xl md:rounded-r-xl md:rounded-bl-none"
          delay={200}
        />
      </div>
    </div>
  );
};

export default Slide03DoisPublicos;
