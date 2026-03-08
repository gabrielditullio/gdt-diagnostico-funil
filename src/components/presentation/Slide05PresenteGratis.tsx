import { Mail, FileText, ArrowRight, Clock, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const ref = useRef<number | null>(null);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) ref.current = requestAnimationFrame(animate);
    };
    ref.current = requestAnimationFrame(animate);
    return () => { if (ref.current) cancelAnimationFrame(ref.current); };
  }, [target, duration, start]);
  return count;
}

const Slide05PresenteGratis = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const downloads = useCountUp(437, 2500, inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full space-y-6 md:space-y-8">
      {/* Title */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Primeiro Degrau</span>
        <h2 className="text-display">O Presente Grátis</h2>
      </div>

      {/* Phone + Email mockup */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        {/* Phone mockup */}
        <div className="w-56 md:w-64 shrink-0">
          <div className="rounded-[2rem] border-2 border-border bg-card p-3 shadow-2xl shadow-primary/5">
            <div className="rounded-[1.5rem] bg-background overflow-hidden">
              {/* Status bar */}
              <div className="h-6 bg-muted flex items-center justify-center">
                <div className="w-16 h-1 rounded-full bg-border" />
              </div>
              {/* Content */}
              <div className="p-4 space-y-3">
                {/* Hero placeholder */}
                <div className="w-full h-20 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-[10px] text-muted-foreground font-medium">FOTO</span>
                </div>
                <h4 className="text-xs font-extrabold text-foreground leading-tight">
                  Os 3 Exercícios que Léo Santana Nunca Pula
                </h4>
                {/* Email field */}
                <div className="rounded-md border border-border bg-muted/50 px-3 py-2">
                  <span className="text-[10px] text-muted-foreground">seu@email.com</span>
                </div>
                {/* CTA */}
                <div className="rounded-md bg-primary py-2 text-center">
                  <span className="text-[10px] font-extrabold text-primary-foreground uppercase tracking-wide">
                    Quero o PDF Grátis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center gap-1">
          <ArrowRight
            className={`text-primary transition-all duration-700 hidden md:block ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            size={32}
          />
          <ArrowRight
            className={`text-primary transition-all duration-700 md:hidden rotate-90 ${inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            size={28}
          />
          <span className="text-[10px] text-muted-foreground font-medium">automático</span>
        </div>

        {/* Email mockup */}
        <div className="w-56 md:w-64 shrink-0">
          <div className="rounded-xl border border-border bg-card p-4 space-y-3 shadow-lg shadow-primary/5">
            <div className="flex items-center gap-2">
              <Mail className="text-primary" size={16} />
              <span className="text-xs font-bold text-foreground">Nova mensagem</span>
            </div>
            <div className="border-t border-border pt-3 space-y-2">
              <p className="text-[10px] text-muted-foreground">De: Felipe Marinho</p>
              <p className="text-xs font-semibold text-foreground">Seu PDF chegou! 🔥</p>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                Aqui está o guia com os 3 exercícios que Léo Santana nunca pula...
              </p>
            </div>
            {/* PDF attachment */}
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 border border-border p-2">
              <div className="w-8 h-10 rounded bg-destructive/20 flex items-center justify-center">
                <FileText className="text-destructive" size={14} />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-foreground">guia-leo-santana.pdf</p>
                <p className="text-[8px] text-muted-foreground">1.2 MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter */}
      <div className="flex items-center justify-center gap-2">
        <Download className="text-success" size={18} />
        <span className="text-lg md:text-xl font-extrabold text-foreground">
          {downloads.toLocaleString("pt-BR")}
        </span>
        <span className="text-sm text-muted-foreground font-medium">pessoas já baixaram</span>
      </div>

      {/* Narration */}
      <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Hoje quando alguém te descobre no Instagram... ele vai embora. Com o presente grátis, esse cara é <span className="text-foreground font-semibold">SEU</span>. Se o Instagram acabar amanhã, você ainda tem o contato dele.
      </p>

      {/* 24/7 card */}
      <div className="mx-auto max-w-xs rounded-lg border border-primary/30 bg-primary/5 p-4 text-center">
        <Clock className="mx-auto text-primary mb-2" size={24} />
        <p className="text-sm font-bold text-foreground">Funciona 24h por dia, 7 dias por semana.</p>
      </div>
    </div>
  );
};

export default Slide05PresenteGratis;
