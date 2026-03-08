import { useRef, useState, useEffect, useCallback } from "react";
import Slide from "@/components/presentation/Slide";
import SlideTitle from "@/components/presentation/SlideTitle";
import NarrationText from "@/components/presentation/NarrationText";
import ProgressDots from "@/components/presentation/ProgressDots";

const TOTAL_SLIDES = 3;

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

      <Slide>
        <SlideTitle>Título do Slide 1</SlideTitle>
        <NarrationText>
          Este é um texto narrativo placeholder para testar a tipografia e o layout da apresentação.
        </NarrationText>
      </Slide>

      <Slide>
        <SlideTitle>Título do Slide 2</SlideTitle>
        <NarrationText>
          Segundo slide com conteúdo de exemplo. A navegação vertical com scroll-snap está funcionando.
        </NarrationText>
      </Slide>

      <Slide>
        <SlideTitle>Título do Slide 3</SlideTitle>
        <NarrationText>
          Terceiro e último slide placeholder. Use as setas do teclado ou os dots laterais para navegar.
        </NarrationText>
      </Slide>
    </div>
  );
};

export default FelipeMarinho;
