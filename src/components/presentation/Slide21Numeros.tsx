import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import AccordionEntregaveis from "./AccordionEntregaveis";
import { DollarSign, Users, TrendingUp, Target } from "lucide-react";

const Slide21Risco = () => (
  <SlideWrapper theme="light">
    <FadeIn>
      <h2 className="text-center mb-4 text-gray-900 font-bold" style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>
        O que Esperar — Sem Vender Ilusão
      </h2>
    </FadeIn>

    {/* Grid de Premissas */}
    <FadeIn delay={200} className="w-full max-w-5xl mx-auto mb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-blue-50 border-2 border-blue-200">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <DollarSign size={24} className="text-blue-600 mb-2" />
            <p className="text-xs text-gray-600 mb-1">Investimento em Ads</p>
            <p className="font-black text-lg text-blue-700">R$3.000/mês</p>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-2 border-purple-200">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <Target size={24} className="text-purple-600 mb-2" />
            <p className="text-xs text-gray-600 mb-1">Custo por Lead</p>
            <p className="font-black text-lg text-purple-700">~R$3</p>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-2 border-green-200">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <Users size={24} className="text-green-600 mb-2" />
            <p className="text-xs text-gray-600 mb-1">Leads por Mês</p>
            <p className="font-black text-lg text-green-700">~1.000</p>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 border-2 border-orange-200">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <TrendingUp size={24} className="text-orange-600 mb-2" />
            <p className="text-xs text-gray-600 mb-1">Compradores Frontend</p>
            <p className="font-black text-lg text-orange-700">~30/mês (3%)</p>
          </CardContent>
        </Card>
      </div>
    </FadeIn>

    {/* Barras de Receita */}
    <FadeIn delay={400} className="w-full max-w-4xl mx-auto mb-10">
      <h3 className="text-center font-bold text-lg mb-6 text-gray-700">
        Receita Mensal Estimada (Mês 6):
      </h3>

      <div className="space-y-4">
        {/* Frontend + Bumps */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-semibold text-gray-700">Frontend + Bumps</span>
            <span className="text-sm font-black" style={{ color: "#E8A45C" }}>R$3.000</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
            <div 
              className="h-full rounded-full flex items-center justify-end px-2 transition-all duration-1000"
              style={{ 
                width: "20%",
                background: "linear-gradient(90deg, #E8A45C, #F5B87A)"
              }}
            />
          </div>
        </div>

        {/* Protocolo GG + Trekking Fit */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-semibold text-gray-700">Protocolo GG + Trekking Fit</span>
            <span className="text-sm font-black" style={{ color: "#F39C12" }}>R$12.000 - R$18.000</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
            <div 
              className="h-full rounded-full flex items-center justify-end px-2 transition-all duration-1000"
              style={{ 
                width: "50%",
                background: "linear-gradient(90deg, #F39C12, #F5A73D)"
              }}
            />
          </div>
        </div>

        {/* Consultoria VIP */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-semibold text-gray-700">Consultoria VIP</span>
            <span className="text-sm font-black" style={{ color: "#E74C3C" }}>R$9.000 - R$15.000</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
            <div 
              className="h-full rounded-full flex items-center justify-end px-2 transition-all duration-1000"
              style={{ 
                width: "45%",
                background: "linear-gradient(90deg, #E74C3C, #EC7063)"
              }}
            />
          </div>
        </div>

        {/* Comunidade */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-semibold text-gray-700">Comunidade (~200 membros)</span>
            <span className="text-sm font-black" style={{ color: "#9B59B6" }}>R$9.400 - R$19.400</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
            <div 
              className="h-full rounded-full flex items-center justify-end px-2 transition-all duration-1000"
              style={{ 
                width: "55%",
                background: "linear-gradient(90deg, #9B59B6, #AF7AC5)"
              }}
            />
          </div>
        </div>
      </div>
    </FadeIn>

    {/* Totais Gigantes */}
    <FadeIn delay={700} className="w-full max-w-4xl mx-auto mb-8">
      <div className="text-center p-6 md:p-8 rounded-xl border-2" style={{ borderColor: "#D35400", background: "linear-gradient(135deg, #FEF5EB, #FEF0E0)" }}>
        <p className="text-base md:text-lg font-bold text-gray-700 mb-2">Total Mensal (Mês 6):</p>
        <p 
          className="font-black mb-4 md:mb-6"
          style={{ 
            fontSize: "clamp(1.75rem, 6vw, 3.75rem)",
            color: "#D35400",
            textShadow: "0 0 20px rgba(211, 84, 0, 0.3)"
          }}
        >
          R$33.000 — R$55.000
        </p>
        
        <div className="h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent my-4 md:my-6" />
        
        <p className="text-base md:text-lg font-bold text-gray-700 mb-2">Total Anual:</p>
        <p 
          className="font-black"
          style={{ 
            fontSize: "clamp(1.75rem, 6vw, 3.75rem)",
            color: "#27AE60",
            textShadow: "0 0 20px rgba(39, 174, 96, 0.3)"
          }}
        >
          R$350.000 — R$550.000
        </p>
      </div>
    </FadeIn>

    {/* Disclaimer */}
    <FadeIn delay={900} className="w-full max-w-3xl mx-auto mb-8">
      <p className="text-center text-sm italic text-gray-500 leading-relaxed">
        Projeção conservadora baseada em benchmarks do mercado fitness brasileiro. Resultados dependem de execução.
      </p>
    </FadeIn>

    <FadeIn delay={1000} className="w-full max-w-2xl mx-auto">
      <AccordionEntregaveis
        title="Ferramentas de acompanhamento"
        items={[
          "Planilha financeira mês a mês com cenários",
          "Dashboard de 5 KPIs semanais (leads, conversão, receita, comunidade, CAC)",
          "Meta trimestral clara e realista"
        ]}
      />
    </FadeIn>
  </SlideWrapper>
);

export default Slide21Risco;
