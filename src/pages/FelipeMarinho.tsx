import { useRef, useState, useEffect, useCallback } from "react";
import Slide from "@/components/presentation/Slide";
import ProgressDots from "@/components/presentation/ProgressDots";
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

const TOTAL_SLIDES = 19;

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
        scrollToSlide(Math.min(currentSlide + 1, TOTAL_SLIDES - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        scrollToSlide(Math.max(currentSlide - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, scrollToSlide]);

  return (
    <div ref={containerRef} className="snap-container">
      <ProgressDots total={TOTAL_SLIDES} current={currentSlide} onNavigate={scrollToSlide} />
      <Slide fullWidth><Slide01Abertura /></Slide>
      <Slide fullWidth><Slide02Legendarios /></Slide>
      <Slide fullWidth><Slide03DoisPublicos /></Slide>
      <Slide fullWidth><Slide04Escadinha /></Slide>
      <Slide fullWidth><Slide05PresenteGratis /></Slide>
      <Slide fullWidth><Slide06EmailsAutomaticos /></Slide>
      <Slide fullWidth><Slide07ProdutoEntrada /></Slide>
      <Slide fullWidth><Slide08ProgramaCompleto /></Slide>
      <Slide fullWidth><Slide09ConsultoriaVIP /></Slide>
      <Slide fullWidth><Slide10ComunidadeGG /></Slide>
      <Slide fullWidth><Slide11FelipeCamila /></Slide>
      <Slide fullWidth><Slide12Trafego /></Slide>
      <Slide fullWidth><Slide13Site /></Slide>
      <Slide fullWidth><Slide14MarcaPessoal /></Slide>
      <Slide fullWidth><Slide15TrekkingFit /></Slide>
      <Slide fullWidth><Slide16Calendario /></Slide>
      <Slide fullWidth><Slide17Youtube /></Slide>
      <Slide fullWidth><Slide18Anuncios /></Slide>
      <Slide fullWidth><Slide19Numeros /></Slide>
    </div>
  );
};

export default FelipeMarinho;
