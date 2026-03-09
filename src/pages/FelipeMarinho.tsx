import { useEffect, useRef, useState } from "react";
import Slide00Capa from "@/components/presentation/Slide00Capa";
import Slide01Abertura from "@/components/presentation/Slide01Abertura";
import Slide02BaldeFurado from "@/components/presentation/Slide02BaldeFurado";
import Slide03ComoDeveriaSer from "@/components/presentation/Slide03ComoDeveriaSer";
import Slide04DoisPublicos from "@/components/presentation/Slide04DoisPublicos";
import Slide05Marcos from "@/components/presentation/Slide05Marcos";
import Slide06ThiagoLegendarios from "@/components/presentation/Slide06ThiagoLegendarios";
import Slide07EscadaCompleta from "@/components/presentation/Slide07EscadaCompleta";
import Slide08DegrauIsca from "@/components/presentation/Slide08DegrauIsca";
import Slide09DegrauEntrada from "@/components/presentation/Slide09DegrauEntrada";
import Slide10DegrauPrograma from "@/components/presentation/Slide10DegrauPrograma";
import Slide11DegrauVIP from "@/components/presentation/Slide11DegrauVIP";
import Slide12DegrauComunidade from "@/components/presentation/Slide12DegrauComunidade";
import Slide13FelipeCamila from "@/components/presentation/Slide13FelipeCamila";
import Slide14JornadaCompleta from "@/components/presentation/Slide14JornadaCompleta";
import Slide15TrekkingFit from "@/components/presentation/Slide15TrekkingFit";
import Slide16Calendario from "@/components/presentation/Slide16Calendario";
import Slide17Trafego from "@/components/presentation/Slide17Trafego";
import Slide18MarcaPessoal from "@/components/presentation/Slide18MarcaPessoal";
import Slide19Site from "@/components/presentation/Slide19Site";
import Slide20Roadmap from "@/components/presentation/Slide20Roadmap";
import Slide21Numeros from "@/components/presentation/Slide21Numeros";
import Slide22Urgencia from "@/components/presentation/Slide22Urgencia";
import Slide23CTA from "@/components/presentation/Slide23CTA";

const slides = [
  Slide00Capa, Slide01Abertura, Slide02BaldeFurado, Slide03ComoDeveriaSer,
  Slide04DoisPublicos, Slide05Marcos, Slide06ThiagoLegendarios,
  Slide07EscadaCompleta, Slide08DegrauIsca, Slide09DegrauEntrada,
  Slide10DegrauPrograma, Slide11DegrauVIP, Slide12DegrauComunidade, Slide13FelipeCamila,
  Slide14JornadaCompleta, Slide15TrekkingFit, Slide16Calendario, Slide17Trafego,
  Slide18MarcaPessoal, Slide19Site, Slide20Roadmap, Slide21Numeros,
  Slide22Urgencia, Slide23CTA,
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

      {/* Progress dots — right side (hidden on mobile) */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex-col gap-1.5 hidden md:flex">
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
