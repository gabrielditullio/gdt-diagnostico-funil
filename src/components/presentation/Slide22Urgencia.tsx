import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, GitBranch } from "lucide-react";

const scenarioA = [
  "Escada completa funcionando",
  "R$50K/mês no mês 6",
  "Comunidade crescendo",
  "YouTube bombando",
  "Dono do mercado Legendários"
];

const scenarioB = [
  "Mesmos 49K seguidores em 1 ano",
  "Zero emails capturados",
  "Outro personal planta a bandeira",
  "Site continua fora do ar",
  "Oportunidade Léo Santana desperdiçada"
];

const Slide22Resumo = () => (
  <SlideWrapper theme="dark">
    <FadeIn>
      <h2 className="text-center mb-12 font-bold" style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>
        O que Acontece se Nada Mudar?
      </h2>
    </FadeIn>

    {/* Fork Visual */}
    <FadeIn delay={300} className="w-full max-w-6xl mx-auto mb-12">
      {/* Ponto Central */}
      <div className="flex justify-center mb-8">
        <div 
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#D35400" }}
        >
          <GitBranch size={40} className="text-white" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* CENÁRIO A - FAZ */}
        <div className="relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              CENÁRIO A: FAZ
            </div>
          </div>
          
          <Card 
            className="border-2 overflow-hidden"
            style={{ 
              borderColor: "#27AE60",
              background: "linear-gradient(135deg, rgba(39, 174, 96, 0.15), rgba(46, 204, 113, 0.1))"
            }}
          >
            <CardContent className="p-6 pt-8 space-y-3">
              {scenarioA.map((item, i) => (
                <FadeIn key={i} delay={500 + i * 100}>
                  <div className="flex items-start gap-3 bg-white/10 p-3 rounded-lg">
                    <CheckCircle2 size={20} className="text-green-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                </FadeIn>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* CENÁRIO B - NÃO FAZ */}
        <div className="relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              CENÁRIO B: NÃO FAZ
            </div>
          </div>
          
          <Card 
            className="border-2 overflow-hidden opacity-75"
            style={{ 
              borderColor: "#666",
              backgroundColor: "rgba(0, 0, 0, 0.3)"
            }}
          >
            <CardContent className="p-6 pt-8 space-y-3">
              {scenarioB.map((item, i) => (
                <FadeIn key={i} delay={500 + i * 100}>
                  <div className="flex items-start gap-3 bg-black/20 p-3 rounded-lg">
                    <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-300">{item}</span>
                  </div>
                </FadeIn>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </FadeIn>

    {/* Frase de Impacto */}
    <FadeIn delay={1200} className="w-full max-w-4xl mx-auto">
      <div 
        className="p-8 rounded-xl border-2 text-center"
        style={{ borderColor: "#D35400", backgroundColor: "rgba(211, 84, 0, 0.1)" }}
      >
        <p className="text-xl md:text-3xl font-black leading-relaxed">
          A pergunta não é <span style={{ color: "#3498DB" }}>"posso fazer isso?"</span>.
          <br />
          É <span style={{ color: "#D35400" }}>"posso me dar ao luxo de NÃO fazer?"</span>
        </p>
      </div>
    </FadeIn>
  </SlideWrapper>
);

export default Slide22Resumo;
