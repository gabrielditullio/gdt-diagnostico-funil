import { useEffect, useRef } from "react";
import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Dumbbell, ArrowRight } from "lucide-react";

const Slide00Capa = () => {
  const handleStart = () => {
    // Scroll smoothly to next slide
    const el = document.querySelector(".snap-start:nth-child(2)");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SlideWrapper theme="dark" className="justify-center items-center relative">
      <FadeIn className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
        
        {/* Animated Badge */}
        <div className="relative w-24 h-24 mb-4">
          <div className="absolute inset-0 rounded-full border border-[#D35400]/30 animate-spin-slow" />
          <div className="absolute inset-2 rounded-full border border-[#D35400]/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Dumbbell className="text-[#D35400]/60" size={32} />
          </div>
        </div>

        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#666666]">
          Preparado por Gabriel Di Tullio · DT Coproduções
        </p>

        <div className="space-y-4">
          <p className="text-sm md:text-lg text-[#CCCCCC]">
            A Arquitetura Completa para Transformar o Negócio de
          </p>
          
          <h1 
            className="font-black leading-none tracking-tight text-white" 
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            FELIPE MARINHO
          </h1>
          
          <p className="text-sm md:text-lg text-[#CCCCCC]">
            em uma Máquina que Funciona 24h por Dia
          </p>
        </div>

        <div className="pt-4">
          <p className="text-2xl md:text-4xl font-bold text-[#D35400] font-display tracking-tight">
            O Método do Gigante
          </p>
        </div>
      </FadeIn>

      {/* Start Button */}
      <button 
        onClick={handleStart}
        className="absolute bottom-10 right-4 md:right-10 flex items-center gap-2 group transition-all"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-[#666666] group-hover:text-white transition-colors hidden sm:inline">
          Começar apresentação
        </span>
        <div className="w-10 h-10 md:w-8 md:h-8 rounded-full border border-[#333333] flex items-center justify-center group-hover:border-[#D35400] group-hover:bg-[#D35400]/10 transition-all">
          <ArrowRight size={20} className="text-[#666666] group-hover:text-[#D35400] transition-colors md:w-3.5 md:h-3.5" />
        </div>
      </button>
    </SlideWrapper>
  );
};

export default Slide00Capa;
