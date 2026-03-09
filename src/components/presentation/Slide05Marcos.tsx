import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Dumbbell, Calendar, Smartphone, HeartCrack, Check, Clock, Glasses, Scale } from "lucide-react";

const Slide05Marcos = () => (
  <SlideWrapper theme="light">
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 relative">

      {/* Persona label + bridge text */}
      <div className="flex flex-col items-center gap-3 mb-2">
        <span className="uppercase tracking-[3px] text-xs font-bold" style={{ color: "#999" }}>
          PERSONA 1 DE 2
        </span>
        <FadeIn>
          <p className="text-lg italic opacity-80 text-center" style={{ color: "#666" }}>
            Vamos conhecer cada um de perto.
          </p>
        </FadeIn>
      </div>

      {/* Floating decorative icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Clock 
          size={24} 
          className="absolute top-16 left-8 animate-float opacity-30" 
          style={{ color: "#D35400", animationDelay: "0s" }}
        />
        <Glasses 
          size={28} 
          className="absolute top-32 right-12 animate-float opacity-30" 
          style={{ color: "#D35400", animationDelay: "1s" }}
        />
        <Scale 
          size={26} 
          className="absolute bottom-24 left-16 animate-float opacity-30" 
          style={{ color: "#D35400", animationDelay: "2s" }}
        />
        <Smartphone 
          size={22} 
          className="absolute bottom-16 right-8 animate-float opacity-30" 
          style={{ color: "#D35400", animationDelay: "1.5s" }}
        />
      </div>

      {/* Main Avatar Card */}
      <FadeIn>
        <div 
          className="bg-white rounded-xl shadow-lg border-2 p-8 w-full max-w-2xl"
          style={{ borderColor: "#D35400" }}
        >
          
          {/* Card Header */}
          <div className="flex items-center gap-4 mb-8">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#D35400" }}
            >
              <Dumbbell size={32} color="white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A]">MARCOS</h2>
              <p className="text-lg opacity-70">O teu cliente ideal — Linha GG</p>
            </div>
          </div>

          {/* Stats Grid 2x2 */}
          <div className="grid grid-cols-2 gap-4">
            
            <div className="bg-[#F9F9F9] border border-[#EEEEEE] rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Calendar size={20} style={{ color: "#D35400" }} />
                <span className="font-semibold text-[#1A1A1A]">Idade</span>
              </div>
              <p className="text-[#666666]">25-40 anos</p>
            </div>

            <div className="bg-[#F9F9F9] border border-[#EEEEEE] rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Smartphone size={20} style={{ color: "#D35400" }} />
                <span className="font-semibold text-[#1A1A1A]">Onde está</span>
              </div>
              <p className="text-[#666666]">Instagram fitness, YouTube</p>
            </div>

            <div className="bg-[#F9F9F9] border border-[#EEEEEE] rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <HeartCrack size={20} style={{ color: "#D35400" }} />
                <span className="font-semibold text-[#1A1A1A]">Maior medo</span>
              </div>
              <p className="text-[#666666]">"Minha genética não ajuda"</p>
            </div>

            <div className="bg-[#F9F9F9] border border-[#EEEEEE] rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Check size={20} style={{ color: "#D35400" }} />
                <span className="font-semibold text-[#1A1A1A]">O que convence</span>
              </div>
              <p className="text-[#666666]">"Se funciona pro Léo nessa rotina..."</p>
            </div>

          </div>
        </div>
      </FadeIn>

      {/* Narrative Text */}
      <FadeIn delay={200}>
        <div className="text-center max-w-3xl space-y-6">
          <p className="text-lg text-[#333333] leading-relaxed">
            O Marcos treina há 1-3 anos mas não vê resultado proporcional ao esforço. 
            Ele pensa: "minha genética não ajuda". Na verdade, o problema nunca foi genética — foi método.
          </p>
          
          <p className="text-lg text-[#333333] leading-relaxed font-medium">
            Se o Léo Santana — com a rotina mais caótica possível — mantém aquele shape com o teu método, 
            <strong className="text-[#D35400]"> funciona pra qualquer rotina.</strong>
          </p>
        </div>
      </FadeIn>

    </div>
  </SlideWrapper>
);

export default Slide05Marcos;