import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import StairIndicator from "./StairIndicator";
import AccordionEntregaveis from "./AccordionEntregaveis";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Calendar, MessageSquare, Video, User, Target } from "lucide-react";

const Slide11FelipeCamila = () => (
  <SlideWrapper theme="dark">
    <div className="flex justify-between items-start mb-8">
      <FadeIn>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Degrau 4</span>
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">O Acompanhamento VIP</h2>
          <Badge 
            className="text-sm md:text-base px-3 py-1 font-bold border-2"
            style={{ backgroundColor: "#D4A853", color: "#000", borderColor: "#FFD700" }}
          >
            R$2.997
          </Badge>
        </div>
      </FadeIn>
      <FadeIn delay={200}>
        <StairIndicator currentStep={4} totalSteps={5} className="scale-125 origin-top-right opacity-80" />
      </FadeIn>
    </div>

    {/* Card Premium com Formulário */}
    <FadeIn delay={300} className="w-full max-w-2xl mx-auto mb-8">
      <div 
        className="rounded-xl p-6 relative"
        style={{ backgroundColor: "#111", border: "2px solid #D4A853" }}
      >
        <Badge 
          className="absolute -top-3 right-4 px-3 py-1 text-xs font-bold"
          style={{ backgroundColor: "#D4A853", color: "#000" }}
        >
          <Lock size={12} className="mr-1" />
          Máximo 15-20 vagas
        </Badge>
        
        <h3 className="text-xl font-bold mb-4 text-center" style={{ color: "#D4A853" }}>
          Formulário de Aplicação
        </h3>
        
        <div className="space-y-4">
          <div>
            <Label className="text-sm text-gray-300 mb-1">Nome Completo</Label>
            <Input placeholder="Seu nome..." className="bg-white/5 border-white/20" disabled />
          </div>
          <div>
            <Label className="text-sm text-gray-300 mb-1">Objetivo Principal</Label>
            <Input placeholder="Ex: Ganhar massa, perder gordura..." className="bg-white/5 border-white/20" disabled />
          </div>
          <div>
            <Label className="text-sm text-gray-300 mb-1">Nível de Comprometimento (1-10)</Label>
            <Input placeholder="Digite um número de 1 a 10" className="bg-white/5 border-white/20" disabled />
          </div>
          <div>
            <Label className="text-sm text-gray-300 mb-1">Situação Atual</Label>
            <Input placeholder="Descreva brevemente..." className="bg-white/5 border-white/20" disabled />
          </div>
          
          <button 
            className="w-full py-3 rounded-lg font-bold text-white transition-all hover:scale-105"
            style={{ backgroundColor: "#D35400" }}
          >
            QUERO APLICAR
          </button>
        </div>
      </div>
    </FadeIn>

    {/* Comparativo de Preços */}
    <FadeIn delay={500} className="w-full max-w-4xl mx-auto mb-8">
      <div className="grid md:grid-cols-2 gap-4 items-center">
        {/* Presencial */}
        <div 
          className="p-6 rounded-lg border-2"
          style={{ backgroundColor: "#2C1111", borderColor: "#E74C3C" }}
        >
          <h4 className="font-bold text-lg mb-3 text-red-400">❌ Presencial</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            R$200/sessão × 3x/sem × 4 sem = <span className="text-xl font-black text-red-400">R$2.400/MÊS</span>
          </p>
        </div>

        {/* Online */}
        <div 
          className="p-6 rounded-lg border-2 relative"
          style={{ backgroundColor: "#112C1A", borderColor: "#27AE60" }}
        >
          <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            MELHOR CUSTO
          </div>
          <h4 className="font-bold text-lg mb-3 text-green-400">✅ Consultoria GG Online</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-xl font-black text-green-400">R$2.997</span> por <span className="font-bold">3 MESES COMPLETOS</span>
          </p>
        </div>
      </div>
    </FadeIn>

    {/* Lista de Inclusos */}
    <FadeIn delay={700} className="w-full max-w-3xl mx-auto mb-8">
      <h4 className="text-center font-bold text-lg mb-4" style={{ color: "#D4A853" }}>
        O que está incluído:
      </h4>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg">
          <Calendar size={20} style={{ color: "#D35400" }} />
          <span className="text-sm">90 dias de acompanhamento</span>
        </div>
        <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg">
          <Target size={20} style={{ color: "#D35400" }} />
          <span className="text-sm">Programa 100% personalizado</span>
        </div>
        <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg">
          <User size={20} style={{ color: "#D35400" }} />
          <span className="text-sm">Ajustes semanais</span>
        </div>
        <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg">
          <MessageSquare size={20} style={{ color: "#D35400" }} />
          <span className="text-sm">WhatsApp direto</span>
        </div>
        <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg">
          <Video size={20} style={{ color: "#D35400" }} />
          <span className="text-sm">4 calls em vídeo</span>
        </div>
        <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg">
          <User size={20} style={{ color: "#27AE60" }} />
          <span className="text-sm">Integração com Camila (nutrição)</span>
        </div>
      </div>
    </FadeIn>

    <FadeIn delay={900} className="w-full max-w-2xl mx-auto mt-auto">
      <AccordionEntregaveis 
        title="O que será construído neste degrau"
        items={[
          "Página de aplicação com vídeo e formulário",
          "Roteiro da ligação de qualificação",
          "Script de venda para a call",
          "Emails para compradores convidando para aplicar"
        ]}
      />
    </FadeIn>
  </SlideWrapper>
);

export default Slide11FelipeCamila;
