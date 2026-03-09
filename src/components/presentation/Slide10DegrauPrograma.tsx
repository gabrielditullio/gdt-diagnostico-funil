import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import StairIndicator from "./StairIndicator";
import TabsLinhas from "./TabsLinhas";
import { Shield, CheckCheck, Star, Info } from "lucide-react";

const tabs = [
  {
    label: "Protocolo GG",
    color: "#D35400",
    content: (
      <div className="flex flex-col items-center py-6 space-y-4 relative rounded-xl" style={{ border: "2px dashed rgba(211, 84, 0, 0.5)" }}>
        {/* Badge "PRECISA DE FUNIL NOVO" */}
        <div className="absolute top-2 right-2">
          <span className="text-[10px] font-bold px-2 py-1 rounded border-2 border-dashed" style={{ borderColor: "#D35400", color: "#D35400" }}>
            PRECISA DE FUNIL NOVO
          </span>
        </div>

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
    label: "Trekking Fit",
    color: "#27AE60",
    content: (
      <div className="flex flex-col items-center py-6 space-y-5 relative rounded-xl" style={{ backgroundColor: "#0A1A0A", border: "3px solid #27AE60" }}>
        {/* Badge "JÁ EXISTE E FUNCIONA" */}
        <FadeIn>
          <div className="flex items-center gap-2 px-5 py-3 rounded-lg" style={{ backgroundColor: "#27AE60" }}>
            <CheckCheck size={20} color="white" />
            <span className="text-white font-bold text-sm tracking-wide">JÁ EXISTE E FUNCIONA</span>
          </div>
        </FadeIn>

        {/* Cards dos 3 planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-lg px-4">
          <FadeIn delay={100}>
            <div className="p-5 rounded-xl border text-center" style={{ borderColor: "#27AE60", backgroundColor: "#0A1A0A" }}>
              <p className="text-sm font-bold text-white mb-2">Mensal</p>
              <p className="text-2xl font-black" style={{ color: "#27AE60" }}>R$297<span className="text-sm font-normal text-gray-400">/mês</span></p>
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <div className="p-5 rounded-xl border-2 text-center relative" style={{ borderColor: "#27AE60", backgroundColor: "#0A1A0A" }}>
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap" style={{ backgroundColor: "#27AE60", color: "white" }}>
                <Star size={10} /> Mais escolhido
              </span>
              <p className="text-sm font-bold text-white mb-2 mt-1">Trimestral</p>
              <p className="text-2xl font-black" style={{ color: "#27AE60" }}>R$597</p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="p-5 rounded-xl border text-center" style={{ borderColor: "#27AE60", backgroundColor: "#0A1A0A" }}>
              <p className="text-sm font-bold text-white mb-2">Semestral</p>
              <p className="text-2xl font-black" style={{ color: "#27AE60" }}>R$997</p>
            </div>
          </FadeIn>
        </div>

        {/* Callout narrativo */}
        <FadeIn delay={600}>
          <div className="flex items-start gap-3 max-w-md px-4 py-4 rounded-lg mx-4" style={{ backgroundColor: "#1A1A1A", borderLeft: "3px solid #27AE60" }}>
            <Info size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#27AE60" }} />
            <p className="text-sm text-gray-300 leading-relaxed">
              O quiz já vende esse produto. O que muda é que agora <strong className="text-white">qualquer homem pode acessar</strong> — não só ex-Legendários.
            </p>
          </div>
        </FadeIn>
      </div>
    )
  }
];

const Slide10DegrauPrograma = () => (
  <SlideWrapper theme="dark">
    <div className="flex justify-between items-start mb-4">
      <FadeIn>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Degrau 3</span>
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">O Programa Completo</h2>
          <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none text-sm md:text-base px-3 py-1 font-bold">
            R$297-997
          </Badge>
        </div>
      </FadeIn>
      <FadeIn delay={200}>
        <StairIndicator currentStep={3} totalSteps={5} className="scale-125 origin-top-right opacity-80" />
      </FadeIn>
    </div>

    {/* Narrativa */}
    <FadeIn delay={250} className="max-w-3xl mx-auto mb-4">
      <div className="space-y-3 text-sm md:text-base text-gray-300 leading-relaxed">
        <p>
          Pro <strong className="text-white">Trekking Fit</strong>, você já tem o caminho montado — o quiz funciona, a oferta funciona, os planos de <span style={{ color: "#27AE60" }}>R$297/mês a R$997/semestre</span> estão configurados. O que muda é que agora fica <strong className="text-white">ABERTO</strong> pra qualquer homem.
        </p>
        <p>
          Pro <strong style={{ color: "#D35400" }}>Protocolo GG</strong>, é diferente — esse produto existe na Hotmart mas não tem funil. A gente cria uma <strong className="text-white">aula de 60 minutos</strong> onde você mostra os bastidores do Léo e no final apresenta a oferta empilhada.
        </p>
      </div>
    </FadeIn>

    <FadeIn delay={300} className="w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center mb-4">
      <TabsLinhas tabs={tabs} />
    </FadeIn>

  </SlideWrapper>
);

export default Slide10DegrauPrograma;
