import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Mountain, ArrowLeft, ArrowRight, RefreshCw } from "lucide-react";

const months = [
  { name: "Jan", hasRetiro: true },
  { name: "Fev", hasRetiro: false },
  { name: "Mar", hasRetiro: true },
  { name: "Abr", hasRetiro: false },
  { name: "Mai", hasRetiro: true },
  { name: "Jun", hasRetiro: false },
  { name: "Jul", hasRetiro: true },
  { name: "Ago", hasRetiro: false },
  { name: "Set", hasRetiro: true },
  { name: "Out", hasRetiro: false },
  { name: "Nov", hasRetiro: true },
  { name: "Dez", hasRetiro: false }
];

const Slide16Calendario = () => (
  <SlideWrapper theme="light">
    <FadeIn>
      <h2 className="text-center mb-4 text-gray-900 font-bold" style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>
        O Calendário que Vende por Você
      </h2>
      <p className="text-center text-gray-600 text-sm md:text-base mb-10">
        Cada retiro anunciado é um lançamento sem precisar criar produto novo.
      </p>
    </FadeIn>

    {/* Grid de Calendário 12 meses */}
    <FadeIn delay={300} className="w-full max-w-5xl mx-auto mb-10">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {months.map((month, i) => (
          <FadeIn key={month.name} delay={300 + i * 50}>
            <Card 
              className={`relative border-2 transition-all hover:scale-105 ${
                month.hasRetiro 
                  ? 'bg-gradient-to-br from-green-50 to-green-100' 
                  : 'bg-gray-50'
              }`}
              style={{ 
                borderColor: month.hasRetiro ? "#27AE60" : "#CCCCCC" 
              }}
            >
              <CardContent className="p-4 flex flex-col items-center justify-center min-h-[100px]">
                <h3 className="font-black text-xl mb-2" style={{ color: month.hasRetiro ? "#27AE60" : "#999" }}>
                  {month.name}
                </h3>
                
                {month.hasRetiro ? (
                  <>
                    <Mountain size={32} style={{ color: "#27AE60" }} className="mb-2" />
                    <Badge 
                      className="text-xs px-2 py-0.5 font-bold"
                      style={{ backgroundColor: "#27AE60", color: "#FFF" }}
                    >
                      RETIRO
                    </Badge>
                    <div className="absolute -top-2 -right-2">
                      <ArrowLeft size={16} style={{ color: "#D35400" }} className="animate-pulse" />
                    </div>
                    <p className="text-[9px] text-center mt-1 font-semibold text-orange-600">
                      Campanha 8 sem. antes
                    </p>
                  </>
                ) : (
                  <div className="h-8" />
                )}
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
      
      <p className="text-center text-sm mt-6 text-gray-600 font-medium">
        <Mountain size={16} className="inline mr-1" style={{ color: "#27AE60" }} />
        6 retiros por ano = 6 lançamentos automáticos
      </p>
    </FadeIn>

    {/* Ciclo Visual */}
    <FadeIn delay={800} className="w-full max-w-4xl mx-auto mb-10">
      <h4 className="text-center font-bold text-lg mb-6 text-gray-700">
        O Ciclo que se Repete:
      </h4>
      
      <div className="relative">
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
          <Badge className="px-4 py-2 text-sm font-bold bg-blue-100 text-blue-700 border-2 border-blue-400">
            📢 Retiro Anunciado
          </Badge>
          <ArrowRight size={24} className="text-gray-400 hidden md:block" />
          
          <Badge className="px-4 py-2 text-sm font-bold bg-orange-100 text-orange-700 border-2 border-orange-400">
            📧 Campanha Trekking Fit
          </Badge>
          <ArrowRight size={24} className="text-gray-400 hidden md:block" />
          
          <Badge className="px-4 py-2 text-sm font-bold bg-purple-100 text-purple-700 border-2 border-purple-400">
            🏋️ Preparação
          </Badge>
          <ArrowRight size={24} className="text-gray-400 hidden md:block" />
          
          <Badge className="px-4 py-2 text-sm font-bold bg-green-100 text-green-700 border-2 border-green-400">
            ⛰️ Retiro
          </Badge>
          <ArrowRight size={24} className="text-gray-400 hidden md:block" />
          
          <Badge className="px-4 py-2 text-sm font-bold bg-yellow-100 text-yellow-700 border-2 border-yellow-400">
            ⭐ Depoimentos
          </Badge>
        </div>
        
        <div className="flex justify-center mt-6">
          <RefreshCw size={32} className="text-green-600 animate-spin-slow" />
        </div>
        <p className="text-center text-xs text-gray-500 mt-2 font-semibold">
          E o ciclo recomeça...
        </p>
      </div>
    </FadeIn>

  </SlideWrapper>
);

export default Slide16Calendario;
