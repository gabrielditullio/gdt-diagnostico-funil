import { useRef, useState, useEffect, useCallback } from "react";
import Slide from "@/components/presentation/Slide";
import SlideTitle from "@/components/presentation/SlideTitle";
import NarrationText from "@/components/presentation/NarrationText";
import ProgressDots from "@/components/presentation/ProgressDots";
import Slide01Abertura from "@/components/presentation/Slide01Abertura";
import Slide02Legendarios from "@/components/presentation/Slide02Legendarios";
import Slide03DoisPublicos from "@/components/presentation/Slide03DoisPublicos";
import Slide04Escadinha from "@/components/presentation/Slide04Escadinha";

const TOTAL_SLIDES = 5;

const FelipeMarinho = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSlide = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const slides = container.querySelectorAll(".snap-slide");
    slides[index]?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const slideHeight = container.clientHeight;
      const index = Math.round(scrollTop / slideHeight);
      setCurrentSlide(Math.min(index, TOTAL_SLIDES - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        const next = Math.min(currentSlide + 1, TOTAL_SLIDES - 1);
        scrollToSlide(next);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = Math.max(currentSlide - 1, 0);
        scrollToSlide(prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, scrollToSlide]);

  return (
    <div ref={containerRef} className="snap-container">
      <ProgressDots total={TOTAL_SLIDES} current={currentSlide} onNavigate={scrollToSlide} />

      {/* TELA 01 — ABERTURA */}
      <Slide fullWidth>
        <Slide01Abertura />
      </Slide>

      {/* TELA 02 — LEGENDÁRIOS */}
      <Slide fullWidth>
        <Slide02Legendarios />
      </Slide>

      {/* TELA 03 — DOIS PÚBLICOS */}
      <Slide fullWidth>
        <Slide03DoisPublicos />
      </Slide>

      {/* TELA 04 — ESCADINHA */}
      <Slide fullWidth>
        <Slide04Escadinha />
      </Slide>

      {/* Placeholder */}
      <Slide>
        <SlideTitle>Título do Slide 5</SlideTitle>
        <NarrationText>
          Placeholder para a próxima tela da apresentação.
        </NarrationText>
      </Slide>
    </div>
  );
};

export default FelipeMarinho;
