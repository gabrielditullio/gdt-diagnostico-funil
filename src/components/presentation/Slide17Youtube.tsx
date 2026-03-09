import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AccordionEntregaveis from "./AccordionEntregaveis";
import { DollarSign, Youtube, Mountain, ArrowDown, Mail, TrendingUp } from "lucide-react";

const Slide17Youtube = () => (
  <SlideWrapper theme="light">
    <FadeIn>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
        De Onde Vem o Povo
      </h2>
      <p className="text-center text-gray-600 text-sm md:text-base mb-12">
        Hoje você pesca com a mão. Com anúncios, é uma rede que trabalha 24 horas.
      </p>
    </FadeIn>

    {/* 3 Canais de Entrada */}
    <FadeIn delay={300} className="w-full max-w-5xl mx-auto mb-10">
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Canal 1: Ads */}
        <Card className="border-2 border-blue-400 bg-gradient-to-br from-blue-50 to-blue-100 hover:scale-105 transition-all">
          <CardHeader className="pb-3">
            <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: "#3498DB" }}>
              <DollarSign size={32} className="text-white" />
            </div>
            <CardTitle className="text-center text-lg font-black" style={{ color: "#3498DB" }}>
              Instagram/Facebook Ads
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <Badge className="px-4 py-2 text-sm font-bold" style={{ backgroundColor: "#3498DB", color: "#FFF" }}>
              R$30-50/dia
            </Badge>
            <p className="text-xs text-gray-600 mt-3 leading-relaxed">
              Anúncios que levam direto pra página de captura
            </p>
          </CardContent>
        </Card>

        {/* Canal 2: YouTube */}
        <Card className="border-2 border-red-400 bg-gradient-to-br from-red-50 to-red-100 hover:scale-105 transition-all">
          <CardHeader className="pb-3">
            <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: "#E74C3C" }}>
              <Youtube size={32} className="text-white" />
            </div>
            <CardTitle className="text-center text-lg font-black" style={{ color: "#E74C3C" }}>
              YouTube
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <Badge className="px-4 py-2 text-sm font-bold" style={{ backgroundColor: "#E74C3C", color: "#FFF" }}>
              Orgânico
            </Badge>
            <p className="text-xs text-gray-600 mt-3 leading-relaxed">
              "Bastidores do Treino do Gigante"
            </p>
          </CardContent>
        </Card>

        {/* Canal 3: Legendários */}
        <Card className="border-2 border-green-400 bg-gradient-to-br from-green-50 to-green-100 hover:scale-105 transition-all">
          <CardHeader className="pb-3">
            <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: "#27AE60" }}>
              <Mountain size={32} className="text-white" />
            </div>
            <CardTitle className="text-center text-lg font-black" style={{ color: "#27AE60" }}>
              Comunidades Legendários
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <Badge className="px-4 py-2 text-sm font-bold" style={{ backgroundColor: "#27AE60", color: "#FFF" }}>
              Eventos
            </Badge>
            <p className="text-xs text-gray-600 mt-3 leading-relaxed">
              Grupos e experiências presenciais
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Setas de Convergência */}
      <div className="flex justify-center mb-6">
        <div className="flex gap-4">
          <ArrowDown size={32} style={{ color: "#3498DB" }} className="animate-bounce" />
          <ArrowDown size={32} style={{ color: "#E74C3C" }} className="animate-bounce" style={{ animationDelay: "0.1s" }} />
          <ArrowDown size={32} style={{ color: "#27AE60" }} className="animate-bounce" style={{ animationDelay: "0.2s" }} />
        </div>
      </div>

      {/* Funil de Convergência */}
      <div className="space-y-4">
        <FadeIn delay={600}>
          <Card className="border-2 border-orange-400 bg-orange-50">
            <CardContent className="flex items-center justify-center gap-4 py-4">
              <Mail size={24} style={{ color: "#D35400" }} />
              <p className="font-bold text-lg" style={{ color: "#D35400" }}>
                Página de Captura
              </p>
            </CardContent>
          </Card>
        </FadeIn>

        <div className="flex justify-center">
          <ArrowDown size={28} className="text-gray-400" />
        </div>

        <FadeIn delay={700}>
          <Card className="border-2 border-purple-400 bg-purple-50">
            <CardContent className="flex items-center justify-center gap-4 py-4">
              <Mail size={24} style={{ color: "#9B59B6" }} />
              <p className="font-bold text-lg" style={{ color: "#9B59B6" }}>
                Lista de Email
              </p>
            </CardContent>
          </Card>
        </FadeIn>

        <div className="flex justify-center">
          <ArrowDown size={28} className="text-gray-400" />
        </div>

        <FadeIn delay={800}>
          <Card className="border-2 border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-100">
            <CardContent className="flex items-center justify-center gap-4 py-6">
              <TrendingUp size={28} style={{ color: "#D4A853" }} />
              <div>
                <p className="font-black text-xl" style={{ color: "#D4A853" }}>
                  A ESCADINHA
                </p>
                <div className="flex items-end gap-1 mt-2">
                  {[12, 20, 28, 36, 44].map((h, i) => (
                    <div 
                      key={i} 
                      className="w-3 rounded-sm"
                      style={{ height: `${h}px`, backgroundColor: "#D35400" }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </FadeIn>

    <FadeIn delay={1000} className="w-full max-w-3xl mx-auto mt-10">
      <AccordionEntregaveis 
        title="O que será construído"
        items={[
          "Plano de anúncios para 60 dias (criativos + copy + budget)",
          "5 roteiros de vídeos de anúncio (15-30s) testados",
          "8 títulos e roteiros prontos pro YouTube",
          "Estratégia de abordagem do Legendários (quando e como ofertar)",
          "Cronograma de publicação semanal integrado"
        ]}
      />
    </FadeIn>
  </SlideWrapper>
);

export default Slide17Youtube;
