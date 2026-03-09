import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { ArrowUp, ArrowRight, Check, CheckCheck } from "lucide-react";

const Slide07EscadaCompleta = () => (
  <SlideWrapper theme="dark">
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
      
      {/* Header */}
      <div className="text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">A Escada do Seu Negócio</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-xl opacity-70 max-w-4xl mx-auto">
            Aqui está a escada montada pro teu negócio. Repara que o teu quiz do Trekking Fit já é uma peça — ele fica aqui, no meio. O que falta é construir os degraus abaixo dele (pra trazer gente nova) e acima dele (pra quem quer mais).
          </p>
        </FadeIn>
      </div>

      {/* Ladder Visualization */}
      <div className="relative">
        
        {/* Value Arrow (left side) */}
        <div className="absolute -left-16 top-0 bottom-0 hidden md:flex flex-col items-center justify-center">
          <ArrowUp size={24} style={{ color: "#D35400" }} />
          <span className="text-sm font-medium mt-2 -rotate-90 whitespace-nowrap" style={{ color: "#D35400" }}>
            VALOR
          </span>
        </div>

        {/* Main Steps Container */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-6 mb-12 relative">
          
          {/* Step 1 - ISCA (Grátis) */}
          <FadeIn delay={400}>
            <div className="flex flex-col items-center gap-3 w-full md:w-auto">
              <div 
                className="px-3 py-1 rounded-full text-xs font-medium border-2 border-dashed"
                style={{ borderColor: "#D35400", color: "#D35400", backgroundColor: "transparent" }}
              >
                A CRIAR
              </div>
              <div 
                className="w-full md:w-28 rounded-t-lg relative overflow-hidden"
                style={{ height: "80px" }}
              >
                <div className="absolute inset-0 flex">
                  <div 
                    className="flex-1 flex flex-col items-center justify-center text-center p-2"
                    style={{ backgroundColor: "#D35400" }}
                  >
                    <span className="text-[9px] font-medium text-white leading-tight">PDF Shape Gigante</span>
                  </div>
                  <div 
                    className="flex-1 flex flex-col items-center justify-center text-center p-2"
                    style={{ backgroundColor: "#27AE60" }}
                  >
                    <span className="text-[9px] font-medium text-white leading-tight">Checklist Montanha</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold opacity-80">ISCA · Grátis</span>
            </div>
          </FadeIn>

          {/* Step 2 - ENTRADA (R$37-47) */}
          <FadeIn delay={900}>
            <div className="flex flex-col items-center gap-3 w-full md:w-auto">
              <div 
                className="px-3 py-1 rounded-full text-xs font-medium border-2 flex items-center gap-1"
                style={{ borderColor: "#27AE60", color: "#27AE60", backgroundColor: "transparent" }}
              >
                <Check size={12} />
                JÁ EXISTE
              </div>
              <div 
                className="w-full md:w-28 rounded-t-lg relative overflow-hidden"
                style={{ height: "110px" }}
              >
                <div className="absolute inset-0 flex">
                  <div 
                    className="flex-1 flex flex-col items-center justify-center text-center p-2"
                    style={{ backgroundColor: "#D35400" }}
                  >
                    <span className="text-[9px] font-medium text-white leading-tight">Dieta do GG R$47</span>
                  </div>
                  <div 
                    className="flex-1 flex flex-col items-center justify-center text-center p-2"
                    style={{ backgroundColor: "#27AE60" }}
                  >
                    <span className="text-[9px] font-medium text-white leading-tight">eBook Trekking R$37</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold opacity-80">ENTRADA · R$37-47</span>
              <span className="text-[10px] opacity-50">Hotmart, sem tráfego</span>
            </div>
          </FadeIn>

          {/* Step 3 - PROGRAMA MENSAL (R$297) */}
          <FadeIn delay={1400}>
            <div className="flex flex-col items-center gap-3 w-full md:w-auto">
              <div className="flex flex-col md:flex-row gap-2">
                <div 
                  className="px-2 py-1 rounded-full text-[10px] font-medium border-2 flex items-center gap-1"
                  style={{ borderColor: "#27AE60", color: "#27AE60", backgroundColor: "transparent" }}
                >
                  <Check size={10} />
                  JÁ EXISTE
                </div>
                <div 
                  className="px-2 py-1 rounded-full text-[10px] font-medium border-[3px] flex items-center gap-1 shadow-lg"
                  style={{ borderColor: "#27AE60", color: "#27AE60", backgroundColor: "rgba(39, 174, 96, 0.1)" }}
                >
                  <CheckCheck size={10} />
                  FUNCIONA
                </div>
              </div>
              <div 
                className="w-full md:w-28 rounded-t-lg relative overflow-hidden"
                style={{ height: "150px" }}
              >
                <div className="absolute inset-0 flex">
                  <div 
                    className="flex-1 flex flex-col items-center justify-center text-center p-2"
                    style={{ backgroundColor: "#D35400" }}
                  >
                    <span className="text-[9px] font-medium text-white leading-tight">Protocolo GG R$297</span>
                  </div>
                  <div 
                    className="flex-1 flex flex-col items-center justify-center text-center p-2"
                    style={{ backgroundColor: "#27AE60" }}
                  >
                    <span className="text-[9px] font-medium text-white leading-tight">Trekking Fit Mensal R$297</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold opacity-80">PROGRAMA · R$297</span>
            </div>
          </FadeIn>

          {/* Step 4 - AVANÇADO (R$597-997) - Only green side */}
          <FadeIn delay={1900}>
            <div className="flex flex-col items-center gap-3 w-full md:w-auto">
              <div 
                className="px-2 py-1 rounded-full text-[10px] font-medium border-[3px] flex items-center gap-1 shadow-lg"
                style={{ borderColor: "#27AE60", color: "#27AE60", backgroundColor: "rgba(39, 174, 96, 0.1)" }}
              >
                <CheckCheck size={10} />
                FUNCIONA
              </div>
              <div 
                className="w-full md:w-28 rounded-t-lg relative overflow-hidden"
                style={{ height: "190px" }}
              >
                <div className="absolute inset-0 flex">
                  <div 
                    className="w-1/3 opacity-20"
                    style={{ backgroundColor: "#444444" }}
                  />
                  <div 
                    className="flex-1 flex flex-col items-center justify-center text-center p-2"
                    style={{ backgroundColor: "#27AE60" }}
                  >
                    <span className="text-[8px] font-medium text-white leading-tight">Trekking Fit Trimestral R$597 / Semestral R$997</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold opacity-80">AVANÇADO · R$597-997</span>
            </div>
          </FadeIn>

          {/* Step 5 - PREMIUM (R$2.997+) */}
          <FadeIn delay={2400}>
            <div className="flex flex-col items-center gap-3 w-full md:w-auto">
              <div 
                className="px-3 py-1 rounded-full text-xs font-medium border-2 border-dashed"
                style={{ borderColor: "#D35400", color: "#D35400", backgroundColor: "transparent" }}
              >
                A CRIAR
              </div>
              <div 
                className="w-full md:w-28 rounded-t-lg flex items-center justify-center text-center p-2"
                style={{ 
                  height: "230px",
                  background: "linear-gradient(135deg, #F39C12, #D35400, #27AE60)"
                }}
              >
                <span className="text-[9px] font-medium text-white leading-tight">Consultoria Felipe + Camila<br/>90 dias individual</span>
              </div>
              <span className="text-xs font-semibold opacity-80">PREMIUM · R$2.997+</span>
            </div>
          </FadeIn>

        </div>

        {/* Step 6 - Community Bar (Horizontal at base) */}
        <FadeIn delay={2900}>
          <div className="flex flex-col items-center gap-3 mb-8">
            <div 
              className="w-full max-w-md h-16 rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{ background: "linear-gradient(90deg, #D35400, #F39C12, #27AE60)" }}
            >
              <span className="text-sm font-semibold text-white">COMUNIDADE GG</span>
              <div 
                className="absolute top-2 right-2 px-2 py-1 rounded-full text-[10px] font-medium border-2 border-dashed"
                style={{ borderColor: "rgba(255,255,255,0.8)", color: "white", backgroundColor: "rgba(0,0,0,0.2)" }}
              >
                A CRIAR
              </div>
            </div>
            <span className="text-xs font-semibold opacity-80">RECORRENTE · R$47-97/mês</span>
            <p className="text-xs opacity-60 text-center max-w-xs">
              Receita recorrente — funciona em paralelo a todos os degraus
            </p>
          </div>
        </FadeIn>

        {/* Investment Arrow (bottom) */}
        <div className="flex items-center justify-center mt-4 md:absolute md:-bottom-12 md:left-0 md:right-0">
          <ArrowRight size={24} style={{ color: "#D35400" }} />
          <span className="text-sm font-medium ml-2" style={{ color: "#D35400" }}>
            INVESTIMENTO
          </span>
        </div>

      </div>

      {/* Narrative Text */}
      <FadeIn delay={3200}>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed opacity-90">
            Dos 6 degraus: 3 já existem (só precisam de estrada), 3 precisam ser criados. Não é começar do zero — é organizar o que existe e adicionar o que falta.
          </p>
        </div>
      </FadeIn>

      {/* Badge Legend */}
      <FadeIn delay={3400}>
        <div className="bg-[#1A1A1A] rounded-lg p-4 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full border-2"
                style={{ borderColor: "#27AE60", backgroundColor: "transparent" }}
              />
              <span><span style={{ color: "#27AE60" }}>JÁ EXISTE</span> = produto pronto, precisa de tráfego</span>
            </div>
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full border-[3px]"
                style={{ borderColor: "#27AE60", backgroundColor: "rgba(39, 174, 96, 0.2)" }}
              />
              <span><span style={{ color: "#27AE60" }}>FUNCIONA</span> = funil ativo com vendas</span>
            </div>
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full border-2 border-dashed"
                style={{ borderColor: "#D35400", backgroundColor: "transparent" }}
              />
              <span><span style={{ color: "#D35400" }}>A CRIAR</span> = produto novo a ser construído</span>
            </div>
          </div>
        </div>
      </FadeIn>


    </div>
  </SlideWrapper>
);

export default Slide07EscadaCompleta;
