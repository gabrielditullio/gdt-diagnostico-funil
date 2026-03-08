import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import Slide from "@/components/presentation/Slide";
import Slide01Abertura from "@/components/presentation/Slide01Abertura";
import Slide02Legendarios from "@/components/presentation/Slide02Legendarios";
import Slide03DoisPublicos from "@/components/presentation/Slide03DoisPublicos";
import Slide04Escadinha from "@/components/presentation/Slide04Escadinha";
import Slide05PresenteGratis from "@/components/presentation/Slide05PresenteGratis";
import Slide06EmailsAutomaticos from "@/components/presentation/Slide06EmailsAutomaticos";
import Slide07ProdutoEntrada from "@/components/presentation/Slide07ProdutoEntrada";
import Slide08ProgramaCompleto from "@/components/presentation/Slide08ProgramaCompleto";
import Slide09ConsultoriaVIP from "@/components/presentation/Slide09ConsultoriaVIP";
import Slide10ComunidadeGG from "@/components/presentation/Slide10ComunidadeGG";
import Slide11FelipeCamila from "@/components/presentation/Slide11FelipeCamila";
import Slide12Trafego from "@/components/presentation/Slide12Trafego";
import Slide13Site from "@/components/presentation/Slide13Site";
import Slide14MarcaPessoal from "@/components/presentation/Slide14MarcaPessoal";
import Slide15TrekkingFit from "@/components/presentation/Slide15TrekkingFit";
import Slide16Calendario from "@/components/presentation/Slide16Calendario";
import Slide17Youtube from "@/components/presentation/Slide17Youtube";
import Slide18Anuncios from "@/components/presentation/Slide18Anuncios";
import Slide19Numeros from "@/components/presentation/Slide19Numeros";
import Slide20Roadmap from "@/components/presentation/Slide20Roadmap";
import Slide21Risco from "@/components/presentation/Slide21Risco";
import Slide22Resumo from "@/components/presentation/Slide22Resumo";
import Slide23CTA from "@/components/presentation/Slide23CTA";

const slideComponents = [
  Slide01Abertura, Slide02Legendarios, Slide03DoisPublicos, Slide04Escadinha,
  Slide05PresenteGratis, Slide06EmailsAutomaticos, Slide07ProdutoEntrada,
  Slide08ProgramaCompleto, Slide09ConsultoriaVIP, Slide10ComunidadeGG,
  Slide11FelipeCamila, Slide12Trafego, Slide13Site, Slide14MarcaPessoal,
  Slide15TrekkingFit, Slide16Calendario, Slide17Youtube, Slide18Anuncios,
  Slide19Numeros, Slide20Roadmap, Slide21Risco, Slide22Resumo, Slide23CTA,
];

const TOTAL = slideComponents.length;

const FelipeMarinho = () => {
  const { current, next, prev, onTouchStart, onTouchEnd } = useSlideNavigation({ totalSlides: TOTAL });
  const slideRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  const SlideContent = slideComponents[current];
  const progress = ((current + 1) / TOTAL) * 100;

  // Check if slide content overflows
  useEffect(() => {
    setScrolledDown(false);
    const el = slideRef.current;
    if (!el) return;
    const check = () => setHasOverflow(el.scrollHeight > el.clientHeight + 20);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [current]);

  // Track scroll inside slide
  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;
    const onScroll = () => {
      if (el.scrollTop > 10) setScrolledDown(true);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [current]);

  return (
    <div
      className="w-screen h-screen overflow-hidden relative bg-background"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-primary/20">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide */}
      <div
        key={current}
        ref={slideRef}
        className="w-full h-full overflow-y-auto animate-slide-transition"
      >
        <Slide fullWidth>
          <SlideContent />
        </Slide>
      </div>

      {/* Desktop side arrows (hidden on cover slide) */}
      {current > 0 && (
        <>
          <button
            onClick={prev}
            disabled={current === 0}
            className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 items-center justify-center rounded-full bg-white/5 border border-primary/20 text-foreground transition-all hover:bg-primary/15 disabled:opacity-0 disabled:pointer-events-none"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            disabled={current === TOTAL - 1}
            className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 items-center justify-center rounded-full bg-white/5 border border-primary/20 text-foreground transition-all hover:bg-primary/15 disabled:opacity-0 disabled:pointer-events-none"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Compact nav buttons (bottom-right, always visible) */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-2">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-primary/25 bg-card/80 backdrop-blur-sm text-foreground transition-all disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          disabled={current === TOTAL - 1}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-primary/25 bg-card/80 backdrop-blur-sm text-foreground transition-all disabled:opacity-30"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Slide counter (bottom-left) */}
      <div className="fixed bottom-6 left-6 z-50">
        <span className="text-sm text-muted-foreground">
          {String(current + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </span>
      </div>

      {/* Scroll indicator */}
      {hasOverflow && !scrolledDown && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 text-muted-foreground animate-bounce">
          <ChevronDown size={24} />
        </div>
      )}
    </div>
  );
};

export default FelipeMarinho;
