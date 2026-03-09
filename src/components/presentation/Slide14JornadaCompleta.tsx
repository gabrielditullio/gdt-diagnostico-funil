import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import FooterQuote from "./FooterQuote";
import { ArrowDown, GitMerge } from "lucide-react";

const JourneyStation = ({ 
  color, 
  from, 
  to, 
  trigger, 
  emotion, 
  price, 
  delay = 0 
}: { 
  color: string; 
  from: string; 
  to: string; 
  trigger: string; 
  emotion: string; 
  price: string;
  delay?: number;
}) => (
  <FadeIn delay={delay} className="relative">
    {/* Dot */}
    <div className="flex items-start gap-3">
      <div 
        className="w-4 h-4 rounded-full mt-2 shrink-0"
        style={{ backgroundColor: color }}
      />
      
      {/* Card */}
      <div 
        className="flex-1 p-4 rounded-lg border-2 bg-white/5"
        style={{ borderColor: color }}
      >
        <h4 className="font-bold text-lg mb-2" style={{ color: color }}>
          {from} → {to}
        </h4>
        <p className="text-sm text-gray-300 mb-3">{trigger}</p>
        <div className="flex gap-2 flex-wrap">
          <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
            {emotion}
          </Badge>
          <Badge 
            className="font-bold text-xs border"
            style={{ 
              backgroundColor: price === "Grátis" ? "#27AE60" : color, 
              color: "#FFF",
              borderColor: price === "Grátis" ? "#1E8449" : color
            }}
          >
            {price}
          </Badge>
        </div>
      </div>
    </div>
  </FadeIn>
);

const Slide14JornadaCompleta = () => (
  <SlideWrapper theme="dark">
    <FadeIn>
      <h2 className="text-center mb-4 font-bold text-gray-900" style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>
        De Desconhecido a Cliente Premium
      </h2>
      <p className="text-center text-gray-400 text-sm md:text-base mb-10">
        O caminho completo que uma pessoa percorre no seu ecossistema.
      </p>
    </FadeIn>

    <div className="w-full max-w-6xl mx-auto">
      {/* Estações Paralelas */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Coluna GG (Laranja) */}
        <div className="space-y-4">
          <FadeIn delay={200}>
            <h3 className="text-center font-bold text-lg mb-4" style={{ color: "#D35400" }}>
              🔥 Caminho GG
            </h3>
          </FadeIn>
          
          <JourneyStation
            color="#D35400"
            from="Desconhecido"
            to="Contato GG"
            trigger="Reels/anúncio → baixa PDF Shape"
            emotion="Curiosidade"
            price="Grátis"
            delay={300}
          />
          
          <div className="flex justify-center">
            <ArrowDown size={24} style={{ color: "#D35400" }} className="animate-bounce" />
          </div>
          
          <JourneyStation
            color="#D35400"
            from="Contato"
            to="Comprador GG"
            trigger="Email 5 → compra Dieta GG"
            emotion="Confiança"
            price="R$47"
            delay={500}
          />
        </div>

        {/* Coluna Trekking (Verde) */}
        <div className="space-y-4">
          <FadeIn delay={200}>
            <h3 className="text-center font-bold text-lg mb-4" style={{ color: "#27AE60" }}>
              🏔️ Caminho Trekking
            </h3>
          </FadeIn>
          
          <JourneyStation
            color="#27AE60"
            from="Desconhecido"
            to="Contato Trekking"
            trigger="Grupo Legendários → baixa Checklist"
            emotion="Urgência"
            price="Grátis"
            delay={300}
          />
          
          <div className="flex justify-center">
            <ArrowDown size={24} style={{ color: "#27AE60" }} className="animate-bounce" />
          </div>
          
          <JourneyStation
            color="#27AE60"
            from="Contato"
            to="Comprador Trekking"
            trigger="Email 5 → compra eBook"
            emotion="Confiança"
            price="R$37"
            delay={500}
          />
        </div>
      </div>

      {/* Ponto de Convergência */}
      <FadeIn delay={700} className="flex flex-col items-center mb-8">
        <div className="relative w-full max-w-md">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D35400] to-[#D4A853]" />
            <div className="flex items-center gap-2 bg-[#D4A853] px-4 py-2 rounded-full">
              <GitMerge size={20} className="text-black" />
              <span className="text-black font-bold text-sm">CONVERGÊNCIA</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#27AE60] to-[#D4A853]" />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2 font-semibold">
            Os dois caminhos se encontram aqui
          </p>
        </div>
      </FadeIn>

      {/* Estações Unificadas */}
      <div className="w-full max-w-3xl mx-auto space-y-4">
        <FadeIn delay={900}>
          <h3 className="text-center font-bold text-lg mb-4" style={{ color: "#D4A853" }}>
            ⭐ Jornada Unificada
          </h3>
        </FadeIn>

        <JourneyStation
          color="#D4A853"
          from="Comprador"
          to="Aluno"
          trigger="Webinar → compra Protocolo ou Trekking Fit"
          emotion="Comprometimento"
          price="R$297"
          delay={1000}
        />
        
        <div className="flex justify-center">
          <ArrowDown size={24} style={{ color: "#D4A853" }} className="animate-bounce" />
        </div>
        
        <JourneyStation
          color="#D4A853"
          from="Aluno"
          to="VIP"
          trigger="Resultados → aplica consultoria"
          emotion="Ambição"
          price="R$2.997"
          delay={1200}
        />
      </div>

      {/* Barra Horizontal - Comunidade */}
      <FadeIn delay={1400} className="w-full max-w-4xl mx-auto mt-10">
        <div 
          className="p-4 rounded-lg border-2 text-center"
          style={{ backgroundColor: "#2C1555", borderColor: "#9B59B6" }}
        >
          <p className="font-bold text-lg" style={{ color: "#9B59B6" }}>
            🔄 Comunidade GG — R$47-97/mês — acompanha toda a jornada
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Disponível em qualquer ponto do caminho
          </p>
        </div>
      </FadeIn>
    </div>

    <FadeIn delay={1600} className="w-full max-w-2xl mx-auto mt-10">
      <FooterQuote text="Dois caminhos de entrada. Um ecossistema. Uma máquina." />
    </FadeIn>
  </SlideWrapper>
);

export default Slide14JornadaCompleta;
