import { useState } from "react";
import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import AccordionEntregaveis from "./AccordionEntregaveis";
import { Palmtree, Trophy, Star, Cog, Rocket } from "lucide-react";

const timelinePoints = [
  { icon: Palmtree, label: "Personal na orla de Salvador", detail: "Começou na praia, treino com o que tinha. Resultado era inevitável." },
  { icon: Trophy, label: "320+ títulos no fisiculturismo", detail: "Dos palcos regionais ao reconhecimento nacional. Cada troféu contou." },
  { icon: Star, label: "O encontro com Léo Santana", detail: "Uma parceria que mudou tudo. O cantor virou o case mais visível do Brasil." },
  { icon: Cog, label: "Construção do Método GG", detail: "O sistema que transforma qualquer pessoa. Testado, refinado, comprovado." },
  { icon: Rocket, label: "Explosão digital", detail: "Do presencial para o mundo. A mesma intensidade, em escala." }
];

const Slide18Anuncios = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  return (
    <SlideWrapper theme="dark">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-3">
          A Bruxa do Treino: Sua História Vende
        </h2>
        <p className="text-center text-gray-400 text-sm md:text-base mb-12">
          As pessoas não compram de empresas. Compram de <span className="font-black text-white">PESSOAS.</span>
        </p>
      </FadeIn>

      {/* Timeline Horizontal */}
      <FadeIn delay={300} className="w-full max-w-5xl mx-auto mb-12 overflow-x-auto">
        <div className="relative flex items-start justify-between min-w-[600px] px-4">
          {/* Linha tracejada */}
          <div className="absolute top-6 left-8 right-8 h-0.5 border-t-2 border-dashed border-white/20" />

          {timelinePoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <FadeIn key={i} delay={400 + i * 200} className="flex flex-col items-center relative z-10 flex-1">
                <button
                  onClick={() => setActivePoint(activePoint === i ? null : i)}
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all hover:scale-110"
                  style={{ backgroundColor: activePoint === i ? "#D35400" : "#333" }}
                >
                  <Icon size={20} className="text-white" />
                </button>
                <p className="text-xs text-center font-semibold max-w-[120px] leading-tight">{point.label}</p>

                {activePoint === i && (
                  <div
                    className="absolute top-20 w-48 p-3 rounded-lg text-xs text-center leading-relaxed animate-fade-in"
                    style={{ backgroundColor: "#1A1A1A", border: "1px solid #D35400" }}
                  >
                    {point.detail}
                  </div>
                )}
              </FadeIn>
            );
          })}
        </div>
        <p className="text-center text-xs text-gray-500 mt-4">Toque nos ícones para ver detalhes</p>
      </FadeIn>

      {/* Citação */}
      <FadeIn delay={1200} className="w-full max-w-3xl mx-auto mb-10">
        <div
          className="p-6 rounded-lg border-2 bg-white/5"
          style={{ borderColor: "#D35400" }}
        >
          <p className="text-lg md:text-xl italic text-center leading-relaxed">
            "<span className="font-black" style={{ color: "#D35400" }}>A Bruxa do Treino</span>" — Intenso, direto, sem frescura. O cara que olha no olho e fala a verdade.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={1400} className="w-full max-w-2xl mx-auto">
        <AccordionEntregaveis
          title="O que será construído neste degrau"
          items={[
            "Roteiro da história de origem — texto completo",
            "5 mini-histórias reutilizáveis para conteúdo",
            "Posicionamento de marca: frases-chave, tom de voz",
            "Manifesto GG — parágrafo-resumo da missão"
          ]}
        />
      </FadeIn>
    </SlideWrapper>
  );
};

export default Slide18Anuncios;
