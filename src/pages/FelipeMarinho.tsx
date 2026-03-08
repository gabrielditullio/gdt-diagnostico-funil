import { useEffect, useRef, useState } from "react";
import Slide00Capa from "@/components/presentation/Slide00Capa";
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

const slides = [
  Slide00Capa, Slide01Abertura, Slide02Legendarios, Slide03DoisPublicos,
  Slide04Escadinha, Slide05PresenteGratis, Slide06EmailsAutomaticos,
  Slide07ProdutoEntrada, Slide08ProgramaCompleto, Slide09ConsultoriaVIP,
  Slide10ComunidadeGG, Slide11FelipeCamila, Slide12Trafego, Slide13Site,
  Slide14MarcaPessoal, Slide15TrekkingFit, Slide16Calendario, Slide17Youtube,
  Slide18Anuncios, Slide19Numeros, Slide20Roadmap, Slide21Risco,
  Slide22Resumo, Slide23CTA,
];

const TOTAL = slides.length;

const FelipeMarinho = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  // Track current slide via scroll position
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const index = Math.round(el.scrollTop / window.innerHeight);
      setCurrent(Math.min(index, TOTAL - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        el.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        el.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Scrollable container with snap */}
      <div
        ref={containerRef}
        className="w-full h-full overflow-y-auto"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {slides.map((SlideComponent, i) => (
          <SlideComponent key={i} />
        ))}
      </div>

      {/* Progress dots — right side */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              containerRef.current?.scrollTo({
                top: i * window.innerHeight,
                behavior: "smooth",
              });
            }}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === current ? "#D35400" : "rgba(255,255,255,0.25)",
              transform: i === current ? "scale(1.4)" : "scale(1)",
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FelipeMarinho;
