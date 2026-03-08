import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { UserCircle, Zap, Package } from "lucide-react";

const Slide01Abertura = () => (
  <SlideWrapper theme="dark">
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
      
      {/* Left Column - Text */}
      <div className="w-full md:w-[60%] space-y-8">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">A Situação Atual</h2>
        </FadeIn>

        <div className="space-y-6 text-[#CCCCCC] text-base md:text-lg leading-relaxed">
          <FadeIn delay={150}>
            <p>
              Felipe, hoje o teu negócio funciona assim: você tem produtos excelentes — o Protocolo GG, o Trekking Fit, os eBooks. Você tem o que nenhum outro personal no Brasil tem: <strong className="text-white">10 anos treinando o Léo Santana, +320 títulos no fisiculturismo, uma esposa nutricionista com 52 mil seguidores.</strong>
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <p>
              Mas o teu único caminho de venda hoje é: alguém te descobre no Instagram por acaso, olha seu perfil, e... <strong className="text-white">ou compra ali mesmo ou vai embora pra sempre.</strong> Não existe meio termo. Não existe caminho.
            </p>
          </FadeIn>

          <FadeIn delay={450}>
            <div className="pl-6 border-l-4 border-[#D35400] py-2 mt-8">
              <p className="text-xl md:text-2xl font-medium italic text-white">
                "É como ter uma loja incrível no meio do deserto — sem estrada, sem placa, sem endereço."
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Right Column - Visual */}
      <div className="w-full md:w-[40%] flex justify-center">
        <FadeIn delay={600} className="w-full max-w-sm">
          <div className="rounded-xl bg-[#1C1C1C] border border-[#333333] p-8 flex flex-col items-center relative shadow-2xl">
            
            {/* Top Node */}
            <div className="bg-[#2A2A2A] border border-[#444444] rounded-lg p-4 w-full flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center">
                <UserCircle size={20} className="text-[#888888]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Desconhecido</p>
                <p className="text-[10px] text-[#888888] uppercase tracking-wider">Caiu no perfil</p>
              </div>
            </div>

            {/* The Gap */}
            <div className="py-8 flex flex-col items-center relative w-full">
              <div className="h-24 w-0.5 border-l-2 border-dashed border-[#C0392B] relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1A0000] border border-[#C0392B] flex items-center justify-center">
                  <Zap size={14} className="text-[#C0392B]" />
                </div>
              </div>
              
              {/* Label */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#1A0000] border border-[#C0392B]/30 px-3 py-1.5 rounded-md">
                <p className="text-[10px] text-[#C0392B] font-bold uppercase tracking-wider whitespace-nowrap">
                  Salto direto<br/>sem degraus
                </p>
              </div>
            </div>

            {/* Bottom Node */}
            <div className="bg-[#D35400]/10 border border-[#D35400]/30 rounded-lg p-4 w-full flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#D35400]/20 flex items-center justify-center">
                <Package size={20} className="text-[#D35400]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Protocolo GG</p>
                <p className="text-[10px] text-[#D35400] font-bold">R$ 297,00</p>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>

    </div>
  </SlideWrapper>
);

export default Slide01Abertura;
