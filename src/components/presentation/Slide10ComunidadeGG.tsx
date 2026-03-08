import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import StairIndicator from "./StairIndicator";
import TabsLinhas from "./TabsLinhas";
import AccordionEntregaveis from "./AccordionEntregaveis";
import { Shield } from "lucide-react";

const tabs = [
  {
    label: "Linha GG",
    color: "#D35400",
    content: (
      <div className="flex flex-col items-center py-6 space-y-4">
        <FadeIn delay={0}>
          <div className="flex items-center justify-between w-full max-w-md px-4 py-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-sm">Protocolo GG completo via App MFIT</span>
            <span className="text-red-500 line-through font-semibold">R$997</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={300}>
          <div className="flex items-center justify-between w-full max-w-md px-4 py-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-sm">Vídeos demonstrativos de cada exercício</span>
            <span className="text-red-500 line-through font-semibold">R$497</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={600}>
          <div className="flex items-center justify-between w-full max-w-md px-4 py-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-sm">Módulo de Mobilidade e Performance</span>
            <span className="text-red-500 line-through font-semibold">R$297</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={900}>
          <div className="flex items-center justify-between w-full max-w-md px-4 py-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-sm">Divisão de Elite por grupo muscular</span>
            <span className="text-red-500 line-through font-semibold">R$197</span>
          </div>
        </FadeIn>

        <FadeIn delay={1200}>
          <div className="w-full max-w-md border-t border-white/20 my-4"></div>
        </FadeIn>

        <FadeIn delay={1400}>
          <div className="text-center space-y-2">
            <p className="text-red-500 line-through text-lg font-semibold">Valor total: R$1.988</p>
          </div>
        </FadeIn>

        <FadeIn delay={1600}>
          <div className="text-center space-y-4 mt-6">
            <div className="animate-scale-in">
              <p className="text-6xl md:text-7xl font-black" style={{ color: "#D35400" }}>R$297</p>
            </div>
            <Badge className="bg-green-600 hover:bg-green-700 text-white border-none px-4 py-2">
              <Shield size={16} className="mr-2" />
              Garantia de 7 Dias
            </Badge>
          </div>
        </FadeIn>
      </div>
    )
  },
  {
    label: "Linha Trekking",
    color: "#27AE60",
    content: (
      <div className="flex flex-col items-center py-6 space-y-4">
        <FadeIn delay={0}>
          <div className="flex items-center justify-between w-full max-w-md px-4 py-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-sm">Programa de 8 semanas completo</span>
            <span className="text-red-500 line-through font-semibold">R$797</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={300}>
          <div className="flex items-center justify-between w-full max-w-md px-4 py-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-sm">Protocolo de mobilidade articular</span>
            <span className="text-red-500 line-through font-semibold">R$397</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={600}>
          <div className="flex items-center justify-between w-full max-w-md px-4 py-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-sm">Guia de nutrição pré-trilha</span>
            <span className="text-red-500 line-through font-semibold">R$197</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={900}>
          <div className="flex items-center justify-between w-full max-w-md px-4 py-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-sm">Checklist de equipamento essencial</span>
            <span className="text-red-500 line-through font-semibold">R$97</span>
          </div>
        </FadeIn>

        <FadeIn delay={1200}>
          <div className="w-full max-w-md border-t border-white/20 my-4"></div>
        </FadeIn>

        <FadeIn delay={1400}>
          <div className="text-center space-y-2">
            <p className="text-red-500 line-through text-lg font-semibold">Valor total: R$1.488</p>
          </div>
        </FadeIn>

        <FadeIn delay={1600}>
          <div className="text-center space-y-4 mt-6">
            <div className="animate-scale-in">
              <p className="text-6xl md:text-7xl font-black" style={{ color: "#27AE60" }}>R$297</p>
            </div>
            <Badge className="bg-green-600 hover:bg-green-700 text-white border-none px-4 py-2">
              <Shield size={16} className="mr-2" />
              Garantia de 7 Dias
            </Badge>
          </div>
        </FadeIn>
      </div>
    )
  }
];

const Slide10ComunidadeGG = () => (
  <SlideWrapper theme="dark">
    <div className="flex justify-between items-start mb-6">
      <FadeIn>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Degrau 3</span>
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">O Programa Completo</h2>
          <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none text-sm md:text-base px-3 py-1 font-bold">
            R$297
          </Badge>
        </div>
      </FadeIn>
      <FadeIn delay={200}>
        <StairIndicator currentStep={3} totalSteps={5} className="scale-125 origin-top-right opacity-80" />
      </FadeIn>
    </div>

    <FadeIn delay={300} className="w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center mb-6">
      <TabsLinhas tabs={tabs} />
    </FadeIn>

    <FadeIn delay={500} className="w-full max-w-2xl mx-auto mt-auto">
      <AccordionEntregaveis 
        title="O que será construído neste degrau"
        items={[
          "Roteiro do webinar de 60 minutos — texto completo",
          "Página de inscrição para aula",
          "Página de venda com Stack visual",
          "Emails de convite e follow-up pós-aula"
        ]}
      />
    </FadeIn>
  </SlideWrapper>
);

export default Slide10ComunidadeGG;
