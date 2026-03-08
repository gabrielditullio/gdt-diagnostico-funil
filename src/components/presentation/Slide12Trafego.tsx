import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import StairIndicator from "./StairIndicator";
import AccordionEntregaveis from "./AccordionEntregaveis";
import FooterQuote from "./FooterQuote";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, TrendingUp, Crown } from "lucide-react";

const Slide12Trafego = () => (
  <SlideWrapper theme="dark">
    <div className="flex justify-between items-start mb-8">
      <FadeIn>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Degrau 5</span>
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">A Comunidade GG</h2>
          <Badge className="bg-purple-600 hover:bg-purple-700 text-white border-none text-sm md:text-base px-3 py-1 font-bold">
            R$47-97/mês
          </Badge>
        </div>
      </FadeIn>
      <FadeIn delay={200}>
        <StairIndicator currentStep={5} totalSteps={5} className="scale-125 origin-top-right opacity-80" />
      </FadeIn>
    </div>

    {/* Mockup da Interface da Comunidade */}
    <FadeIn delay={300} className="w-full max-w-4xl mx-auto mb-8">
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold" style={{ color: "#D35400" }}>
              🔥 Treino do Mês
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-300">Peito Denso — Protocolo Avançado</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold text-purple-400">
              🎥 Live Q&A
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-300">Quinta-feira às 20h com Felipe</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold text-yellow-400">
              🏆 Ranking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-300">Desafio Ombro Blindado</p>
          </CardContent>
        </Card>
      </div>

      {/* Avatares Online */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <Users size={16} className="text-green-400" />
        <span className="text-xs text-gray-400 mr-2">Membros online agora:</span>
        <div className="flex -space-x-2">
          {["#D35400", "#27AE60", "#3498DB", "#9B59B6", "#E74C3C", "#F39C12"].map((color, i) => (
            <Avatar key={i} className="w-8 h-8 border-2 border-background">
              <AvatarFallback style={{ backgroundColor: color }}>
                {String.fromCharCode(65 + i)}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </FadeIn>

    {/* Cálculo em Destaque */}
    <FadeIn delay={500} className="w-full max-w-3xl mx-auto mb-10">
      <div className="text-center p-8 bg-gradient-to-r from-purple-900/20 to-orange-900/20 rounded-xl border border-white/10">
        <p className="text-4xl md:text-6xl font-black mb-2">
          <span className="text-white">300 membros</span> × <span style={{ color: "#D35400" }}>R$47/mês</span>
        </p>
        <p className="text-2xl md:text-4xl font-black" style={{ color: "#27AE60" }}>
          = R$14.100 <span className="text-white">TODO MÊS</span>
        </p>
      </div>
    </FadeIn>

    {/* Cards de Planos */}
    <FadeIn delay={700} className="w-full max-w-4xl mx-auto mb-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Plano Base */}
        <Card className="bg-white/5 border-white/20">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-center">Plano Base</CardTitle>
            <p className="text-3xl font-black text-center mt-2" style={{ color: "#3498DB" }}>
              R$47/mês
            </p>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-start gap-2 text-sm">
              <span style={{ color: "#27AE60" }}>✓</span>
              <span>Treinos mensais exclusivos</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <span style={{ color: "#27AE60" }}>✓</span>
              <span>Lives semanais de Q&A</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <span style={{ color: "#27AE60" }}>✓</span>
              <span>Desafios e rankings</span>
            </div>
          </CardContent>
        </Card>

        {/* Plano Completo */}
        <Card 
          className="relative"
          style={{ backgroundColor: "#1A1A1A", border: "2px solid #D35400" }}
        >
          <Badge 
            className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold"
            style={{ backgroundColor: "#D35400", color: "#FFF" }}
          >
            <Crown size={12} className="mr-1" />
            Mais Popular
          </Badge>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-center">Plano Completo</CardTitle>
            <p className="text-3xl font-black text-center mt-2" style={{ color: "#D35400" }}>
              R$97/mês
            </p>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-start gap-2 text-sm">
              <span style={{ color: "#27AE60" }}>✓</span>
              <span>Tudo do Plano Base</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <span style={{ color: "#D35400" }}>✓</span>
              <span className="font-bold">Plano Alimentar da Camila</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <span style={{ color: "#D35400" }}>✓</span>
              <span className="font-bold">Acesso prioritário às lives</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </FadeIn>

    {/* Gráfico MRR */}
    <FadeIn delay={900} className="w-full max-w-3xl mx-auto mb-8">
      <h4 className="text-center font-bold text-lg mb-4" style={{ color: "#D35400" }}>
        <TrendingUp className="inline mr-2" size={20} />
        Crescimento do MRR (Receita Recorrente Mensal)
      </h4>
      <div className="flex items-end justify-around gap-2 h-48 px-4">
        {[
          { month: "Mês 1", value: 5, display: "R$5K" },
          { month: "Mês 3", value: 10, display: "R$10K" },
          { month: "Mês 6", value: 15, display: "R$15K" },
          { month: "Mês 12", value: 20, display: "R$20K" }
        ].map((bar, i) => (
          <div key={i} className="flex flex-col items-center flex-1 max-w-[100px]">
            <div className="w-full flex flex-col items-center">
              <span className="text-xs font-bold mb-2" style={{ color: "#27AE60" }}>
                {bar.display}
              </span>
              <div 
                className="w-full rounded-t-lg transition-all duration-500"
                style={{ 
                  height: `${bar.value * 8}px`,
                  backgroundColor: `hsl(${120 + i * 20}, 60%, 40%)`,
                  background: `linear-gradient(to top, hsl(${120 + i * 20}, 60%, 40%), hsl(${120 + i * 20}, 70%, 50%))`
                }}
              />
            </div>
            <span className="text-xs mt-2 text-gray-400">{bar.month}</span>
          </div>
        ))}
      </div>
    </FadeIn>

    <FadeIn delay={1100} className="w-full max-w-2xl mx-auto mt-auto">
      <AccordionEntregaveis 
        title="O que será construído neste degrau"
        items={[
          "Plataforma configurada (Telegram/Discord/Hotmart)",
          "Estrutura de conteúdo do primeiro mês",
          "Página de vendas da comunidade",
          "Cobrança recorrente configurada",
          "Integração: comprador do Protocolo recebe oferta automática"
        ]}
      />
      <FooterQuote text="Sem lançar nada novo, sem campanha, sem stress." className="mt-6" />
    </FadeIn>
  </SlideWrapper>
);

export default Slide12Trafego;
