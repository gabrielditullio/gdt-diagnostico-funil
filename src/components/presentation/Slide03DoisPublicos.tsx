import { Dumbbell, Mountain, Target, Flame, Heart, Shield } from "lucide-react";

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

const Slide03DoisPublicos = () => {
  return (
    <div className="w-full space-y-6 md:space-y-8">
      {/* Title */}
      <div className="text-center space-y-2">
        <h2 className="text-display leading-tight">
          Você não tem <span className="text-primary">UM</span> público.
          <br />
          Você tem <span className="text-primary">DOIS.</span>
        </h2>
      </div>

      {/* Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 relative">
        {/* MARCOS */}
        <div className="relative overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none bg-gradient-to-br from-[hsl(24,100%,42%)] via-[hsl(24,80%,25%)] to-[hsl(0,0%,6%)] p-6 md:p-8">
          <div className="absolute top-4 right-4 opacity-10">
            <Dumbbell size={120} strokeWidth={1} />
          </div>
          <div className="relative z-10 space-y-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60 mb-1">Persona 01</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">{marcos.name}</h3>
              <p className="text-sm font-semibold text-foreground/70">{marcos.subtitle}</p>
            </div>
            <div className="space-y-3">
              {marcos.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-8 h-8 rounded-md bg-foreground/10 flex items-center justify-center shrink-0">
                    <b.icon size={16} className="text-foreground" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground/90 leading-snug">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VS divider */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex">
          <div className="w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center">
            <span className="text-xs font-extrabold text-muted-foreground tracking-wider">VS</span>
          </div>
        </div>
        <div className="flex md:hidden justify-center -my-3 z-20 relative">
          <div className="w-10 h-10 rounded-full bg-background border-2 border-border flex items-center justify-center">
            <span className="text-[10px] font-extrabold text-muted-foreground tracking-wider">VS</span>
          </div>
        </div>

        {/* THIAGO */}
        <div className="relative overflow-hidden rounded-b-lg md:rounded-r-lg md:rounded-bl-none bg-gradient-to-br from-[hsl(145,54%,30%)] via-[hsl(145,30%,18%)] to-[hsl(0,0%,6%)] p-6 md:p-8">
          <div className="absolute top-4 right-4 opacity-10">
            <Mountain size={120} strokeWidth={1} />
          </div>
          <div className="relative z-10 space-y-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60 mb-1">Persona 02</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">{thiago.name}</h3>
              <p className="text-sm font-semibold text-foreground/70">{thiago.subtitle}</p>
            </div>
            <div className="space-y-3">
              {thiago.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-8 h-8 rounded-md bg-foreground/10 flex items-center justify-center shrink-0">
                    <b.icon size={16} className="text-foreground" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground/90 leading-snug">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide03DoisPublicos;
