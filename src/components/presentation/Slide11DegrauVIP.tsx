import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import StairIndicator from "./StairIndicator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Calendar, MessageSquare, Video, User, Target, Check, CheckCircle2, ArrowDown } from "lucide-react";

const Slide11DegrauVIP = () => (
  <SlideWrapper theme="dark">
    <div className="flex justify-between items-start mb-6">
      <FadeIn>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Degrau 4</span>
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Felipe + Camila</h2>
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

    {/* Narrativa atualizada */}
    <FadeIn delay={250} className="max-w-3xl mx-auto mb-6">
      <div className="space-y-3 text-sm md:text-base text-gray-300 leading-relaxed">
        <p>
          Uma coisa incrível que você <strong className="text-white">JÁ faz</strong>: no checkout do Trekking Fit, quando o cara vai pagar, aparece o eBook da Camila por R$29,90. Isso é inteligente. <span style={{ color: "#27AE60" }} className="font-semibold">Você já testou, já funciona.</span>
        </p>
        <p>
          O que a gente faz é <strong className="text-white">multiplicar isso</strong>. Cada produto da escada vai ter uma oferta da Camila integrada.
        </p>
      </div>
    </FadeIn>

    {/* Card de prova — Order Bump que já funciona */}
    <FadeIn delay={350} className="w-full max-w-2xl mx-auto mb-8">
      <div className="rounded-xl p-5 relative" style={{ backgroundColor: "#1A1A0F", border: "2px solid #D4A853" }}>
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 size={18} style={{ color: "#27AE60" }} />
          <h3 className="text-base font-bold" style={{ color: "#D4A853" }}>Já funciona no Trekking Fit</h3>
        </div>

        {/* Simulação de checkout */}
        <div className="bg-white rounded-lg p-4 mb-3 relative">
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200">
            <div>
              <p className="text-sm font-bold text-gray-900">Trekking Fit</p>
              <p className="text-xs text-gray-500">Programa de preparação física</p>
            </div>
            <span className="text-lg font-black text-gray-900">R$297</span>
          </div>

          {/* Order bump */}
          <div className="flex items-start gap-3 p-3 rounded-lg relative" style={{ backgroundColor: "#FFFDE7", border: "2px dashed #D4A853" }}>
            <div className="mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0" style={{ borderColor: "#27AE60", backgroundColor: "#27AE60" }}>
              <Check size={12} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-gray-800">eBook de Receitas por Camila Marinho</span>
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: "#D35400", color: "white" }}>OFERTA ESPECIAL</span>
              </div>
              <span className="text-sm font-black text-gray-900">R$29,90</span>
            </div>
          </div>

          {/* Seta apontando pro order bump */}
          <div className="absolute -right-2 top-[65%] flex items-center gap-1">
            <div className="w-8 h-0.5" style={{ backgroundColor: "#27AE60" }}></div>
            <span className="text-[9px] font-bold px-2 py-1 rounded whitespace-nowrap" style={{ backgroundColor: "#27AE60", color: "white" }}>
              JÁ EXISTE E FUNCIONA
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-400 text-center mt-3 font-medium">
          A gente replica essa lógica em <strong className="text-white">TODOS os checkouts</strong> da escada.
        </p>
      </div>
    </FadeIn>

    {/* Card Premium com Formulário */}
    <FadeIn delay={500} className="w-full max-w-2xl mx-auto mb-6">
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
          
          <button 
            className="w-full py-3 rounded-lg font-bold text-white transition-all hover:scale-105"
            style={{ backgroundColor: "#D35400" }}
          >
            QUERO APLICAR
          </button>
        </div>
      </div>
    </FadeIn>

    {/* Lista de Inclusos */}
    <FadeIn delay={700} className="w-full max-w-3xl mx-auto mb-6">
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

  </SlideWrapper>
);

export default Slide11DegrauVIP;
