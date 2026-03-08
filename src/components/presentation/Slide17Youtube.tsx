import { Play, Clock, ArrowRight, Video } from "lucide-react";

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
    <div className="w-full space-y-6 md:space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Conteúdo Exclusivo</span>
        <h2 className="text-display">O YouTube Que Ninguém Pode Copiar</h2>
      </div>

      {/* Thumbnail mockup */}
      <div className="mx-auto max-w-sm rounded-xl overflow-hidden border border-border shadow-xl shadow-primary/5">
        <div className="relative bg-gradient-to-br from-[hsl(0,0%,8%)] via-[hsl(0,0%,12%)] to-[hsl(0,0%,6%)] aspect-video flex items-center justify-center p-6">
          {/* Silhouettes */}
          <div className="absolute bottom-0 left-6 flex gap-3 opacity-20">
            <div className="w-12 h-24 bg-foreground rounded-t-full" />
            <div className="w-14 h-28 bg-foreground rounded-t-full" />
          </div>
          <div className="relative z-10 text-center space-y-1">
            <p className="text-lg md:text-xl font-black text-[hsl(48,100%,55%)] leading-tight drop-shadow-lg">
              BASTIDORES DO TREINO<br />DO GIGANTE
            </p>
          </div>
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-destructive/90 flex items-center justify-center opacity-80">
              <Play size={20} className="text-foreground ml-0.5" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      {/* Video titles */}
      <div className="max-w-md mx-auto space-y-2">
        {videos.map((title, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2.5">
            <div className="w-7 h-7 rounded bg-destructive/15 flex items-center justify-center shrink-0">
              <Video size={12} className="text-destructive" />
            </div>
            <span className="text-xs font-medium text-foreground">{title}</span>
          </div>
        ))}
      </div>

      {/* Video structure */}
      <div className="max-w-sm mx-auto space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center">Estrutura do Vídeo</p>
        <div className="flex rounded-lg overflow-hidden border border-border h-10">
          {structure.map((s, i) => (
            <div
              key={i}
              className={`flex items-center justify-center border-r last:border-r-0 border-border ${
                i === 1 ? "bg-primary/15" : "bg-card"
              }`}
              style={{ width: s.width }}
            >
              <div className="text-center">
                <p className="text-[8px] font-bold text-foreground">{s.label}</p>
                <p className="text-[7px] text-muted-foreground">{s.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
        <span className="text-foreground font-semibold">NINGUÉM</span> mais no Brasil pode fazer isso. É conteúdo <span className="text-primary font-semibold">impossível de copiar</span>.
      </p>
    </div>
  );
};

export default Slide17Youtube;
