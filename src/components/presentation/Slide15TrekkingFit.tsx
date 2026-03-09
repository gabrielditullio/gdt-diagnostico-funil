import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AccordionEntregaveis from "./AccordionEntregaveis";
import { Lock, CheckCircle2, X, Check, Zap, Clock, TrendingUp } from "lucide-react";

const Slide15TrekkingFit = () => (
  <SlideWrapper theme="light">
    {/* Badge Quick Win */}
    <FadeIn>
      <div className="flex justify-center mb-8">
        <Badge 
          className="px-6 py-3 text-lg font-black border-2"
          style={{ backgroundColor: "#FEF0E0", color: "#D35400", borderColor: "#D35400" }}
        >
          <Zap size={24} className="mr-2" />
          QUICK WIN
        </Badge>
      </div>
    </FadeIn>

    <FadeIn delay={200}>
      <h2 className="text-center mb-12 text-gray-900 font-bold" style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>
        Tem UMA coisa que dá pra fazer AMANHÃ
      </h2>
    </FadeIn>

    {/* Antes/Depois */}
    <FadeIn delay={400} className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto mb-12">
      {/* ANTES */}
      <Card 
        className="border-4 relative overflow-hidden"
        style={{ 
          backgroundColor: "rgba(0,0,0,0.05)", 
          borderColor: "#E74C3C" 
        }}
      >
        <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-xs font-bold">
          ANTES
        </div>
        <CardContent className="flex flex-col items-center justify-center min-h-[280px] p-8">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: "#E74C3C" }}
          >
            <Lock size={40} className="text-white" />
          </div>
          
          <div className="mb-6">
            <svg width="120" height="40" viewBox="0 0 120 40" className="mx-auto">
              <defs>
                <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#E74C3C" />
                </marker>
              </defs>
              <line 
                x1="10" y1="20" x2="110" y2="20" 
                stroke="#E74C3C" 
                strokeWidth="3" 
                strokeDasharray="5,5"
                markerEnd="url(#arrowRed)"
              />
              <text x="60" y="12" textAnchor="middle" fill="#E74C3C" fontSize="20" fontWeight="bold">✗</text>
            </svg>
          </div>

          <p className="text-center text-gray-700 font-semibold text-lg leading-relaxed">
            Não conhece o Legendários?<br/>
            <span className="font-black text-red-600">Não pode comprar.</span>
          </p>
        </CardContent>
      </Card>

      {/* DEPOIS */}
      <Card 
        className="border-4 relative overflow-hidden"
        style={{ 
          backgroundColor: "rgba(39, 174, 96, 0.05)", 
          borderColor: "#27AE60" 
        }}
      >
        <div className="absolute top-0 left-0 bg-green-600 text-white px-3 py-1 text-xs font-bold">
          DEPOIS
        </div>
        <CardContent className="flex flex-col items-center justify-center min-h-[280px] p-8">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: "#27AE60" }}
          >
            <CheckCircle2 size={40} className="text-white" />
          </div>
          
          <div className="mb-6">
            <svg width="120" height="40" viewBox="0 0 120 40" className="mx-auto">
              <defs>
                <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#27AE60" />
                </marker>
              </defs>
              <line 
                x1="10" y1="20" x2="110" y2="20" 
                stroke="#27AE60" 
                strokeWidth="3" 
                markerEnd="url(#arrowGreen)"
              />
              <text x="60" y="12" textAnchor="middle" fill="#27AE60" fontSize="20" fontWeight="bold">✓</text>
            </svg>
          </div>

          <p className="text-center text-gray-700 font-semibold text-lg leading-relaxed">
            Todos os caminhos<br/>
            <span className="font-black text-green-600">levam à compra.</span>
          </p>
        </CardContent>
      </Card>
    </FadeIn>

    {/* 3 Badges de Métricas */}
    <FadeIn delay={600} className="flex flex-wrap justify-center gap-4 mb-10">
      <Badge className="px-6 py-3 text-base font-bold bg-blue-100 text-blue-700 border-2 border-blue-400">
        <span style={{ color: "#3498DB" }}>💰</span> Custo: <span className="ml-1 font-black">R$0</span>
      </Badge>
      <Badge className="px-6 py-3 text-base font-bold bg-purple-100 text-purple-700 border-2 border-purple-400">
        <Clock size={18} className="mr-1" /> Tempo: <span className="ml-1 font-black">1 hora</span>
      </Badge>
      <Badge className="px-6 py-3 text-base font-bold bg-green-100 text-green-700 border-2 border-green-400">
        <TrendingUp size={18} className="mr-1" /> Impacto: <span className="ml-1 font-black">até 5x mais vendas</span>
      </Badge>
    </FadeIn>

    <FadeIn delay={800} className="w-full max-w-2xl mx-auto">
      <AccordionEntregaveis 
        title="O que será construído"
        items={[
          "Novo fluxo do quiz reestruturado",
          "Textos específicos por perfil (quem já fez, quem vai fazer, quem está pensando)",
          "Página de captura aberta para todos os públicos",
          "Testes A/B para validar a conversão"
        ]}
      />
    </FadeIn>
  </SlideWrapper>
);

export default Slide15TrekkingFit;
