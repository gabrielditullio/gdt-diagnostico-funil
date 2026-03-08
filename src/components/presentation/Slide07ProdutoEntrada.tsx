import { ShoppingCart, Check, Tag, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Slide07ProdutoEntrada = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [step, setStep] = useState(0); // 0=checkout, 1=upsell

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setStep(1), 3000);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <div ref={ref} className="w-full space-y-6 md:space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Primeiro Dinheiro</span>
        <h2 className="text-display">Produto de Entrada</h2>
      </div>

      {/* Checkout / Upsell mockups */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-sm">
          {/* Checkout */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: step === 0 ? 1 : 0,
              transform: step === 0 ? "scale(1)" : "scale(0.95)",
              position: step === 0 ? "relative" : "absolute",
              inset: step === 0 ? undefined : 0,
              pointerEvents: step === 0 ? "auto" : "none",
            }}
          >
            <div className="rounded-xl border border-border bg-card p-5 space-y-4 shadow-xl shadow-primary/5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <ShoppingCart size={14} /> Checkout
              </div>

              {/* Product card */}
              <div className="rounded-lg border border-border bg-background p-4 flex gap-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-extrabold text-primary">GG</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-foreground">Dieta do GG</p>
                  <p className="text-xs text-muted-foreground">eBook completo</p>
                  <p className="text-lg font-extrabold text-foreground mt-1">R$47</p>
                </div>
              </div>

              {/* Order bump */}
              <div className="rounded-lg border-2 border-dashed border-primary/40 bg-primary/5 p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded border-2 border-primary bg-primary flex items-center justify-center">
                    <Check size={12} className="text-primary-foreground" />
                  </div>
                  <span className="text-xs font-bold text-foreground">Adicionar eBook Trekking Fit</span>
                </div>
                <div className="flex items-center gap-2 ml-7">
                  <span className="text-xs text-muted-foreground line-through">R$37</span>
                  <span className="text-sm font-extrabold text-primary">R$27</span>
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                    Oferta Especial
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full rounded-lg bg-primary py-3 text-center">
                <span className="text-sm font-extrabold text-primary-foreground uppercase tracking-wide">
                  Comprar Agora
                </span>
              </button>
            </div>
          </div>

          {/* Upsell */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: step === 1 ? 1 : 0,
              transform: step === 1 ? "scale(1)" : "scale(0.95)",
              position: step === 1 ? "relative" : "absolute",
              inset: step === 1 ? undefined : 0,
              pointerEvents: step === 1 ? "auto" : "none",
            }}
          >
            <div className="rounded-xl border border-primary/30 bg-card p-5 space-y-4 shadow-xl shadow-primary/10">
              <div className="text-center space-y-2">
                <Sparkles className="mx-auto text-gold" size={28} />
                <h3 className="text-lg font-extrabold text-foreground">Parabéns pela compra! 🎉</h3>
                <p className="text-xs text-muted-foreground">Oferta exclusiva desbloqueada</p>
              </div>

              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center space-y-2">
                <p className="text-sm font-bold text-foreground">Protocolo GG Completo</p>
                <p className="text-2xl font-extrabold text-primary">Preço Especial</p>
                <div className="inline-block bg-destructive/10 border border-destructive/30 rounded px-2 py-1">
                  <span className="text-[10px] font-bold text-destructive uppercase tracking-wider">
                    Esta oferta só aparece UMA VEZ
                  </span>
                </div>
              </div>

              <button className="w-full rounded-lg bg-primary py-3 text-center flex items-center justify-center gap-2">
                <span className="text-sm font-extrabold text-primary-foreground uppercase tracking-wide">
                  Quero Aproveitar
                </span>
                <ArrowRight size={16} className="text-primary-foreground" />
              </button>

              <button
                onClick={() => setStep(0)}
                className="w-full text-center text-xs text-muted-foreground underline"
              >
                ver checkout novamente
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Narration */}
      <div className="space-y-3 max-w-2xl mx-auto">
        <p className="text-body-lg text-center text-foreground font-semibold">
          O objetivo do primeiro produto <span className="text-primary">NÃO</span> é dar lucro.
          <br />É transformar um <span className="text-muted-foreground">CURIOSO</span> em <span className="text-primary">COMPRADOR</span>.
        </p>
        <p className="text-sm text-muted-foreground text-center">
          Quem pagou, presta atenção. Quem pagou, confia mais. Quem pagou, compra de novo.
        </p>
      </div>
    </div>
  );
};

export default Slide07ProdutoEntrada;
