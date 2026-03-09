import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import FooterQuote from "./FooterQuote";
import { UserCircle, ArrowRight, Check, Lock, X, WifiOff } from "lucide-react";

const Slide01Abertura = () => (
  <SlideWrapper theme="dark">
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 lg:gap-20">
      
      {/* Left Column - Text */}
      <div className="w-full md:w-[60%] space-y-8">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">A Situação Atual</h2>
        </FadeIn>

        <div className="space-y-6 text-[#CCCCCC] text-base md:text-lg leading-relaxed">
          <FadeIn delay={0}>
            <p>
              Felipe, a gente analisou tudo sobre o teu negócio. Teu Instagram, teus produtos, o quiz do Trekking Fit que está no teu link da bio. E a conclusão é: <strong className="text-white">você tem UMA peça excelente funcionando — mas é uma peça de um quebra-cabeça de dez.</strong>
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <p>
              O teu funil do Trekking Fit é bem feito. Ele faz as perguntas certas, captura o email e o WhatsApp, mostra depoimento real, e oferece três planos. <strong className="text-white">Isso não é amador — isso funciona.</strong>
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <p>
              O problema é que esse funil só atende UMA fatia do teu público: os homens que JÁ participaram do Legendários. Todo o resto da tua audiência — o cara que quer shape, o cara que está PENSANDO em ir ao Legendários mas ainda não foi, o fã do Léo Santana — entra no teu Instagram, clica no link da bio, responde "nunca participei", e vê uma tela que diz: <strong className="text-white">"Este programa é exclusivo para homens que já participaram". Porta fechada.</strong>
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <p>
              E os outros 5 produtos que você tem? Protocolo GG, Dieta do GG, Theu Fit, os eBooks? <strong className="text-white">Não têm NENHUM caminho de venda.</strong> Estão na Hotmart como uma loja sem porta de entrada.
            </p>
          </FadeIn>

          <FadeIn delay={750}>
            <div className="pl-6 border-l-4 py-4 mt-8" style={{ borderColor: "#D35400", backgroundColor: "#1A1A1A" }}>
              <p className="text-xl md:text-2xl font-medium italic text-white">
                "É como ter uma loja que atende muito bem quem entra — mas com uma placa na porta que diz 'só entra quem já veio aqui antes'. E mais 5 lojas trancadas sem placa nenhuma."
              </p>
            </div>
          </FadeIn>
        </div>

      </div>

      {/* Right Column - Visual */}
      <div className="w-full md:w-[40%] flex flex-col gap-6">
        
        {/* BLOCO 1 - O funil que funciona (parcialmente) */}
        <FadeIn delay={450}>
          <div className="rounded-xl p-6 space-y-4" style={{ backgroundColor: "#1C1C1C", border: "2px solid #27AE60" }}>
            
            {/* LINHA 1 - Funciona */}
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center shrink-0">
                  <UserCircle size={16} className="text-white" />
                </div>
                <span className="text-white text-xs font-semibold">Ex-Legendário</span>
              </div>
              
              <ArrowRight size={16} style={{ color: "#27AE60" }} className="shrink-0" />
              
              <div className="flex items-center gap-2 flex-1">
                <span className="text-white text-xs font-semibold">Quiz Trekking</span>
              </div>
              
              <ArrowRight size={16} style={{ color: "#27AE60" }} className="shrink-0" />
              
              <div className="flex items-center gap-2">
                <Check size={16} style={{ color: "#27AE60" }} className="shrink-0" />
                <div>
                  <p className="text-white text-xs font-bold">Venda</p>
                  <p className="text-[10px]" style={{ color: "#27AE60" }}>R$ 297-997</p>
                </div>
              </div>
            </div>

            <div className="h-px w-full" style={{ backgroundColor: "#333333" }} />

            {/* LINHA 2 - Bloqueada */}
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center shrink-0">
                  <UserCircle size={16} className="text-white" />
                </div>
                <span className="text-white text-xs font-semibold">Não-Legendário</span>
              </div>
              
              <ArrowRight size={16} style={{ color: "#27AE60" }} className="shrink-0" />
              
              <div className="flex items-center gap-2 flex-1">
                <span className="text-white text-xs font-semibold">Quiz Trekking</span>
              </div>
              
              <ArrowRight size={16} style={{ color: "#C0392B" }} className="shrink-0" />
              
              <div className="flex items-center gap-2">
                <Lock size={16} style={{ color: "#C0392B" }} className="shrink-0" />
                <div>
                  <p className="text-xs font-bold" style={{ color: "#C0392B" }}>BLOQUEIO</p>
                  <X size={12} style={{ color: "#C0392B" }} />
                </div>
              </div>
            </div>

            <p className="text-center text-xs pt-2" style={{ color: "#888888" }}>
              Metade funciona, metade bloqueia
            </p>
          </div>
        </FadeIn>

        {/* BLOCO 2 - Os 5 produtos sem caminho */}
        <FadeIn delay={600}>
          <div className="rounded-xl p-6 space-y-4" style={{ backgroundColor: "#1C1C1C", border: "1px solid #333333" }}>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                "Protocolo GG",
                "Dieta do GG",
                "Theu Fit",
                "eBook Trekking",
              ].map((product, i) => (
                <div
                  key={i}
                  className="rounded-lg p-3 flex flex-col items-center gap-2 opacity-50"
                  style={{ backgroundColor: "#2A2A2A", border: "1px solid #444444" }}
                >
                  <WifiOff size={20} style={{ color: "#666666" }} />
                  <p className="text-[10px] text-center text-white font-semibold">{product}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div
                className="rounded-lg p-3 flex flex-col items-center gap-2 opacity-50"
                style={{ backgroundColor: "#2A2A2A", border: "1px solid #444444", width: "calc(50% - 6px)" }}
              >
                <WifiOff size={20} style={{ color: "#666666" }} />
                <p className="text-[10px] text-center text-white font-semibold">Programa Theu Fit</p>
              </div>
            </div>

            <p className="text-center text-xs pt-2" style={{ color: "#C0392B" }}>
              5 produtos sem nenhum caminho de venda ativo
            </p>
          </div>
        </FadeIn>

      </div>

    </div>

    <FooterQuote text="O primeiro passo para construir é entender onde você está — com precisão." />
  </SlideWrapper>
);

export default Slide01Abertura;
