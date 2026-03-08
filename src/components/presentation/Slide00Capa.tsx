import { Dumbbell, ChevronDown } from "lucide-react";

interface Slide00CapaProps {
  onStart?: () => void;
}

const Slide00Capa = ({ onStart }: Slide00CapaProps) => {
  return (
    <div className="relative w-full min-h-screen bg-background flex flex-col">
      {/* Top gradient bar */}
      <div className="w-full h-1 bg-gradient-to-r from-primary via-primary to-primary/60" />

      <div className="flex-1 flex items-center px-6 md:px-16 lg:px-24 py-12">
        <div className="flex-1 space-y-6 md:space-y-8 max-w-2xl">
          {/* Label */}
          <p className="text-primary uppercase tracking-[3px] text-[11px] font-bold">
            Preparado por Gabriel Di Tullio · DT Coproduções
          </p>

          {/* Title block */}
          <div className="space-y-2">
            <p className="text-foreground/50 text-sm md:text-base">
              A Arquitetura Completa para Transformar o Negócio de
            </p>
            <h1
              className="font-display text-foreground leading-none"
              style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
            >
              FELIPE MARINHO
            </h1>
            <p className="text-foreground/50 text-sm md:text-base">
              em uma Máquina que Funciona 24h por Dia
            </p>
          </div>

          {/* Method name */}
          <div className="pt-4">
            <p
              className="font-display text-primary leading-none"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              O Método do Gigante
            </p>
          </div>
        </div>

        {/* Decorative element - desktop only */}
        <div className="hidden md:flex items-center justify-center flex-shrink-0 ml-12">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />
            {/* Middle ring */}
            <div
              className="absolute inset-8 rounded-full border border-primary/15 animate-spin-slow"
              style={{ animationDirection: "reverse" }}
            />
            {/* Inner ring */}
            <div
              className="absolute inset-16 rounded-full border border-primary/10 animate-spin-slow"
              style={{ animationDuration: "80s" }}
            />
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Dumbbell className="text-primary/40" size={48} />
            </div>
          </div>
        </div>
      </div>

      {/* Start button */}
      <button
        onClick={onStart}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-foreground transition-all hover:bg-primary/15 hover:border-primary/50"
      >
        Começar apresentação
        <ChevronDown size={16} className="animate-bounce" />
      </button>

      {/* Footer */}
      <div className="px-6 md:px-16 pb-6">
        <p className="text-[10px] text-foreground/25 tracking-wider">
          Documento confidencial · Uso interno · 2026
        </p>
      </div>
    </div>
  );
};

export default Slide00Capa;
