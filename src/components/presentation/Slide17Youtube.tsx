import { Play, Video } from "lucide-react";
import AnimateOnView from "./AnimateOnView";

const videos = [
  "Como é treinar Léo Santana antes de um show",
  "A dieta do Léo em turnê — revelada",
  "O treino que o Léo mais odeia (e por que funciona)",
  "3 exercícios que todo Legendário precisa dominar",
];

const structure = [
  { label: "Gancho", time: "15s", width: "15%" },
  { label: "Conteúdo", time: "8–12min", width: "70%" },
  { label: "CTA", time: "15s", width: "15%" },
];

const Slide17Youtube = () => {
  return (
    <div className="w-full space-y-5 md:space-y-8">
      <AnimateOnView>
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Conteúdo Exclusivo</span>
          <h2 className="text-display">O YouTube Que Ninguém Pode Copiar</h2>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={100}>
        <div className="mx-auto max-w-xs rounded-xl overflow-hidden border border-border shadow-xl shadow-primary/5 card-hover">
          <div className="relative bg-gradient-to-br from-[hsl(0,0%,8%)] via-[hsl(0,0%,12%)] to-[hsl(0,0%,6%)] aspect-video flex items-center justify-center p-4">
            <div className="absolute bottom-0 left-4 flex gap-2 opacity-15">
              <div className="w-8 h-16 bg-foreground rounded-t-full" />
              <div className="w-10 h-20 bg-foreground rounded-t-full" />
            </div>
            <div className="relative z-10 text-center">
              <p className="text-sm md:text-base font-black text-[hsl(48,100%,55%)] leading-tight drop-shadow-lg">
                BASTIDORES DO TREINO<br />DO GIGANTE
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 rounded-full bg-destructive/90 flex items-center justify-center opacity-70">
                <Play size={16} className="text-foreground ml-0.5" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={200}>
        <div className="max-w-sm mx-auto space-y-1.5">
          {videos.map((title, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 card-hover">
              <div className="w-6 h-6 rounded bg-destructive/15 flex items-center justify-center shrink-0">
                <Video size={10} className="text-destructive" />
              </div>
              <span className="text-[10px] md:text-xs font-medium text-foreground">{title}</span>
            </div>
          ))}
        </div>
      </AnimateOnView>

      <AnimateOnView delay={300}>
        <div className="max-w-xs mx-auto space-y-1.5">
          <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">Estrutura do Vídeo</p>
          <div className="flex rounded-lg overflow-hidden border border-border h-8">
            {structure.map((s, i) => (
              <div
                key={i}
                className={`flex items-center justify-center border-r last:border-r-0 border-border ${i === 1 ? "bg-primary/15" : "bg-card"}`}
                style={{ width: s.width }}
              >
                <div className="text-center">
                  <p className="text-[7px] font-bold text-foreground">{s.label}</p>
                  <p className="text-[6px] text-muted-foreground">{s.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={400}>
        <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
          <span className="text-foreground font-semibold">NINGUÉM</span> mais no Brasil pode fazer isso. É conteúdo <span className="text-primary font-semibold">impossível de copiar</span>.
        </p>
      </AnimateOnView>
    </div>
  );
};

export default Slide17Youtube;
